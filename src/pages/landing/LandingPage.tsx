import { useEffect, useLayoutEffect, useRef } from "react";
import css from "./landing.css?raw";
import bodyHtml from "./landing.body.html?raw";
import runLanding from "./landing.runtime.js";

/**
 * Landing institucional da Play Móvel (Gama/DF).
 *
 * Origem: HTML single-file `play-movel_9 (1).html`. A mídia pesada (5 vídeos +
 * imagens, antes em base64) foi externalizada para `public/landing-media/`, e o
 * arquivo foi fatiado em três (gerados por script, não editar à mão):
 *   - landing.css         → estilos (injetados só enquanto esta rota está no ar)
 *   - landing.body.html   → markup inserido via innerHTML num <div ref>
 *   - landing.runtime.js  → JS vanilla (carrosséis, demo do app, FAB, toast)
 *
 * Por que `innerHTML` imperativo e NÃO `dangerouslySetInnerHTML`:
 * o runtime muta o DOM (revela blocos `.rv`, esconde o FAB, monta a demo).
 * Com `dangerouslySetInnerHTML`, o React controla essa subárvore e a recria num
 * re-render, apagando as mutações do runtime (o FAB voltava a aparecer, nada
 * revelava). Inserindo o HTML num `<div ref>` vazio, o React não gerencia esses
 * filhos — eles ficam "nossos" e sobrevivem aos re-renders.
 *
 * Por que injetar CSS em vez de `import "./landing.css"`:
 * a landing define regras globais (`body`, `.hero`, `.sec`, resets) que
 * vazariam para /privacidade e /termos. Injetando no mount e removendo no
 * unmount, o estilo fica restrito a esta página.
 */
const STYLE_ID = "play-landing-style";

export default function LandingPage() {
  // Antes da pintura: CSS + classe `js` no <html> (o CSS esconde os blocos
  // `.rv` até o runtime revelá-los; sem a classe antes do paint há um flash).
  useLayoutEffect(() => {
    const root = document.documentElement;
    const hadJs = root.classList.contains("js");
    root.classList.add("js");

    const wantsPreview =
      /[?&]preview=1/.test(window.location.search) ||
      window.location.hash === "#preview";
    if (wantsPreview) root.classList.add("preview");

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = css;
      document.head.appendChild(style);
    }

    return () => {
      document.getElementById(STYLE_ID)?.remove();
      if (!hadJs) root.classList.remove("js");
      if (wantsPreview) root.classList.remove("preview");
    };
  }, []);

  const hostRef = useRef<HTMLDivElement>(null);

  // Depois da pintura: insere o markup (fora do controle do React) e dispara o
  // runtime sobre ele.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.innerHTML = bodyHtml;
    runLanding();
  }, []);

  return <div className="play-landing" ref={hostRef} />;
}
