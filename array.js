//1.mostrarPersona array
let personas=[
    {   
        nombre:'grecia',
        edad:19,
        dni:48
    },
    {
        nombre:'pamela',
        edad:18,
        dni:47
    },
    {
        nombre:'lourdes',
        edad:17,
        dni:46
    },
    {   
        nombre:'grecia',
        edad:12,
        dni:11
    }
]
console.log(personas)
personas.forEach(p=>console.log(p.nombre))
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
}; buscarPorDni(47);
//4.buscarPersona x nombre
const buscarPorNombre=(nombreABuscar)=>{
    let encontrado=personas.filter(n=>n.nombre==nombreABuscar);
    if(encontrado){
        console.log("nombre encontrado:",encontrado.nombre);
    }else{
        console.log("el nombre no está en la lista");
    }
}; buscarPorNombre('grecia')
//5.eliminarPersona x dni
const eliminarPorDni=(dniAEliminar)=>{
    let indice=personas.findIndex()
}
//6.actualizar o modificar