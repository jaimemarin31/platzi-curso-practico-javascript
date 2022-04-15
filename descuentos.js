
//VAMOS A CREAR UNA FUNCION
function calcularPrecioConDescuento(precio, descuento) {
    //VAMOS A CREAR OTRAS 2 VARIABLES CONSTANTES
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

//RETORNAMOS UN VALOR
return precioConDescuento;
}

function clickBotonDescuento() {
    //creamos nuestro input de HTML que los generamos en JavaScript
    const inputPrecio = document.getElementById("InputPrecio");
    //vamos a traer su valor del input de HTML para eso creamos una constante
    const precioValor = inputPrecio.value;


    //creamos el otro input de HTML que los generamos en JavaScript
    const inputDescuento = document.getElementById("InputDescuento");
    //vamos a traer su valor del input de HTML para eso creamos una constante
    const descuentoValor = inputDescuento.value; 

    const precioConDescuento = calcularPrecioConDescuento(precioValor, descuentoValor);

    const resultadoPrecio = document.getElementById("resultadoPrecio");
    resultadoPrecio.innerText = "El precio con descuento son: $" + precioConDescuento;


}

// //SOLUCION #1: CREAMOS UN ARRAYS y SWITCH DE CUPONES
// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

// const inputCoupon = document.getElementById("InputCoupon");
// const couponValue = inputCoupon.value;

// //Crear una variable descuento y asignarle un valor distinto con un switch
// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputCoupon = document.getElementById("InputCoupon");
//     const couponValue = inputCoupon.value;
  
//     let descuento;
  
//     switch(couponValue) {
//       case coupons[0]: // "JuanDC_es_Batman"
//         descuento = 15;
//       break;
//       case coupons[1]: // "pero_no_le_digas_a_nadie"
//         descuento = 30;
//       break;
//       case coupons[2]: // "es_un_secreto"
//         descuento = 25;
//       break;
//     }
  
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//   }

