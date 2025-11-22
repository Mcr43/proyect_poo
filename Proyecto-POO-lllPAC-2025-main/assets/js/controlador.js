var usuarioActual = null;
var tipoPlanUsuario = null;
var proyectosUsuario = 0;

const mostrarSeccionProyectos = () => {
    document.getElementById("proyect-section").style.display = "block";
    document.getElementById("plan-section").style.display = "none";
    document.getElementById("about-section").style.display = "none";
    document.getElementById("landing-section").style.display = "none";


};

const construirProyectos = () => {
    const html = document.getElementById("html-code").value;
    const css = document.getElementById("css-code").value;
    const js = document.getElementById("js-code").value;

    // agregar la lógica para construir el proyecto
};

const guardarProyecto = async (usuarioActual) => {
    if (!verificarLimiteProyectos(usuarioActual.tipoPlan)) {
        alert("Has alcanzado el límite de proyectos para tu plan actual.");
        return;
    } else {
        //agregar el proyecto al usuarioActual
        const resultado = await fetch('http://localhost:PORT/guardarProyecto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        usuarioActual.proyectos.push(resultado.json());
        proyectosUsuario++;
        console.log("Proyecto guardado exitosamente.");
    }
};

const verificarLimiteProyectos = (tipoPlanUsuario) => {
    switch (tipoPlanUsuario) {
        case "basico":
            return proyectosUsuario >= 5;
        case "estandar":
            return proyectosUsuario >= 20;
        case "profesional":
            return false;
        default:
            return true;
    };
};

const cambiarTipoPlan = (nuevoTipoPlan) => {
    tipoPlanUsuario = nuevoTipoPlan;
    console.log("Tipo de plan cambiado a: " + tipoPlanUsuario);
};

/*
const guardarProyecto = async(usuarioActual) => {
    if (!verificarLimiteProyectos(usuarioActual.tipoPlan)) {
        alert("Has alcanzado el límite de proyectos para tu plan actual.");
        return;
    } else {
        const resultado = await fetch('http://localhost:PORT/guardarProyecto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        
        data = await resultado.json();
        //guardar ( usuarioActual.proyectos += data; )
        proyectosUsuario++;
        console.log("Proyecto guardado exitosamente.");    
    }
};

*/