$(document).ready(function(){

  var cero = $('#cero');
  var uno = $('#uno');
  var dos = $('#dos');
  var tres = $('#tres');
  var cuatro = $('#cuatro');
  var cinco = $('#cinco');
  var seis = $('#seis');
  var siete = $('#siete');

  var numeroGanador = Math.floor(Math.random() * 9);
    if (numeroGanador == 0){
      cero.hide();
      uno.show();
      uno.addClass("fixed")
      dos.hide();
      tres.hide();
      cuatro.hide();
      cinco.hide();
      seis.hide();
      siete.hide();
      $('nav a').css('color', 'white');
    }else if (numeroGanador == 1){
      cero.hide();
      uno.hide();
      dos.addClass("fixed")
      dos.show();
      tres.hide();
      cuatro.hide();
      cinco.hide();
      seis.hide();
      siete.hide();
    } else if (numeroGanador == 2){
      cero.hide();
      uno.hide();
      tres.addClass("fixed")
      dos.hide();
      tres.show();
      cuatro.hide();
      cinco.hide();
      seis.hide();
      siete.hide();
      $('nav a').css('color', 'white');
  } else if (numeroGanador == 3){
      cero.hide();
      uno.hide();
      cuatro.addClass("fixed")
      dos.hide();
      tres.hide();
      cuatro.show();
      cinco.hide();
      seis.hide();
      siete.hide();
      $('nav a').css('color', 'yellow');
  } else if (numeroGanador == 4){
      cero.hide();
      uno.hide();
      cinco.addClass("fixed")
      dos.hide();
      tres.hide();
      cuatro.hide();
      cinco.show();
      seis.hide();
      siete.hide();
      $('nav a').css('color', 'yellow');
  } else if (numeroGanador == 5){
      cero.hide();
      uno.hide();
      seis.addClass("fixed")
      dos.hide();
      tres.hide();
      cuatro.hide();
      cinco.hide();
      seis.show();
      siete.hide();
      $('nav a').css('color', 'cyan');
  } else if (numeroGanador == 6){
      cero.hide();
      uno.hide();
      siete.addClass("fixed")
      dos.hide();
      tres.hide();
      cuatro.hide();
      cinco.hide();
      seis.hide();
      siete.show();
    }else if (numeroGanador == 7){
        uno.hide();
        cero.addClass("fixed")
        dos.hide();
        tres.hide();
        cuatro.hide();
        cinco.hide();
        seis.hide();
        siete.hide();
        cero.show();
      } else {
      console.log("Origami");
    };



});
