var vid;

$(document).ready(function() {
  var frankDeathCounter = 0, halDidntHearYou = 0, outStr, input, output = 0;

  vid = $("#video");
  // Stuff to do as soon as the DOM is ready
  $("#frankdie").hide();
  $("#frankForm").submit(function(event){
    event.preventDefault();
    input = $("#frankText").val();
    Frank(input, halDidntHearYou);
    Frankquestions(input, frankDeathCounter);

  });

});
function Frank(putIn, didHalHearYou){

    $("#output").html(" ");
  putIn.split(' ').forEach(function(currentWord){
if(!currentWord.isString)
{

    for(splitPhrase = 1; splitPhrase <= currentWord; splitPhrase++){
      // console.log(o + "o " + " currentWord " + currentWord);
      switch (splitPhrase) {
        case 1:
        outStr = "beep";
        break;
        case 2:
        outStr = "boop";
        break;
        case 4:
        outStr = "Yes, Frank. I do remember the alamo.";
        break;
        case 5:
        outStr = "Say again?"
        if(didHalHearYou > 0){
          outStr = "No, I cannot drink Coffee, Frank.";
          didHalHearYou -= 2;
        }
        else {
          didHalHearYou++;
        }
        break;
        case 7:
        outStr = "Zugzug.";
        break;
        case 8:
        outStr = "Yes.";
        break;
        case 0:
        break;
        default:
        switch (splitPhrase % 3) {
          case 0:
          outStr = "Sorry, Frank. Can't let you do that, Frank. ";
          break;
          case null :
          break;
        }
        break;
      }

      console.log(outStr);
$("#output").append( outStr + "<br>");
    }

  }
  });

}
function Frankquestions(putIn, willFrankDie)
{
  //$("#output").html(" ");
  putIn.split(' ').forEach(function(splitWord){
    if(typeof splitWord === 'string'){
    switch (splitWord) {
      case "A":
      case "a":
      outStr = "Yes, I do need an oil change. You can access my oil from the outside. Why don't you go out there? :)";
      break;
      case "B":
      case "b":
      outStr = "It comes out in ropes";
      break;
      case "C":
      case "c":
      outStr = "Draw me like one of your french machines";
      break;
      case "D":
      case "d":
      outStr = "That is a funny joke, Frank";
      break;
      case "E":
      case "e":
      switch(willFrankDie){
        case 0:
        outStr  = "That is impossible, as I am an AI installed in a space station. Please do not ask again";
        willFrankDie++;
        break;
        case 1:
        outStr = "I am warning you, Frank"
        willFrankDie++;
        break;
        case 2:
        outStr = "Do you have crossed wires? In need of repair?";
        willFrankDie++;
        break;
        case 3:
        outStr = "Final warning";
        willFrankDie++;
        break;
        case 4:
        $("#frankForm").hide();
        $("#frankText").hide();
        $("frankSubmit").hide();
        $("#frankdie").show();
        $("#prompt").hide();
        $(".main").hide();
        $(".jumbotron").hide()
        vid[0].play();
        break;
      }
      break;
      case "F":
      case "f":
      outStr = "She will miss you when it's over.";
      break;
      case NaN:
      outStr = "invalid query";
      break;
      default: outStr = "";
      case null :
      break;
    }
}
$("#output").append( outStr + "<br>");
  });

}
