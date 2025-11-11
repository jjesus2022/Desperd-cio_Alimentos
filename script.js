// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});

// Counter (CountAPI) with session throttle
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

// Volunteering form: Formspree AJAX + fallback mailto
(function(){
  const form = document.getElementById('vol-form');
  if(!form) return;
  const status = document.getElementById('vol-status');
  const hasFormspree = (form.getAttribute('action')||'').includes('formspree.io');
  if(hasFormspree){
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      if(status) status.textContent = 'Enviando...';
      const data = new FormData(form);
      try{
        const res = await fetch(form.action, {
          method: 'POST', headers: { 'Accept': 'application/json' }, body: data
        });
        if(res.ok){ if(status) status.textContent = 'Obrigado! Recebemos sua inscrição.'; form.reset(); }
        else { if(status) status.textContent = 'Não foi possível enviar agora. Tente novamente.'; }
      }catch(err){ if(status) status.textContent = 'Falha de rede. Verifique sua conexão.'; }
    });
  } else {
    form.addEventListener('submit', function(e){
      const host = window.location.host;
      const isGithub = host.includes('github.io');
      if(isGithub){
        e.preventDefault();
        const data = new FormData(form);
        const mail = 'jjesus2024@outlook.com.br';
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
        alert('Vamos abrir seu app de e-mail para concluir o envio.');
      }
    });
  }
})();
