//Click Function

$(document).ready(function() {
  $("#1").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#2").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
    
  $("#3").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
    
  $("#4").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#5").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#6").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#7").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#8").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#9").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#10").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#11").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#12").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#13").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#14").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#15").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
  
  $("#16").click(function() {
    var number = parseInt($(this).attr('id'));

    ajaxCall(number);
  });
});

function ajaxCall(number) {
  
  $.ajax({
    type: "GET",
    url: 'descriptions.json',
    dataType: 'json',
    success: function(data) {
      var item = data.find(element => element.id === number).description;
      
      console.log(item);
      
      $("#d" + number).text(item);
      $("#"+ number).hide();
    },
  });
};