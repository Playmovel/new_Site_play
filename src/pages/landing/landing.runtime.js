/* AUTO-GERADO a partir de play-movel_9 (1).html - NAO editar a mao.
   Regenerar com scratchpad/assemble.py. */
export default function runLanding() {
(function(){
document.documentElement.classList.add('js');if(/[?&]preview=1/.test(location.search)||location.hash==='#preview')document.documentElement.classList.add('preview');

/* ===== next script block ===== */


/* ══ CONFIGURAÇÃO ══════════════════════════════
   Número oficial do WhatsApp Play: 55 + DDD + número, só dígitos.
   Ex.: '5561999999999'                                         */
const WA_NUMBER = '55XXXXXXXXXXX';
/* ═════════════════════════════════════════════ */

// Enquanto o número não estiver configurado, os botões levam ao download do app
const WA_OK = /^\d{12,13}$/.test(WA_NUMBER);
document.querySelectorAll('[data-wa]').forEach(a=>{
  if (WA_OK) { a.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(a.dataset.wa); a.target = '_blank'; a.rel = 'noopener'; }
  else { a.href = '#baixe'; }
});
if (!WA_OK) { const f = document.getElementById('wafab'); if (f) f.style.visibility = 'hidden'; }
// Depoimentos em vídeo: toca ao clicar
document.querySelectorAll('.dep').forEach(f=>{const v=f.querySelector('video'),btn=f.querySelector('.dep-play'); if(!v||!btn) return;
  btn.addEventListener('click',()=>{document.querySelectorAll('.dep video').forEach(o=>{if(o!==v)o.pause()}); v.controls=true; v.play(); f.classList.add('playing');});
  v.addEventListener('ended',()=>{f.classList.remove('playing'); v.controls=false;});});

/* ══ ATIVAÇÕES RECENTES ════════════════════════
   Preencha SOMENTE com ativações REAIS (ex.: exportadas do HubPlay),
   com consentimento do cliente (LGPD). Use primeiro nome + inicial.
   Nunca preencher com nomes ou planos inventados (CDC art. 37).
   Lista vazia = o aviso não aparece para o visitante.
   Formato: { nome:'Ana S.', bairro:'Nome do bairro', plano:'15GB', minutos:4 }  */
const RECENT_ACTIVATIONS = [];
/* ═════════════════════════════════════════════ */
(function(){
  const preview = document.documentElement.classList.contains('preview');
  let list = RECENT_ACTIVATIONS, demo = false;
  if (!list.length && preview) { demo = true; list = [{nome:'[Nome]',bairro:'[Bairro]',plano:'15GB',minutos:2},{nome:'[Nome]',bairro:'[Bairro]',plano:'6GB',minutos:7}]; }
  if (!list.length) return;
  const t = document.getElementById('toast'); let i = 0;
  const esc = v => String(v).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const when = m => m < 1 ? 'agora mesmo' : m < 60 ? `há ${m} min` : `há ${Math.round(m/60)} h`;
  function show(){
    const a = list[i++ % list.length];
    t.innerHTML = `<span class="av">${esc(a.nome).charAt(0)}</span><div><b>${esc(a.nome)}</b> (${esc(a.bairro)}) deu play no plano <span class="pl">${esc(a.plano)}</span><small>${when(a.minutos)}${demo?'<span class="demo">EXEMPLO</span>':''}</small></div>`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 6000);
  }
  setTimeout(() => { show(); setInterval(show, 16000); }, 7000);
})();

// Header ao rolar
const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('scrolled', scrollY > 24);
onScroll(); addEventListener('scroll', onScroll, {passive:true});

// Barra fixa mobile / botão WA: aparecem depois do hero, somem no rodapé
const mbar = document.getElementById('mbar'), fab = document.getElementById('wafab');
let heroGone = false, finalIn = false;
const sync = () => { const s = heroGone && !finalIn; mbar.classList.toggle('show', s); fab.classList.toggle('show', s); };
const heroCtas = document.getElementById('hero-ctas'); if (heroCtas) new IntersectionObserver(([e]) => { heroGone = !e.isIntersecting; sync(); }).observe(heroCtas);
const finalEl = document.querySelector('.ftr'); if (finalEl) new IntersectionObserver(([e]) => { finalIn = e.isIntersecting; sync(); }).observe(finalEl);

// Revelação suave
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// "Entenda como funciona" abre a resposta no SAC
document.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',()=>{const d=document.getElementById(a.dataset.open);if(d)d.open=true;}));
// FAQ: abre um por vez
document.querySelectorAll('.faq details').forEach(d => d.addEventListener('toggle', () => {
  if (d.open) document.querySelectorAll('.faq details').forEach(o => { if (o !== d) o.open = false; });
}));


/* ===== next script block ===== */


/* ══ SIMULADOR DO APP PLAY ══════════════════════
   Reproduz telas do app com DADOS FICTÍCIOS. Nenhuma operação real é feita.
   Uso: <div class="sim" data-sim data-start="saldo"></div>  (com seletor)
        <div class="sim" data-sim data-only="port"></div>    (uma função só)  */
(function(){
  const DEMOS=[['saldo','Saldo'],['faturas','Faturas'],['esim','eSIM'],['plano','Plano e recarga'],['chat','Atendimento'],['port','Portabilidade']];
  const ic={
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"/></svg>',
    bars:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 20v-4M10 20v-8M15 20V8M20 20V4"/></svg>',
    head:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="2.5" y="13.5" width="4" height="6.5" rx="1.5"/><rect x="17.5" y="13.5" width="4" height="6.5" rx="1.5"/></svg>',
    tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18.5a6 6 0 0 1 11 0"/></svg>',
    back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>',
    ok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    qr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 20h1"/></svg>',
    swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12a9 9 0 0 1-15.5 6.2M3 12a9 9 0 0 1 15.5-6.2"/><path d="M18 2v4h-4M6 22v-4h4"/></svg>',
    plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
    port:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 3l4 4-4 4M21 7H9M7 21l-4-4 4-4M3 17h12"/></svg>',
    del:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 5H9l-6 7 6 7h12z"/><path d="M15 10l-4 4M11 10l4 4"/></svg>',
    info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  };
  const NAV={saldo:0,faturas:0,esim:1,plano:1,port:1,chat:2};
  const navLabels=['Início','Planos','Suporte','Benefícios','Perfil'];
  const navIcons=[ic.home,ic.bars,ic.head,ic.tag,ic.user];
  const fmtNum=d=>{let s='('+d.slice(0,2);if(d.length>2)s+=') '+d.slice(2,7);if(d.length>7)s+='-'+d.slice(7,11);return d.length?s:'';};
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const REPLIES={
    'Quero ver minha fatura':'Claro! Suas faturas ficam em Início › Faturas. Lá você vê o valor, o vencimento e copia o código para pagar.',
    'Como ativo o eSIM?':'No app, vá em Planos › Ativar e-SIM. O QR Code e o código LPA aparecem para você instalar no celular.',
    'Quero fazer portabilidade':'Em Planos › Portabilidade, informe o número com o mesmo DDD da sua linha Play e toque em Solicitar portabilidade.'
  };

  function hero(over,title,sub){return `<div class="ap-hero"><div class="ap-brand">play<i>.</i></div><small>${over}</small><h4>${title}</h4>${sub?`<p>${sub}</p>`:''}</div>`;}
  function top(title,back){return `<div class="ap-top">${back?`<button class="ap-back" data-a="${back}" aria-label="Voltar">${ic.back}</button>`:''}<b>${title}</b></div>`;}
  function row(icon,t,s,a){return `<button class="ap-row" data-a="${a}"><span class="ap-ri">${icon}</span><span class="ap-rt"><b>${t}</b><small>${s}</small></span><span class="ap-chev">${ic.chev}</span></button>`;}
  function success(t,s,a){return `<div class="ap-ok"><span class="ap-okc">${ic.ok}</span><h5>${t}</h5><p>${s}</p><button class="ap-btn" data-a="${a}">Entendi</button><small class="ap-demo-tag">Simulação · nenhuma operação real</small></div>`;}

  const V={
    saldo(st){
      const tab=st.tab||'saldo';
      let body;
      if(tab==='consumo'){
        const d=[['S',.35],['T',.6],['Q',.45],['Q',.8],['S',.55],['S',.95],['D',.4]];
        body=`<div class="ap-card"><div class="ap-cardh"><span>Consumo de dados</span><small>últimos 7 dias</small></div>
          <div class="ap-chart">${d.map(([l,v],i)=>`<div class="ap-bar"><i style="height:${v*100}%" class="${i===5?'hi':''}"></i><small>${l}</small></div>`).join('')}</div>
          <p class="ap-mut">Total na semana: <b>3,2 GB</b></p></div>`;
      } else {
        body=`<div class="ap-card"><div class="ap-cardh"><span>Dados restantes</span><small>51% usado</small></div>
          <div class="ap-big">7,4 GB <small>de 15 GB</small></div><div class="ap-prog"><i style="width:51%"></i></div></div>
          <div class="ap-3"><div class="ap-mini"><small>Plano</small><b>15 GB</b></div><div class="ap-mini"><small>Ligações</small><b>Ilimitadas</b></div><div class="ap-mini"><small>SMS</small><b>100</b></div></div>
          <button class="ap-row" data-a="go:esim"><span class="ap-ri">${ic.qr}</span><span class="ap-rt"><b>Linha e-SIM</b><small>Veja o QR Code para instalar</small></span><span class="ap-chev">${ic.chev}</span></button>
          <div class="ap-card ap-flex"><span class="ap-mut">Vence em <b>10/11/2026</b></span></div>
          <button class="ap-link" data-a="tab:consumo">Ver consumo dos últimos 7 dias</button>`;
      }
      return hero('Olá,','Cliente demo','Dados restantes <b>7,4 GB</b>')+
        `<div class="ap-seg" role="tablist"><button class="${tab==='saldo'?'on':''}" data-a="tab:saldo">Saldo</button><button data-a="go:faturas">Faturas</button><button class="${tab==='consumo'?'on':''}" data-a="tab:consumo">Consumo</button></div>`+body;
    },
    faturas(st){
      const F=[['Outubro/2026','54,90','10/11/2026','aberta'],['Setembro/2026','54,90','10/10/2026','paga'],['Agosto/2026','54,90','10/09/2026','paga']];
      if(st.view==='det'){const f=F[st.i||0];
        return top('Fatura','view:')+`<div class="ap-card ap-center"><small class="ap-mut">${f[0]}</small><div class="ap-big">R$ ${f[1]}</div><p class="ap-mut">Vencimento ${f[2]}</p>
          <span class="ap-pill ${f[3]==='paga'?'ok':'warn'}">${f[3]==='paga'?'Paga':'Em aberto'}</span></div>
          ${f[3]==='paga'?'':`<button class="ap-btn" data-a="copy">Copiar código para pagar</button>`}
          ${st.copied?'<div class="ap-toast">Código copiado (demonstração)</div>':''}`;}
      return top('Faturas','go:saldo')+F.map((f,i)=>`<button class="ap-row" data-a="det:${i}"><span class="ap-rt"><b>${f[0]}</b><small>Vence ${f[2]}</small></span><span class="ap-rv"><b>R$ ${f[1]}</b><span class="ap-pill ${f[3]==='paga'?'ok':'warn'}">${f[3]==='paga'?'Paga':'Em aberto'}</span></span></button>`).join('');
    },
    esim(st){
      if(st.view==='qr'){
        let cells='';let s=7;for(let y=0;y<21;y++)for(let x=0;x<21;x++){s=(s*9301+49297)%233280;const f=(x<7&&y<7)||(x>13&&y<7)||(x<7&&y>13);const on=f?((x%14===0||x%14===6||y%14===0||y%14===6)||(x%14>1&&x%14<5&&y%14>1&&y%14<5)):s/233280>.52;if(on)cells+=`<rect x="${x}" y="${y}" width="1" height="1"/>`;}
        return top('Ativar e-SIM','view:')+`<div class="ap-card ap-center"><svg class="ap-qr" viewBox="-1 -1 23 23"><rect x="-1" y="-1" width="23" height="23" fill="#fff"/><g fill="#111">${cells}</g></svg>
          <small class="ap-mut">Código LPA</small><code>LPA:1$demo.play$DEMO-0000</code></div>
          <ol class="ap-steps"><li>Abra Ajustes › Celular</li><li>Toque em Adicionar eSIM</li><li>Escaneie o QR Code</li></ol>
          <button class="ap-btn" data-a="view:inst">Instalar eSIM</button>`;
      }
      if(st.view==='inst') return success('eSIM instalado','Sua linha Play está pronta para usar.','view:');
      return hero('Gerencie sua linha','e-SIM','Linha demo · (61) 9 0000-0000')+
        `<div class="ap-card ap-flex"><span class="ap-ri">${ic.qr}</span><span class="ap-rt"><b>Linha e-SIM</b><small>Veja o QR Code e o código LPA para instalar no seu celular.</small></span></div>
        <button class="ap-btn" data-a="view:qr">Ver QR Code</button>`;
    },
    plano(st){
      const P=[['6 GB','39,90'],['15 GB','54,90'],['25 GB','79,90']];
      if(st.view==='alt'){const sel=st.sel??1;
        return top('Alterar plano','view:')+P.map((p,i)=>`<button class="ap-opt ${sel===i?'on':''}" data-a="sel:${i}"><span><b>Play ${p[0]}</b><small>Ligações ilimitadas</small></span><span>R$ ${p[1]}${i===1?'<em>Atual</em>':''}</span></button>`).join('')+
        `<button class="ap-btn" data-a="view:altok" ${sel===1?'disabled':''}>Confirmar troca</button><p class="ap-mut ap-c">Valores do site. Demonstração.</p>`;}
      if(st.view==='altok'){const p=P[st.sel??2];return success('Plano alterado','Seu novo plano será o Play '+p[0]+'.','view:');}
      if(st.view==='rec'){const R=['+ 1 GB','+ 3 GB','+ 100 minutos'];const sel=st.rsel??0;
        return top('Recarga adicional','view:')+R.map((r,i)=>`<button class="ap-opt ${sel===i?'on':''}" data-a="rsel:${i}"><span><b>${r}</b><small>Valor exibido no app</small></span></button>`).join('')+
        `<button class="ap-btn" data-a="view:recok">Adicionar</button>`;}
      if(st.view==='recok'){const R=['1 GB','3 GB','100 minutos'];return success('Recarga adicionada',R[st.rsel??0]+' extras na sua linha.','view:');}
      return hero('Gerencie sua linha','Planos','Plano atual: Play 15 GB')+
        row(ic.swap,'Alterar plano','Mais ou menos GB, minutos e SMS.','view:alt')+row(ic.plus,'Recarga adicional','GB ou minutos extras no plano atual.','view:rec')+
        row(ic.port,'Portabilidade','Traga seu número de outra operadora.','go:port')+row(ic.qr,'Ativar e-SIM','QR Code e código LPA para instalar.','go:esim');
    },
    chat(st){
      if(st.view==='chat'){
        const msgs=st.msgs||[];const used=new Set(msgs.filter(m=>m.me).map(m=>m.t));const left=Object.keys(REPLIES).filter(k=>!used.has(k));
        return `<div class="ap-chathead"><button class="ap-back" data-a="view:" aria-label="Voltar">${ic.back}</button><span class="ap-av">${ic.head}</span><span><b>Atendimento</b><small>online</small></span></div>
          <div class="ap-chat"><div class="ap-day">Hoje</div><div class="ap-msg">Protocolo de atendimento: DEMO-0001<br><br>Oi! Aqui é o atendimento da Play Móvel. Como posso te ajudar hoje?</div>
          ${msgs.map(m=>`<div class="ap-msg ${m.me?'me':''}">${esc(m.t)}</div>`).join('')}${st.typing?'<div class="ap-msg ap-typing"><i></i><i></i><i></i></div>':''}</div>
          <div class="ap-quick">${st.typing?'':left.map(k=>`<button data-a="ask:${k}">${k}</button>`).join('')}</div>`;
      }
      return hero('Estamos aqui pra ajudar','Suporte','')+
        `<div class="ap-card"><div class="ap-flex"><span class="ap-ri">${ic.head}</span><span class="ap-rt"><b>Central de Ajuda</b><small>Estamos aqui pra ajudar você</small></span></div>
        <p class="ap-mut ap-sp">Segunda a sábado das 08h às 22h. Domingos e feriados das 09h às 17h.</p><p class="ap-mut">Resposta média em até 5 minutos.</p></div>
        <button class="ap-btn" data-a="view:chat">Iniciar chat</button>`;
    },
    port(st){
      if(st.view==='busy') return top('Portabilidade','')+`<div class="ap-load"><span class="ap-spin"></span><p>Buscando operadora…</p></div>`;
      if(st.view==='ok') return success('Portabilidade solicitada','Seu pedido foi enviado. Acompanhe o andamento pelo app.','reset');
      const d=st.num||'';const ddd=d.length>=2&&d.slice(0,2)!=='61';const ready=d.length===11&&!ddd;
      return `<div class="ap-sheet"><div class="ap-grab"></div><h4>Portabilidade</h4><p class="ap-mut">Traga seu número de outra operadora</p>
        <div class="ap-card ap-flex ap-info"><span class="ap-ri">${ic.info}</span><span class="ap-rt"><b>Antes de continuar</b><small>O DDD do número a portar precisa ser igual ao da sua linha atual (61).</small></span></div>
        <label class="ap-lbl">Número a portar (com DDD)</label><div class="ap-field ${ddd?'err':''}">${d?fmtNum(d):'<span class="ap-ph">(00) 00000-0000</span>'}</div>
        <small class="ap-hint ${ddd?'err':''}">${ddd?'Use um número com DDD 61.':d.length+'/11 dígitos'}</small>
        ${d.length?'':'<button class="ap-link" data-a="demo-num">Usar número de exemplo</button>'}
        <button class="ap-btn" data-a="send" ${ready?'':'disabled'}>Solicitar portabilidade</button>
        <div class="ap-keys">${[1,2,3,4,5,6,7,8,9,'',0,'del'].map(k=>k===''?'<span></span>':`<button data-a="key:${k}" aria-label="${k==='del'?'Apagar':k}">${k==='del'?ic.del:k}</button>`).join('')}</div></div>`;
    }
  };

  function mount(root){
    if(root.dataset.mounted) return; root.dataset.mounted='1';
    const only=root.dataset.only; const st={demo:only||root.dataset.start||'saldo'};
    root.innerHTML=(only?'':`<div class="sim-tabs" role="tablist" aria-label="Escolha uma função">${DEMOS.map(([k,l])=>`<button role="tab" data-demo="${k}" aria-selected="false">${l}</button>`).join('')}</div>`)+
      `<div class="sim-device"><div class="sim-island" aria-hidden="true"></div><div class="sim-screen" aria-live="polite"></div></div><p class="sim-note">Demonstração com dados fictícios. Nenhuma operação real é feita.</p>`;
    const scr=root.querySelector('.sim-screen');
    function render(){
      const tabs=root.querySelectorAll('.sim-tabs button');
      tabs.forEach(b=>{const on=b.dataset.demo===st.demo;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);if(on&&b.parentNode.scrollWidth>b.parentNode.clientWidth){b.parentNode.scrollTo({left:b.offsetLeft-b.parentNode.clientWidth/2+b.offsetWidth/2,behavior:'smooth'});}});
      const n=NAV[st.demo];
      scr.innerHTML=`<div class="ap-status"><b>9:41</b><span class="ap-dtag">DEMO</span><span class="ap-sig"><i></i><i></i><i></i><i></i></span></div><div class="ap-body">${V[st.demo](st)}</div>`+
        (st.demo==='port'&&!st.view?'':`<nav class="ap-nav">${navIcons.map((x,i)=>`<span class="${i===n?'on':''}">${x}${i===n?`<b>${navLabels[i]}</b>`:''}</span>`).join('')}</nav>`);
    }
    function setDemo(d,fromAuto){Object.keys(st).forEach(k=>delete st[k]);st.demo=d;if(!fromAuto&&typeof step!=='undefined')step=0;render();}
    root.setDemo=setDemo;
    function act(str){const [a,v]=str.split(/:(.*)/s);
      if(a==='go'){setDemo(v);return;}
      if(a==='tab'){st.tab=v;}
      else if(a==='view'){st.view=v||undefined;if(!v){st.copied=false;}}
      else if(a==='det'){st.view='det';st.i=+v;st.copied=false;}
      else if(a==='copy'){st.copied=true;render();setTimeout(()=>{st.copied=false;render();},1800);return;}
      else if(a==='sel'){st.sel=+v;}
      else if(a==='rsel'){st.rsel=+v;}
      else if(a==='key'){st.num=st.num||'';if(v==='del')st.num=st.num.slice(0,-1);else if(st.num.length<11)st.num+=v;}
      else if(a==='demo-num'){st.num='61900000000';}
      else if(a==='send'){st.view='busy';render();setTimeout(()=>{if(st.view==='busy'){st.view='ok';render();}},1400);return;}
      else if(a==='reset'){setDemo(st.demo);return;}
      else if(a==='ask'){st.msgs=(st.msgs||[]).concat({me:1,t:v});st.typing=true;render();scrollChat();
        setTimeout(()=>{st.typing=false;st.msgs=st.msgs.concat({t:REPLIES[v]});render();scrollChat();},1100);return;}
      render();
    }
    /* Modo automático: o app "se usa sozinho" até a pessoa tocar nele */
    const SCRIPTS={
      saldo:[[2600,'tab:consumo'],[2600,'tab:saldo']],
      faturas:[[1800,'det:0'],[1600,'copy'],[2600,'view:']],
      esim:[[1800,'view:qr'],[3000,'view:inst'],[2400,'view:']],
      plano:[[1600,'view:alt'],[1200,'sel:2'],[1400,'view:altok'],[2400,'view:']],
      chat:[[1600,'view:chat'],[1500,'ask:Como ativo o eSIM?'],[3600,'ask:Quero ver minha fatura'],[3800,'view:']],
      port:[[900,'key:6'],[250,'key:1'],[250,'key:9'],[250,'key:0'],[250,'key:0'],[250,'key:0'],[250,'key:0'],[250,'key:0'],[250,'key:0'],[250,'key:0'],[250,'key:0'],[900,'send'],[4200,'reset']]
    };
    const ORDER=only?[only]:DEMOS.map(d=>d[0]);
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    let auto=root.dataset.auto!=='off'&&!reduce,timer=null,visible=false,step=0,resumeT=null;
    function tick(){clearTimeout(timer);if(!auto||!visible)return;const sc=SCRIPTS[st.demo]||[];
      if(step>=sc.length){step=0;const n=ORDER[(ORDER.indexOf(st.demo)+1)%ORDER.length];timer=setTimeout(()=>{setDemo(n,true);tick();},1200);return;}
      const [d,a]=sc[step++];timer=setTimeout(()=>{act(a);tick();},d);}
    function stopAuto(){if(!auto)return;auto=false;clearTimeout(timer);root.classList.add('manual');
      clearTimeout(resumeT);resumeT=setTimeout(()=>{if(reduce||root.dataset.auto==='off')return;auto=true;root.classList.remove('manual');step=0;setDemo(st.demo,true);tick();},20000);}
    root.stopAuto=stopAuto;
    root.addEventListener('pointerdown',e=>{if(e.isTrusted)stopAuto();});
    root.addEventListener('keydown',stopAuto);
    if('IntersectionObserver' in window){new IntersectionObserver(es=>{visible=es[0].isIntersecting;if(visible)tick();else clearTimeout(timer);},{threshold:.35}).observe(root);}else{visible=true;}
    root.addEventListener('click',e=>{
      const t=e.target.closest('[data-demo]');if(t&&root.contains(t)&&t.closest('.sim-tabs')){setDemo(t.dataset.demo);return;}
      const b=e.target.closest('[data-a]');if(!b||b.disabled)return;act(b.dataset.a);
    });
    function scrollChat(){const c=scr.querySelector('.ap-body');if(c)c.scrollTop=c.scrollHeight;}
    render();
  }
  window.PlaySim={mount};
  // Carrega sob demanda quando o simulador se aproxima da área visível
  const pending=[...document.querySelectorAll('[data-sim]')];
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){mount(e.target);io.unobserve(e.target);}}),{rootMargin:'400px 0px'});pending.forEach(r=>{if(!r.closest('[hidden]'))io.observe(r);});}
  else pending.forEach(mount);
})();

/* ══ Funcionalidades: expandir card + abrir demonstração ══ */
document.querySelectorAll('.fc-head').forEach(h=>h.addEventListener('click',()=>{
  const open=h.getAttribute('aria-expanded')==='true';const m=document.getElementById(h.getAttribute('aria-controls'));
  document.querySelectorAll('.fc-head[aria-expanded="true"]').forEach(o=>{if(o!==h){o.setAttribute('aria-expanded','false');document.getElementById(o.getAttribute('aria-controls')).hidden=true;}});
  h.setAttribute('aria-expanded',!open);m.hidden=open;
}));
document.querySelectorAll('.fc-head[data-demo-card]').forEach(b=>b.addEventListener('click',()=>{
  const sim=document.querySelector('#teste-o-app [data-sim]');PlaySim.mount(sim);sim.stopAuto&&sim.stopAuto();sim.setDemo(b.dataset.demoCard);
  const box=document.getElementById('teste-o-app').getBoundingClientRect();
  if(box.top<0||box.bottom>innerHeight)document.getElementById('teste-o-app').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
}));

/* ══ Carrosséis: indicadores de posição ══ */
document.querySelectorAll('[data-carousel]').forEach(sc=>{
  const dots=document.querySelector(sc.dataset.carousel);if(!dots)return;
  const items=()=>[...sc.children].filter(el=>el.offsetParent!==null);
  function build(){const it=items();const show=sc.scrollWidth>sc.clientWidth+4;dots.hidden=!show;if(!show)return;
    dots.innerHTML=it.map((_,i)=>`<i data-i="${i}"></i>`).join('');update();}
  function update(){const it=items();let best=0,bd=1e9;const c=sc.scrollLeft+sc.clientWidth/2;
    it.forEach((el,i)=>{const d=Math.abs(el.offsetLeft+el.offsetWidth/2-c);if(d<bd){bd=d;best=i;}});
    dots.querySelectorAll('i').forEach((d,i)=>d.classList.toggle('on',i===best));}
  sc.addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});
  addEventListener('resize',build);build();
});
/* Planos: no celular, começa centralizado no plano recomendado */
(function(){const sc=document.querySelector('.plans');const f=sc&&sc.querySelector('.feat');
  if(f&&sc.scrollWidth>sc.clientWidth+4){sc.scrollLeft=f.offsetLeft-(sc.clientWidth-f.offsetWidth)/2;}})();

/* ══ Vídeos decorativos: carregam só perto da tela ══ */
(function(){const vs=[...document.querySelectorAll('video.lazy-vid')];
  const go=v=>{if(v.dataset.src){v.src=v.dataset.src;delete v.dataset.src;}if(!matchMedia('(prefers-reduced-motion: reduce)').matches){v.play().catch(()=>{});}};
  if(!('IntersectionObserver' in window)){vs.forEach(go);return;}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){go(e.target);}else if(!e.target.paused){e.target.pause();}}),{rootMargin:'200px 0px'});
  vs.forEach(v=>io.observe(v));})();

/* ══ MAPA "Daqui pra você" ═══════════════════════
   Preencha com o ENDEREÇO OFICIAL da Play (rua, número, bairro, cidade/UF, CEP).
   Vazio = card do mapa oculto ao público.                                   */
const PLAY_ADDRESS = '';
(function(){
  const card=document.getElementById('map-card');if(!card)return;
  const addr=PLAY_ADDRESS.trim();const q=encodeURIComponent(addr||'Gama, Distrito Federal');
  document.getElementById('map-go').href='https://www.google.com/maps/dir/?api=1&destination='+q;
  if(addr){card.classList.remove('pending');document.getElementById('map-addr').textContent=addr;}
  const frame=document.getElementById('map-frame');let done=false;
  function load(){if(done)return;done=true;
    const f=document.createElement('iframe');f.title='Mapa com a localização da Play';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';
    f.src='https://www.google.com/maps?q='+q+'&output=embed';
    const t=setTimeout(()=>{frame.innerHTML=`<div class="map-load map-err">Não foi possível carregar o mapa. <a href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Abrir no Google Maps</a></div>`;},12000);
    f.addEventListener('load',()=>{clearTimeout(t);frame.querySelector('.map-load')?.remove();});frame.appendChild(f);}
  if(!addr&&!document.documentElement.classList.contains('preview'))return;
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){load();io.disconnect();}},{rootMargin:'300px 0px'});io.observe(frame);}else load();
})();


})();
}
