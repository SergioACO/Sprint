
const form = document.getElementById('form_usuario_nuevo');


function validar_nombre_usuario(string){
    const nombre = document.getElementById('dato_nombre_usuario').value;
    const validaNombre = (/^[A-Z][a-z]+$/)
        if ((validaNombre.test(nombre) == true) & nombre != null) { 
            alert("nombre_usuario valido") 
            return true;
        }else{ 
            alert("nombre_usuario no valido") 
            return false; } 
}

function validar_edad_usuario(edad){
    const años = document.getElementById('dato_edad_usuario').value;
    const validaEdad = (/^[0-9]+$/)
    if((validaEdad.test(años) == true) & años != null & años >= 13 & años < 110){
        alert("edad usuario valido")
        return true;
    }else{
        alert("edad usuario no valido")
        return false;
    }
}

function validar_contrasena(string){
    const contrasena = document.getElementById('dato_contrasena').value;
    var validaContrasena = (/^[0-9a-zA-Z]+$/)
        if((validaContrasena.test(contrasena)== true) & validaContrasena != null & contrasena.length>=6){
            alert('Contraseña valida')
            return true;
        }else{
            alert('Contraseña invalida')
            return false;
        }
    
}


/*module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;*/