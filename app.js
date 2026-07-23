// Referencias a elementos
const pantallaFormulario = document.getElementById('pantalla-formulario');
const pantallaDashboard = document.getElementById('pantalla-dashboard');
const formulario = document.getElementById('formulario-registro');
const botonSalir = document.getElementById('boton-salir');

// Validaciones simples por campo
function validarCampos(datos) {
  const errores = {};

  if (!datos.nombre.trim()) {
    errores.nombre = 'Escribe tu nombre completo.';
  }

  const edadNum = Number(datos.edad);
  if (!datos.edad || isNaN(edadNum) || edadNum <= 0 || edadNum > 120) {
    errores.edad = 'Escribe una edad válida.';
  }

  const soloDigitos = datos.telefono.replace(/\D/g, '');
  if (soloDigitos.length < 10) {
    errores.telefono = 'El teléfono debe tener al menos 10 dígitos.';
  }

  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!patronCorreo.test(datos.correo.trim())) {
    errores.correo = 'Escribe un correo válido.';
  }

  return errores;
}

function limpiarErrores() {
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.querySelectorAll('input').forEach(el => el.classList.remove('campo-invalido'));
}

function mostrarErrores(errores) {
  Object.entries(errores).forEach(([campo, mensaje]) => {
    const spanError = document.querySelector(`[data-error-para="${campo}"]`);
    const input = document.getElementById(campo);
    if (spanError) spanError.textContent = mensaje;
    if (input) input.classList.add('campo-invalido');
  });
}

function irAlDashboard(datos) {
  document.getElementById('saludo-nombre').textContent = datos.nombre.split(' ')[0];
  document.getElementById('dato-nombre').textContent = datos.nombre;
  document.getElementById('dato-edad').textContent = datos.edad;
  document.getElementById('dato-telefono').textContent = datos.telefono;
  document.getElementById('dato-correo').textContent = datos.correo;

  pantallaFormulario.classList.remove('activa');
  pantallaDashboard.classList.add('activa');
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  limpiarErrores();

  const datos = {
    nombre: document.getElementById('nombre').value,
    edad: document.getElementById('edad').value,
    telefono: document.getElementById('telefono').value,
    correo: document.getElementById('correo').value,
  };

  const errores = validarCampos(datos);

  if (Object.keys(errores).length > 0) {
    mostrarErrores(errores);
    return;
  }

  irAlDashboard(datos);
});

botonSalir.addEventListener('click', () => {
  formulario.reset();
  limpiarErrores();
  pantallaDashboard.classList.remove('activa');
  pantallaFormulario.classList.add('activa');
});
