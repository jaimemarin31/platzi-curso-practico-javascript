//CODIGO DEL CUADRADO
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}  

console.groupEnd();

//CODIGO DEL TRIANGULO
    function perimetroTriangulo(lado_1, lado_2, base){
        return lado_1 + lado_2 + base;
    } 

    function areaTriangulo(altura, base){
        return (altura * base) / 2;
    } 

    console.groupEnd();

    //CODIGO CIRCULO
    console.group("El area del Circulo");

    //Diametro
    function diametroCirculo(radio) {
        return radio * 2;
    }
    
    //PI
    //const PI = 3.1416; ó
    const PI = Math.PI;
    console.log("PI es: " + PI);

    //Circunferencia
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    //Area
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }

    console.groupEnd();

    //AQUI INTERCONECTAMOS CON EL HTMML
    function calcularPerimetroCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }

    function calcularAreaCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);
        alert(area);
    }

// triangulo perimetro
function calcularPerimetroTriangulo() {
    const Lado1 = document.getElementById("InputTrianguloLado1");
    const Lado_1 = parseFloat(Lado1.value);


    const Lado2 = document.getElementById("InputTrianguloLado2");
    const Lado_2 = parseFloat(Lado2.value);


    const Base = document.getElementById("InputTrianguloBase");
    const base = parseFloat(Base.value);


    const perimetro = perimetroTriangulo(Lado_1, Lado_2, base)
    alert("El Perimetro del triangulo es de: " + perimetro + " cm");
}

// triangulo area
function calcularAreaTriangulo() {
    const Base = document.getElementById("InputTrianguloBase");
    const base = parseFloat(Base.value);


    const Altura = document.getElementById("InputTrianguloAltura");
    const altura = parseFloat(Altura.value);

    const perimetro = areaTriangulo(altura,base);
    alert("El area del triangulo es de: " + perimetro + " cm");
}

//Diametro del circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}

//Triangulo Isosceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}