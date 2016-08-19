$(document).ready(function(){

var menuSpace = 32;

  $('#adoMenu').click(function() {
    //Marca activa
    $('#adoMenu').addClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: menuSpace},800);
    //Lista de proyectos
    $('#adoProyectos').delay(300).fadeIn();
    $('#ancoProyectos').hide();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').hide();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').hide();
    $('#leanProyectos').hide();
    $('#onuProyectos').hide();
    $('#futuroProyectos').hide();
  });
  $('#ancoMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').addClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: menuSpace-menuSpace},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').delay(300).fadeIn();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').hide();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').hide();
    $('#leanProyectos').hide();
    $('#onuProyectos').hide();
    $('#futuroProyectos').hide();
  });
  $('#andarMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').addClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: -menuSpace},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').hide();
    $('#andarProyectos').delay(300).fadeIn();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').hide();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').hide();
    $('#leanProyectos').hide();
    $('#onuProyectos').hide();
    $('#futuroProyectos').hide();
  });
  $('#corazonesMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').addClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: -menuSpace*2},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').hide();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').delay(300).fadeIn();
    $('#googleProyectos').hide();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').hide();
    $('#leanProyectos').hide();
    $('#onuProyectos').hide();
    $('#futuroProyectos').hide();
  });
  $('#googleMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').addClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    $('.portafolio-lista').animate({top: -menuSpace*3},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').hide();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').delay(300).fadeIn();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').hide();
    $('#leanProyectos').hide();
    $('#onuProyectos').hide();
    $('#futuroProyectos').hide();
  });
  $('#burgerMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').addClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: -menuSpace*4},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').hide();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').hide();
    $('#burgerProyectos').delay(300).fadeIn();
    $('#hyattProyectos').hide();
    $('#leanProyectos').hide();
    $('#onuProyectos').hide();
    $('#futuroProyectos').hide();
  });
  $('#hyattMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').addClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: -menuSpace*5},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').hide();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').hide();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').delay(300).fadeIn();
    $('#leanProyectos').hide();
    $('#onuProyectos').hide();
    $('#futuroProyectos').hide();
  });
  $('#leanMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').addClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: -menuSpace*6},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').hide();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').hide();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').hide();
    $('#leanProyectos').delay(300).fadeIn();
    $('#onuProyectos').hide();
    $('#futuroProyectos').hide();
  });
  $('#onuMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').addClass('portafolio-active');
    $('#futuroMenu').removeClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: -menuSpace*7},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').hide();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').hide();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').hide();
    $('#leanProyectos').hide();
    $('#onuProyectos').delay(300).fadeIn();
    $('#futuroProyectos').hide();
  });
  $('#futuroMenu').click(function() {
    //Marca activa
    $('#adoMenu').removeClass('portafolio-active');
    $('#ancoMenu').removeClass('portafolio-active');
    $('#andarMenu').removeClass('portafolio-active');
    $('#corazonesMenu').removeClass('portafolio-active');
    $('#googleMenu').removeClass('portafolio-active');
    $('#burgerMenu').removeClass('portafolio-active');
    $('#hyattMenu').removeClass('portafolio-active');
    $('#leanMenu').removeClass('portafolio-active');
    $('#onuMenu').removeClass('portafolio-active');
    $('#futuroMenu').addClass('portafolio-active');
    //Animación de transición
    $('.portafolio-lista').animate({top: -menuSpace*8},800);
    //Lista de proyectos
    $('#adoProyectos').hide();
    $('#ancoProyectos').hide();
    $('#andarProyectos').hide();
    $('#corazonesProyectos').hide();
    $('#googleProyectos').hide();
    $('#burgerProyectos').hide();
    $('#hyattProyectos').hide();
    $('#leanProyectos').hide();
    $('#onuProyectos').hide();
    $('#futuroProyectos').delay(300).fadeIn();
  });



});
