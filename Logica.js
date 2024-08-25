const textoInput = document.getElementById('texto');
const encriptarBtn = document.getElementById('encriptar');
const desencriptarBtn = document.getElementById('desencriptar');
const copiarBtn = document.getElementById('copiar');
const resultadoOutput = document.getElementById('resultado');

// Función para encriptar el texto
function encriptar(texto) {
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    resultado += String.fromCharCode(texto.charCodeAt(i) + 3);
  }
  return resultado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    resultado += String.fromCharCode(texto.charCodeAt(i) - 3);
  }
  return resultado;
}

// Evento para encriptar el texto
encriptarBtn.addEventListener('click', () => {
  const texto = textoInput.value.trim();
  if (texto) {
    const resultado = encriptar(texto);
    resultadoOutput.value = resultado;
  }
});

// Evento para desencriptar el texto
desencriptarBtn.addEventListener('click', () => {
  const texto = textoInput.value.trim();
  if (texto) {
    const resultado = desencriptar(texto);
    resultadoOutput.value = resultado;
  }
});

// Evento para copiar el resultado
copiarBtn.addEventListener('click', () => {
  resultadoOutput.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
});

// Evento para limpiar la caja de resultado
document.getElementById('limpiar').addEventListener('click', function() {
  document.getElementById('resultado').value = '';
});