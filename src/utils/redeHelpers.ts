// Normalizacao do campo `rede`, que o /api/consultaempresaNovoAppSite devolve
// como string[] (contrato atual do SGM v2), mas que no legado ainda aparece
// como string JSON ('["TIM","VIVO"]') ou string simples ("TIM" / "AMBOS").
// Espelha o parseRedeArray do new-sgm-v2 (src/lib/utils/rede-colors.ts).

export const REDE_NETWORKS = ["TIM", "VIVO", "AVT"] as const;

export type RedeNetwork = (typeof REDE_NETWORKS)[number];

// "AMBOS" nao e uma rede: e o coringa legado que significa "todas as redes
// que o parceiro vende". Tratado separadamente de REDE_NETWORKS.
export const REDE_ALL = "AMBOS";

export function isRedeNetwork(value: string): value is RedeNetwork {
  return (REDE_NETWORKS as readonly string[]).includes(value);
}

export function parseRedeArray(rede: unknown): string[] {
  if (Array.isArray(rede)) {
    return rede.filter(Boolean).map(String);
  }

  if (typeof rede !== "string" || !rede) {
    return [];
  }

  if (rede.startsWith("[")) {
    try {
      const parsed: unknown = JSON.parse(rede);

      if (Array.isArray(parsed)) {
        return parsed.filter(Boolean).map(String);
      }
    } catch {
      // string malformada: cai no retorno simples abaixo
    }
  }

  return [rede];
}

// Redes que o parceiro efetivamente vende. "AMBOS" (legado) expande para
// TIM + VIVO, que era o significado do termo antes da AVT existir.
export function normalizeCompanyNetworks(rede: unknown): RedeNetwork[] {
  const parsed = parseRedeArray(rede).map((item) => item.trim().toUpperCase());

  if (parsed.length === 0) {
    return ["TIM", "VIVO"];
  }

  const networks = new Set<RedeNetwork>();

  for (const item of parsed) {
    if (item === REDE_ALL) {
      networks.add("TIM");
      networks.add("VIVO");
      continue;
    }

    if (isRedeNetwork(item)) {
      networks.add(item);
    }
  }

  // Nenhum valor reconhecido (rede nova ainda nao mapeada aqui): assume o
  // comportamento anterior em vez de esconder todos os planos.
  if (networks.size === 0) {
    return ["TIM", "VIVO"];
  }

  return REDE_NETWORKS.filter((network) => networks.has(network));
}

// Redes cobertas pelo coringa "AMBOS". O termo nasceu quando so existiam TIM e
// VIVO, entao nao inclui AVT: so entra no filtro AVT o plano explicitamente
// marcado como AVT.
const REDE_ALL_LEGACY: readonly RedeNetwork[] = ["TIM", "VIVO"];

// Redes em que um plano especifico e vendido. Quando o plano traz rede valida,
// ela manda — e so essa. Sem rede (ou "AMBOS"), cai no significado legado.
export function normalizePlanNetworks(
  planRede: unknown,
  companyNetworks: RedeNetwork[],
): RedeNetwork[] {
  const parsed = parseRedeArray(planRede).map((item) =>
    item.trim().toUpperCase(),
  );

  const explicit = REDE_NETWORKS.filter((network) => parsed.includes(network));

  if (explicit.length > 0) {
    return explicit;
  }

  const legacy = companyNetworks.filter((network) =>
    REDE_ALL_LEGACY.includes(network),
  );

  // Parceiro que so vende AVT: sem TIM/VIVO para herdar, mantem as redes dele
  // para nao esconder o catalogo inteiro.
  return legacy.length > 0 ? legacy : companyNetworks;
}
