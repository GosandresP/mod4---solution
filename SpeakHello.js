(function (window) {
 
  var helloSpeaker = {};
  
  
    var speakWord = "Hola";
  
  
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  

    window.helloSpeaker = helloSpeaker;
  
  })(window);