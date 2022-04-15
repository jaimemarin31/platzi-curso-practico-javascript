function altura (base, lado) {
    console.log({base, lado})
    let altura = Math.sqrt(Math.pow(base/2,2) + Math.pow(lado,2))
    console.log(altura)
}

function isosceles (l1, l2, l3) {
    if ((l1 === l2 && l1 != l3) || (l1 == l3 && l1 != l2) || (l2 == l3 && l1 != l3)){
        l1 === l2
            ? altura(l3, l1)
            : l1 === l3
                ? altura(l2, l1)
                : altura(l1, l3)
    }
}

isosceles(2,1,1)