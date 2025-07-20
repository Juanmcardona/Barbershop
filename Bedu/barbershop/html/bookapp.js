document.addEventListener('DOMContentLoaded', () => {
  const servicioSelect = document.getElementById('servicio');
  const resultado = document.getElementById('resultado');
  const reservarBtn = document.getElementById('reservarBtn');

  servicioSelect.addEventListener('change', () => {
    const servicio = servicioSelect.value;
    let mensaje = '';

    if (servicio === 'corte') {
      mensaje = '💈 Haircut: $15 - 30 minutes';
    } else if (servicio === 'barba') {
      mensaje = '🧔 Beard Trimming: $10 - 20 minutes';
    } else if (servicio === 'combo') {
      mensaje = '🔥 Haircut + Beard: $22 - 45 minutes';
    } else {
      mensaje = '';
    }

    resultado.textContent = mensaje;
    reservarBtn.disabled = servicio === '';
  });

  reservarBtn.addEventListener('click', () => {
    const servicio = servicioSelect.options[servicioSelect.selectedIndex].text;
    alert(`✅ Your appointment for ${servicio} has been reserved!`);
  });
});
