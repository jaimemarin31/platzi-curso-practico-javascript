// Funciones HELPERS o UTILS son funciones que no son parte de la logica de negocio del analisis que vamos 
//a hacer pero son necesarias para los calculos 
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  //CALCULADORA DE LA MEDIANA DE SALARIOS
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  // MEDIANA GENERAL
  //ARRAY DE salariosCol
  const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  //EL METODO sort ORDENA TODOS LOS SALARIOS
  const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  
  // Mediana del top 10%
  //SE DEFINE LA POSICION DONDE QUEREMOS PONER NUESTRO SALARIO OSEA EL % QUE EN ESTE CASO ES 90
  const spliceStart = (salariosColSorted.length * 90) / 100;
  //ACA LA CANTIDAD DE PERSONAS Y SU SALARIOS QUE DESEO VER
  const spliceCount = salariosColSorted.length - spliceStart;
  
  //CREAMOS UN ARRAYS salariosColTop10 CON LA CANTIDAD DESEADA DE PERSONAS 
  const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  
  console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });
  
  