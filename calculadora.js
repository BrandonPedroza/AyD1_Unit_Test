module.exports = {
    Saludar: function(nombre){
        return("Hola " + nombre + ". Como estas?");
    },    
    suma: function(sumando1, sumando2){
        return sumando1 + sumando2;
    },
    resta: function(minunendo, sustraendo){
      return minunendo - sustraendo;
    },
    multiplicacion: function(factor1, factor2) {
        return factor1*factor2;
    },
    calcularPrecioSinIva: function(precio){
        return precio/1.12;
    }
  
  }
