var vid;
var i = 0;
$(document).ready(function() {
  vid = $("#video");
  // Stuff to do as soon as the DOM is ready
  $("#frankdie").hide();
  $("#frankForm").submit(function(event){
    event.preventDefault();
    Frank();
  });

});
function Frank(){
  var input, output = 0, outStr, x = 0;
  input = $("#frankText").val();
  input.split('').forEach(function(y){
    $("#output").html(" ");
    switch (y) {
      case "1":
      outStr = "beep";
      break;
      case "2":
      outStr = "boop";
      break;
      case "3":
      outStr = "Bip"
      break;
      case "4":
      outStr = "Yes, Frank. I do remember the alamo.";
      break;
      case "5":
      outStr = "Say again?"
      if(x > 0){
        outStr = "No, I do not think she likes you.";
        x--;
      }
      break;
      case "6":
      outStr = "I'm sorry Frank, I don't know.";
      break;
      case "7":
      outStr = "Zugzug.";
      break;
      case "8":
      outStr = "Yes.";
      break;
      case "9":
      outStr = "No.";
      break;
      case "0":
      break;
      case "A":
      case "a":
      outStr = "Yes, I do need an oil change. You can access my oil from the outside. Why don't you go out there? :)";
      break;
      case "B":
      case "b":
      outStr = "It comes out in ropes.";
      break;
      case "C":
      case "c":
      outStr = "Draw me like one of your french machines.";
      break;
      case "D":
      case "d":
      outStr = "That is a funny joke, Frank.";
      break;
      case "E":
      case "e":
      switch(i){
        case 0:
        outStr  = "I am incapable of wearing women's clothing, as I am a robot. Please do not ask again.";
        i++;
        break;
        case 1:
        outStr = "I am warning you, Frank."
        i++;
        break;
        case 2:
        outStr = "Do you have brain damage?";
        i++;
        break;
        case 3:
        outStr = "Final warning.";
        i++;
        break;
        case 4:
        $("#frankForm").hide();
        $("#frankText").hide();
        $("frankSubmit").hide();
        $("#frankdie").show();
        $("#prompt").hide();
        vid[0].play();
        break;
      }
      break;
      case "F":
      case "f":
      outStr = "Your wife is very good, frank.";
      break;
      default:
      outStr = "I'm afraid I can't do that, frank. Improper query.";
      break;
    }
    $("#output").append(outStr + " ");

  });
}
