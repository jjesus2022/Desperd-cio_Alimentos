document.getElementById('calc-form').addEventListener('submit', function(e){
  e.preventDefault();
  const kg = parseFloat(document.getElementById('kg').value || 0);
  const val = parseFloat(document.getElementById('valor').value || 0);
  const anualKg = kg*12;
  const economia = kg*val*12;
  const msg = `Se você reduzir esse desperdício, pode evitar jogar fora <strong>${anualKg.toFixed(1)} kg/ano</strong> e economizar cerca de <strong>R$ ${economia.toFixed(2)}</strong>.`;
  document.getElementById('resultado').innerHTML = msg;
});
