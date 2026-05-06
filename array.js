//1.mostrarPersona array
let personas=[
    {   
        nombre:'grecia',
        edad:19,
        dni:484848
    },
    {
        nombre:'pamela',
        edad:18,
        dni:474747
    },
    {
        nombre:'lourdes',
        edad:17,
        dni:464646
    },
    {   
        nombre:'grecia',
        edad:12,
        dni:111111
    }
]
// console.log(personas)

//1. mostrarPersonas()
const mostrarPersonas = () => {
    personas.forEach(p=>console.log(`nombre: ${p.nombre}, ${p.edad}, ${p.dni}`))
}
mostrarPersonas()

//2.agregar item

personas.push(
    {nombre:'morena',
    edad:16,
    dni:45
    })
personas.forEach(p=>console.log(p)) 


//3.buscarPersona x dni
const buscarPorDni=(dniABuscar)=>{
    let encontrado=personas.find(p=>p.dni==dniABuscar);
    if(encontrado){
        console.log(`persona con dni ${dniABuscar} es ${encontrado.nombre}`);
    }else{
        console.log("no se encontró ese dni")
    }
};
buscarPorDni(474747);


//4.buscarPersona x nombre
const buscarPorNombre=(nombreABuscar)=>{
    let encontrado=personas.filter(n=>n.nombre==nombreABuscar);
    if (encontrado.length>0){
        console.log("Personas encontradas: ");
        encontrado.forEach(e => console.log(e.nombre, e.edad))
    }else{
        console.log("el nombre no esta en la lista");
    }
};
 buscarPorNombre('grecia')


//5.eliminarPersona x dni
const eliminarPorDni=(dniAEliminar)=>{
    let indice=personas.findIndex(p=>p.dni == dniAEliminar);

    if (indice != -1){
        personas.splice(indice, 1);
        console.log(`persona con dni ${dniAEliminar} eliminada.`);
        mostrarPersonas()
    } else{
        console.log("no se encontró a nadie con ese dni a eliminar.");
    }
}; 
eliminarPorDni(474747)

//6.actualizar o modificar
const actualizar = (nuevoNombre, nuevaEdad, dniABuscar) => {
    let persona = personas.find (p=> p.dni == dniABuscar);
    if (persona) {
        persona.edad = nuevaEdad;
        persona.nombre = nuevoNombre
        console.log(`Datos actualizados, edad: ${nuevaEdad}, nombre: ${nuevoNombre}`);
    } else {
        console.log(" no se pudo actualizar: dni no encontrado");
    }
};
actualizar("grecia luz", 20, 484848)