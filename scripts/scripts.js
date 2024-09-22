$(document).ready(function() {
  var phrases = [
    "Tu sonrisa brilla más que el sol en el primer día de primavera.",
    "Si las flores hablaran, te dirían que tu belleza es su mayor inspiración.",
    "Primavera es la excusa perfecta para recordarte lo importante que eres en mi vida."
];


  var currentIndex = 0;

  // Función para cambiar el contenido al hacer clic en el título
  $('#pageTitle').click(function() {
    if (currentIndex < phrases.length) {
      $('#pageTitle').text(phrases[currentIndex]);
      currentIndex++;
    } else {
      window.location.href = "scripts/flowers/flowers.html";
    }
  });
});
