function verMais() {
    $(".mais").on( "click", function() {
        $(this).prev(".experience_about").fadeToggle(500);
    });
};

//Monta as competencias - para estilizar com core é necessário adicionar a classe no css

function competence() {
  // $.getJSON("http://localhost:8000/data.json", function(json) {
  $.getJSON("https://diegomcsilva.github.io/DieGO/data.json", function(json) {
      console.log(json["0"].competence);
      var total = json["0"].competence.length;
      var group="";
      for (i = 0; i < total; i++) {
        console.log(json["0"].competence[i].nome);
        group +="<div class='learns__flow-content'><img src='src/images/" + json["0"].competence[i].img + ".png' alt='Pote'><span class='textPote'>" + json["0"].competence[i].nome + "</span></div>";
      }
    $('.learns__flow').html(group);
    competences();
  });
}

//Monta as experiências

function experiences() {
  //O Primeiro é para acesso local
  // $.getJSON("http://localhost:8000/data.json", function(json) {
  $.getJSON("https://diegomcsilva.github.io/DieGO/data.json", function(json) {
      console.log(json["0"].experience);
      var total = json["0"].experience.length;
      var exp="";
      for (i = 0; i < total; i++) {
        //console.log(json["0"].experience[i].conhecimentos);
        var nomeCargo = "<h2>" + json["0"].experience[i].cargo + "</h2>";
        var nomeEmpresa = "<h3>Empresa: <strong>" + json["0"].experience[i].empresa + "</strong></h3>";
        var nomePeriodo = "<h3>Período: " + json["0"].experience[i].periodo + "</h3>";
        var nomeDesc = "</div><div class='experience_about'><p>" + json["0"].experience[i].desc + "</p>";
        var nomeExpe = "<p>Conhecimentos: " + json["0"].experience[i].conhecimentos + "</p>";
        exp += "<div class='experience_content'><div class='experience_content-header'>" + nomeCargo + nomeEmpresa + nomePeriodo + nomeDesc + nomeExpe +"</div><span class='mais'>Veja Mais</span></div>";
      }
    $('#experiences').html(exp);
    verMais();
  });
}


// function conhecimentos() {
function competences() {
    $('.learns__flow').slick({
        slide: '.learns__flow-content',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrow: true,
                    dots: false
                }
            }
        ]
    });
};


$(document).ready( function() {
    // Chamada para as functions
    competence();
    experiences();
    // competences();

    $("header").load("src/templates/header.html");
    $("footer").load("src/templates/footer.html");
});
