// Contador de visitas — robusto com CountAPI
(function(){
  var el = document.getElementById('visitas_txt');
  if(!el) return;
  var ns = encodeURIComponent('jjesus2022.github.io');
  var key = encodeURIComponent('Desperd-cio_Alimentos');
  var last = parseInt(localStorage.getItem('visitas_last')||'0',10);
  var now = Date.now();
  var oneDay = 24*60*60*1000;
  var shouldHit = isNaN(last) || (now - last) > oneDay;
  var url = shouldHit ? 
    'https://api.countapi.xyz/hit/' + ns + '/' + key : 
    'https://api.countapi.xyz/get/' + ns + '/' + key;
  fetch(url)
    .then(function(r){return r.json()})
    .then(function(data){
      if(shouldHit) localStorage.setItem('visitas_last', String(now));
      var val = (data && (data.value||data.count)) ? (data.value||data.count) : null;
      el.textContent = val ? val.toLocaleString('pt-BR') : '—';
    })
    .catch(function(){ el.textContent='—'; });
})();

console.log('site pronto');

// Fallback de envio por e-mail em GitHub Pages
(function(){
  const form = document.getElementById('vol-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    // Detecta se está em GitHub Pages (sem Netlify)
    const host = window.location.host;
    const isGithub = host.includes('github.io');
    if(isGithub){
      e.preventDefault();
      const data = new FormData(form);
      const mail = 'jjesus2024@outlook.com.br'; // >>> Substitua por seu e-mail para receber as inscrições
      const subject = encodeURIComponent('Inscrição de Voluntariado');
      const body = encodeURIComponent([
        'Nome: '+(data.get('nome')||''),
        'E-mail: '+(data.get('email')||''),
        'Telefone: '+(data.get('telefone')||''),
        'Disponibilidade: '+(data.get('disponibilidade')||''),
        'Habilidades: '+(data.get('habilidades')||''),
        'Mensagem: '+(data.get('mensagem')||'')
      ].join('
'));
      const link = `mailto:${mail}?subject=${subject}&body=${body}`;
      window.location.href = link;
      alert('Vamos abrir seu app de e-mail para concluir o envio.
Dica: substitua jjesus2024@outlook.com.br em script.js para receber diretamente.');
    }
  });
})();


// Envio com Formspree (AJAX) com fallback para mailto
(function(){
  const form = document.getElementById('vol-form');
  if(!form) return;
  const status = document.getElementById('vol-status');
  const hasFormspree = (form.getAttribute('action')||'').includes('formspree.io');
  if(hasFormspree){
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      status.textContent = 'Enviando...';
      const data = new FormData(form);
      try{
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        });
        if(res.ok){
          status.textContent = 'Obrigado! Recebemos sua inscrição e entraremos em contato.';
          form.reset();
          // Limpa controle de honeypot, caso exista
        }else{
          status.textContent = 'Não foi possível enviar agora. Tente novamente mais tarde.';
        }
      }catch(err){
        status.textContent = 'Falha de rede. Verifique sua conexão e tente novamente.';
      }
    });
  } else {
    // Mantém fallback mailto já configurado no script (GitHub Pages)
  }
})();
