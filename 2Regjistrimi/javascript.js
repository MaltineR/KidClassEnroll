$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Lexo më shumë") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Lexo më pak");
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Lexo më shumë");
        $("#text").slideUp();
      }
    });
  });