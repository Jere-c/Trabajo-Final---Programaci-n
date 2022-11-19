class Clinica {
    constructor(nombre, dueño, responsabilidad_juridica, doctores, enfermeros) {
        this.nombre = nombre;
        this.dueño = dueño;
        this.responsabilidad_juridica = responsabilidad_juridica,
            this.doctores = doctores;
        this.enfermeros = enfermeros;
    }
}

class Personal {
    constructor(nombre, apellido, pacientes, matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.pacientes = pacientes;
    }
}

class Enfermero extends Personal {
    constructor(nombre, apellido, pacientes, matricula, licenciatura) {
        super(nombre, apellido, pacientes, matricula);
        this.licenciatura;
    }
}
class Doctor extends Personal {
    constructor(nombre, apellido, pacientes, matricula, especialidad) {
        super(nombre, apellido, pacientes, matricula);
        this.especialidad;
    }
    datos_doctor() {
        return 'Nombre: ' + this.nombre + ' - Apellido: ' + this.apellido + ' - Pacientes: ' + this.pacientes+ ' - Matricula: ' + this.matricula + ' - Especialidad: ' + this.especialidad;
    }
}


let enfermero1 = new Doctor('Juan', 'Carrozas', pacientes, 'Matricula1?', 'Licenciatura?')

class Paciente {
    constructor(nombre, apellido, dni, fecha_n, turno, obra_s, Doctor) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fecha_n = fecha_n;
        this.turno = turno;
        this.obra_s = obra_s;
        this.Doctor = Doctor;
    }
    datos_paciente() {
        return 'Nombre: ' + this.nombre + '- Apellido: ' + this.apellido + ' - DNI: ' + this.dni + ' - Fecha de Nacimiento: ' + this.fecha_n + ' - Turno: ' + this.turno + ' - Obra Social: ' + this.obra_s + ' - Doctor: ' + this.Doctor;
    }
}
var pacientes = []
var pacientes_julian = []
var pacientes_javier = []
function ingresarPaciente() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let fecha_n = document.getElementById("fecha_n").value
    let dni = document.getElementById("dni").value
    let turno = document.getElementById("turno").value
    let obra_s = document.getElementById("obra_s").value
    let Doctor = document.getElementById("doctor").value
    let paciente = new Paciente(nombre, apellido, dni, fecha_n, turno, obra_s, Doctor)
    switch (Doctor) {
        case 'Julian':
            pacientes_julian.push(paciente.Paciente[1]);
            break;
        case 'Javier':
            pacientes_javier.push(paciente);
            break;
    }
    pacientes.push(paciente)
    console.log(doctores)
}
function mostrarPacientes() {
    let ul = document.getElementById("ul")
    if (ul.value !== "") {
        ul.innerHTML = ""
        for (const item of pacientes) {
            let li = document.createElement("li")
            li.textContent = item.datos_paciente()
            ul.appendChild(li)
        }
    } else {
        for (const item of pacientes) {
            let li = document.createElement("li")
            li.textContent = item.datos_paciente()
            ul.appendChild(li)
        }
    }
}

let doctor1 = new Doctor('Julian', 'Rozas', pacientes_julian, 'Matricula?', 'Especialiad?');
let doctor2 = new Doctor('Javier', 'Parra', pacientes_javier, 'Matricula?', 'Especialiad?');
var doctores = [doctor1, doctor2];

function mostrarDoctores() {
    let ul = document.getElementById("uld")
    if (ul.value !== "") {
        ul.innerHTML = ""
        for (const item of doctores) {
            let li = document.createElement("li")
            li.textContent = item.datos_doctor()
            ul.appendChild(li)
        }
    } else {
        for (const item of doctores) {
            let li = document.createElement("li")
            li.textContent = item.datos_doctor()
            ul.appendChild(li)
        }
    }
}



console.log(pacientes)
console.log(doctor1)