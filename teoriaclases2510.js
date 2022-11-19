class Vehiculo {
    constructor(color, ruedas) {
        this.color = color
        this.ruedas = ruedas
    }
    toString() {
        return `color: ${this.color} tiene ${ruedas} ruedas`
    }
}

class Coche extends Vehiculo {
    constructor(velocidad, cilindrada,) {
        super(color,ruedas)
        this.velocidad = velocidad
        this.cilindrada = cilindrada
    }
    toString() {
         
        return super.toString()+`, la velocidad maxima es ${this.velocidad}km/h y un motor de ${this.cilindrada}cc`
    }
}
class Moto extends Vehiculo{
    constructor(velocidad, cilindrada,color,ruedas) {
        super(color,ruedas);
        this.velocidad = velocidad
        this.cilindrada = cilindrada
    }
}
let coches = []
let motos = []

do {
    var color = prompt(`color`)
    var ruedas = parseInt(prompt(`ruedas`))
    var cilindrada = parseInt(prompt(`cilindrada`))
    var velocidad = parseInt(prompt(`velocidad`))
    if (ruedas === 2) {
        let moto1 = new Moto(velocidad, cilindrada,color,ruedas)
        motos.push(moto1)
        color;

    } else {
        let auto1 = new Coche(velocidad, cilindrada,color,ruedas)
        coches.push(auto1)

    }
    
        
    var condicion = confirm("quiere agregar otro?")
} while (condicion);

for (const iterator of coches) {
   document.write(iterator.toString()) 
}
console.log(motos,coches)


// let coche1 = new Coche(200, 1900)
// //coche1.cantRuedas = cantRuedas
// coche1.color = color
// coche1.ruedas = ruedas
// coche1.cilindrada = cilindrada
// coche1.velocidad = velocidad

// // let coche2 = new Coche(180, 1400)
// // coche2.color = `oro plata`





//     toString() {
        
//         return `, la velocidad maxima es ${this.velocidad}km/h y un motor de ${this.cilindrada}cc`
//     }
// }