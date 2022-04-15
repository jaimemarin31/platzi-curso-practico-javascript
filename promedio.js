function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
    
    const sumaLista = lista.reduce(
      //LE CONTRUIMOS UNA FUNCION  ANONIMA OSEA SIN NOMBRE COMO ARGUMENTO 
      //ESTA FUNCION RECIBE 2 PARAMETROS valorAcumulado Y nuevoElemento
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }
  