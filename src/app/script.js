$(document).ready( function() {
  $(".mais").click(function() {
      $(this).prev().slideToggle(500);
  });
});

//Monta as competencias - para estilizar com core é necessário adicionar a classe no css

function competence() {
  // $.getJSON("http://localhost:8000/data.json", function(json) {
  $.getJSON("https://diegomcsilva.github.io/DiegoMarcelo/data.json", function(json) {
      console.log(json["0"].competence);
      var total = json["0"].competence.length;
      var group="";
      for (i = 0; i < total; i++) {
        console.log(json["0"].competence[i].nome);
        group +="<div class='content'><p>" + json["0"].competence[i].nome + "</p><div class='progress'><div class='" + json["0"].competence[i].nome + "' style='width:" + json["0"].competence[i].nivel + "%;'></div></div></div>";
      }
    $('#competence').html(group);
  });
}

//Monta as experiências

function experiences() {
  //O Primeiro é para acesso local
  // $.getJSON("http://localhost:8000/data.json", function(json) {
  $.getJSON("https://diegomcsilva.github.io/DiegoMarcelo/data.json", function(json) {
      console.log(json["0"].experience);
      var total = json["0"].experience.length;
      var exp="";
      for (i = 0; i < total; i++) {
        console.log(json["0"].experience[i].conhecimentos);
        exp += "<div class='experience_content'><h2>" + json["0"].experience[i].cargo + "</h2><h3>Empresa: <strong>" + json["0"].experience[i].empresa + "</strong></h3><h3>Período: " + json["0"].experience[i].periodo + "</h3><h4>Localidade: " + json["0"].experience[i].localidade + "</h4><div class='experience_about'><p>" + json["0"].experience[i].desc + "</p><p>Conhecimentos: " + json["0"].experience[i].conhecimentos + "</p></div><span class='mais'>Veja Mais</span></div>";
      }
    $('#experiences').html(exp);
  });
}


// Chamada para as functions
competence();
experiences();
