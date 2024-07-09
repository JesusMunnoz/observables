let usuario = null; //{nombre: "Jose", apellidos: "Garcia Garcia"}

function getStart(request, response)
{
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}


// function getUser(request, response)
// {
//     let respuesta;
//     if (usuario != null) 
//         respuesta = usuario;
//     else
//         respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"}
    
//     response.send(respuesta);   
// }

function getUser(request, response)
{
    let name = request.query.name;
    let respuesta;

    if (usuario != null && (!name || name === usuario.nombre))
        respuesta = {error: false, codigo: 200, data: usuario}

    else 
        respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"}

    response.send(respuesta);      
}

function getUser2(request, response)
{
 let name = request.params.name
 if (usuario != null && name === usuario.nombre) 
     response.send({error: false, codigo: 200, data: usuario});    
 else  
     response.send({error: true, codigo: 200, mensaje: "El usuario no existe"});      
}



function postUser(request, response)
{
    let respuesta; 
    console.log(request.body)
    if (usuario === null)
    {
        usuario     = {nombre: request.body.data1, 
                       apellidos: request.body.data2}
        
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Usuario creado',data: usuario};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'Usuario ya existe'};

    response.send(respuesta);
}

function putUser(request, response)
{
    let respuesta
    if (usuario !=  null)
    {
        usuario.nombre      = request.body.nombre1;
        usuario.apellidos   = request.body.apellido1;
        respuesta           = {error: false, codigo: 200, 
                                mensaje: 'Usuario actualizado',data: usuario};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El usuario no existe',data: usuario};

    response.send(respuesta);
};

function deleteUser(request, response)
{
    let respuesta
    if (usuario != null)
    {    
        usuario     = null;
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Usuario borrado',data: usuario};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                        mensaje: 'El usuario no existe',data: usuario};

    response.send(respuesta);
};

module.exports = {getStart, getUser, getUser2, postUser, putUser, deleteUser};
