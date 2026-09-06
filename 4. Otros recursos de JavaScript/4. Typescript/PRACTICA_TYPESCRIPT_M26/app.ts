interface Persona{
    name: string; 
    fechaNacimiento: Date;
}; 

const persona: Persona = {
    name: "Juan Perez",
    fechaNacimiento: new Date("1990-01-01")
};

function calcularEdad(persona: Persona): number{
    const hoy = new Date(); 
    let edad = hoy.getFullYear() - persona.fechaNacimiento.getFullYear();
    const meses = hoy.getMonth() - persona.fechaNacimiento.getMonth();
    if(meses < 0 || (meses === 0 && hoy.getDate() < persona.fechaNacimiento.getDate())){
        edad -= 1;

    }
    return edad;
}

console.log(`La edad de ${persona.name} es: ${calcularEdad(persona)} años.`);