//ACÁ EMPIEZA EL SCRIPT LO OTRO FUE UNA PRUEBA
/*
// Obtén todos los elementos del carrusel
var elementos = document.querySelectorAll('.elemento');

// Para cada elemento...
elementos.forEach(function(elemento) {
 // Agrega un controlador de eventos de clic
 elemento.addEventListener('click', function() {
 // Obtiene el contenido del elemento (la imagen o el video)
 var contenido = elemento.innerHTML;

 // Obtiene el contenedor seleccionado
 var contenedorSeleccionado = document.getElementById('contenedorSeleccionado');

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
 contenedorSeleccionado.innerHTML = '';
 contenedorSeleccionado.appendChild(video);
 } else {
 // Si el contenido no es una imagen, simplemente inserta el contenido en el contenedor seleccionado
 contenedorSeleccionado.innerHTML = contenido;
 }
 });
});
*/

// Obtén todos los elementos del carrusel
var elementos = document.querySelectorAll('.elemento');

// Para cada elemento...
elementos.forEach(function(elemento) {
 // Agrega un controlador de eventos de clic
 elemento.addEventListener('click', function() {
 // Obtiene el contenido del elemento (la imagen o el video)
 var contenido = elemento.innerHTML;

 // Obtiene el contenedor seleccionado
 var contenedorSeleccionado = document.getElementById('contenedorSeleccionado');

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
 contenedorSeleccionado.innerHTML = '';
 contenedorSeleccionado.appendChild(video);
 } else {
 // Si el contenido no es una imagen, simplemente inserta el contenido en el contenedor seleccionado
 contenedorSeleccionado.innerHTML = contenido;
 }
 });
});

// Selecciona el primer elemento
var primerElemento = document.querySelector('.elemento');

// Dispara un evento de clic en el primer elemento
primerElemento.dispatchEvent(new Event('click'));


//ACÁ EMPIEZA EL NAV DE LA WEB 

window.onload = function() {
  // Oculta todas las secciones de contenido
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function(section) {
      section.style.display = 'none';
  });
  
  // Muestra la sección de contenido correspondiente
  var targetSectionId = '#section1';
  var targetSection = document.querySelector(targetSectionId);
  targetSection.style.display = 'block';
 // Muestra nav inicial activo
  var primerEnlace = document.querySelector('.menu-game li a');
 primerEnlace.classList.add('activo')

}

// Obtén todos los enlaces en el menú de navegación
var links = document.querySelectorAll('#menu a');

// Agrega un event listener a cada enlace
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
      // Evita que la página se recargue
      event.preventDefault();
      
      // Oculta todas las secciones de contenido
      var sections = document.querySelectorAll('.content-section');
      sections.forEach(function(section) {
          section.style.display = 'none';
      });
      
      // Muestra la sección de contenido correspondiente
      var targetSectionId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetSectionId);
      targetSection.style.display = 'block';
  });
});

//ACTIVO
document.querySelectorAll('.menu-game li a').forEach(function(link) {
    link.addEventListener('click', function() {
    // Remueve la clase 'activo' de todos los enlaces
    document.querySelectorAll('.menu-game li a').forEach(function(otherLink) {
    otherLink.classList.remove('activo');
    });
   
    // Agrega la clase 'activo' al enlace activo
    this.classList.add('activo');
    });
   });

   