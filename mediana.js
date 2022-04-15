function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
   
  const lista1 = [
    100,
    200,
    500,
    400000000,
  ];
  
  //PARA QUITAR TODOS LOS DECIMALES QUE SALGAN ES CON (lista1.length / 2)
  const mitadLista1 = parseInt(lista1.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    //CREAMOS 2 ELEMENTOS  
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    //ESTA ES LA MEDINA promedioElemento1y2
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }
  