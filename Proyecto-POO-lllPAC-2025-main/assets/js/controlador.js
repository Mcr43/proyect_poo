let usuarios = [];
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
    // const proyecto = {
    //     html: html,
    //     css: css,
    //     js: js
    // }

    const pj = `
        <html>
            <head>
                <meta charset="uft-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${usuarioActual.proyectos.id}</title>
                <style>
                    ${css}
                </style>
            </head>
            <body>
                ${html}
                <script>
                    ${js}
                </script>
            </body>
        </html>
    `;

    return pj;
    
};

const guardarProyecto =  (usuarioActual) => {
    if (!verificarLimiteProyectos(usuarioActual.tipoPlan)) {
        alert("Has alcanzado el límite de proyectos para tu plan actual.");
        return;
    } else {
        //agregar el proyecto al usuarioActual
        usuarioActual.proyectos.push(construirProyectos);
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

const cargarUsuarios = () => {
    usuarios.forEach(element => {
        print(`${element}`);
    });
    
}

const cargarUsuario = (usuarioid) => {
    const usuario = usuarios.find(u => u.id === parseInt(usuarioid));
    print(`${usuario}`);
};

/*
interface usuario {
    correo: string;
    contraseña: string;
    tipoPlan: string;
    proyectos: Array<proyecto>;
};

interface proyecto {
    html: string;
    css: string;
    js: string;
};
*/