let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">¡Bienvenidos a la Geoinformática! Descubre la integración de datos geoespaciales y tecnologías para explorar y comprender el mundo desde una nueva perspectiva.🌐</span>')
  .pauseFor(2100)
  .deleteChars(10)
  .start();
