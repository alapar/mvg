//ACÁ EMPIEZA EL SCRIPT LO OTRO FUE UNA PRUEBA

// Obtén todos los elementos del carrusel
var elementos = document.querySelectorAll('.elemento2');

// Para cada elemento...
elementos.forEach(function(elemento) {
 // Agrega un controlador de eventos de clic
 elemento.addEventListener('click', function() {
 // Obtiene el contenido del elemento (la imagen o el video)
 var contenido = elemento.innerHTML;

 // Obtiene el contenedor seleccionado
 var contenedorSeleccionado2 = document.getElementById('contenedorSeleccionado2');

 // Verifica si el contenido es una imagen
 var esImagen = elemento.querySelector('img') != null;

 // Si el contenido es una imagen, busca el video correspondiente
 if (esImagen) {
 var videoUrl = elemento.querySelector('img').dataset.video;
 if (videoUrl) {
 // Crea un nuevo elemento de iframe con la URL obtenida
 var iframe = document.createElement('iframe');
 iframe.src = videoUrl;
 iframe.style.width = '100%';
 iframe.style.height = '100%';
 iframe.style.aspectRatio = '16 / 9';


 // Inserta el iframe en el contenedor seleccionado
 contenedorSeleccionado2.innerHTML = '';
 contenedorSeleccionado2.appendChild(iframe);
 }
 } 
 });
});
/*
// Obtén todos los elementos del carrusel
var elementos = document.querySelectorAll('.elemento2');

// Para cada elemento...
elementos.forEach(function(elemento) {
 // Agrega un controlador de eventos de clic
 elemento.addEventListener('click', function() {
 // Obtiene el contenido del elemento (la imagen o el video)
 var contenido = elemento.innerHTML;

 // Obtiene el contenedor seleccionado
 var contenedorSeleccionado2 = document.getElementById('contenedorSeleccionado2');

 // Si el contenido es una imagen, busca el video correspondiente
 var videoUrl = elemento.querySelector('img').dataset.video;
 if (videoUrl) {
 // Crea un nuevo elemento de video con la URL obtenida
 var video = document.createElement('video');
 video.src = videoUrl;
 video.controls = true;

 // Reproduce el video
 //video.play();

 // Inserta el video en el contenedor seleccionado
 contenedorSeleccionado2.innerHTML = '';
 contenedorSeleccionado2.appendChild(video);
 } else {
 // Si el contenido no es una imagen, simplemente inserta el contenido en el contenedor seleccionado
 contenedorSeleccionado2.innerHTML = contenido;
 }
 });
});*/

// Selecciona el primer elemento
var segundoElemento = document.querySelector('.elemento2');

// Dispara un evento de clic en el primer elemento
segundoElemento.dispatchEvent(new Event('click'));