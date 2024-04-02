(function (window) {
  
    var byeSpeaker = {};
  
  
    var speakWord = "Adios";
  
  
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  

    window.byeSpeaker = byeSpeaker;
  
  })(window);