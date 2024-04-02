(function () {
  
  // La idea de esta tarea es tomar una matriz de nombres existente
  // y luego envía Hola 'Nombre' o Adiós 'Nombre' a la consola.
  // El programa debe decir "Hola" a cualquier nombre excepto a los nombres que comienzan con "J"
  // o "j", en caso contrario, el programa debería decir "Adiós". Entonces, el resultado final
  // en la consola debería verse así:
    /*
     Hola Alex
     Adiós Julián
     Adiós Daniel
     Adiós Wilson
     Hola danna
     Hola franco
     Hola camilo
     Hola paula
     Hola Laura
     Adiós Shesman
  
    
  
     */
  
  // PASO 1:
  // Envuelve todo el contenido de script.js dentro de un IIFE
  // Ver Conferencia 52, parte 2
  // (Nota: el paso 2 se realizará en el archivo SpeakHello.js).
    var names = ["Alex", "Julian", "Daniel", "WIlson", "Danna", "Frank", "Camilo", "Paula", "Laura", "juanita"];
  

    for (var i = 0; i < names.length; i++) {
  
   
       var firstLetter = names[i].charAt(0).toLowerCase();
  
    
      if (firstLetter === 'j') {
         byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })();