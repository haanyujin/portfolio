$(document).ready(function(){

  $('.puma>li:first-of-type').click(function(){
    $('.concept_P').fadeIn(300);
    $('.X_icon').click(function(){
      $('.concept_P').fadeOut(300);
    })
  })
  $('.kyobo>li:first-of-type').click(function(){
    $('.concept_K').fadeIn(300);
    $('.X_icon').click(function(){
      $('.concept_K').fadeOut(300);
    })
  })
});