class Televisor{
    constructor(tamaño,marca,modelo,resolucion,precio){
        this.tamaño=tamaño
        this.marca=marca
        this.modelo=modelo
        this.resolucion=resolucion
        this.precio=precio
    }
    datosTelevisor(){
        return this.marca+" - "+this.modelo+"||"+this.tamaño+" pulgadas ,"+this.resolucion+" ( $"+this.precio+" )"
    }
}
let televisores = []
function ingresarTelevisor(){
    let tamaño = document.getElementById("tamaño").value
    let marca = document.getElementById("marca").value
    let modelo = document.getElementById("modelo").value
    let resolucion = document.getElementById("resolucion").value
    let precio = parseInt(document.getElementById("precio").value)
    let televisor = new Televisor(tamaño,marca,modelo,resolucion,precio)
    televisores.push(televisor)
    let div = document.getElementById("demo") //div donde se incrusta todo
    let p = document.createElement("p")
    p.textContent = televisor.datosTelevisor()
    div.appendChild(p)
}
function mostrarTelevisores(){
    let subtotal = 0
    let ul = document.getElementById("ul")
    if(ul.value !== ""){
        ul.innerHTML = ""
        for (const item of televisores) {
            let li = document.createElement("li")
            li.textContent = item.datosTelevisor()
            ul.appendChild(li)
        }
    }else{
        for (const item of televisores) {
            let li = document.createElement("li")
            li.textContent = item.datosTelevisor()
            ul.appendChild(li)
        }
    }
    for (const item of televisores) {
        subtotal = subtotal + item.precio
        document.getElementById("subtotal").innerHTML = subtotal
        
    }
}




























































/* function mostrarTelevisores(){
    let ul = document.getElementById("ul")
    if (ul.value !== ""){
        ul.innerHTML = ""
        for (const item of televisores) {
            let li = document.createElement("li")
            li.textContent = item.datosTelevisor()
            ul.appendChild(li)
        }
    }else{
        for (const item of televisores) {
            let li = document.createElement("li")
            li.textContent = item.datosTelevisor()
            ul.appendChild(li)
        }
    }
} */