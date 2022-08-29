// fB = Función B
const fB = function () {
    console.log("Función B ejecutada.");
  };
  
  // fA = Función A
  const fA = function (callback) {
    callback();
  };
  
  fA(fB);