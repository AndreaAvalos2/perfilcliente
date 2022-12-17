

function procesarArchivo(event)
{
    var imagen = event.target.files[0];
    var lector = new FileReader();

    lector.addEventListener('load', mostrarImagen, false)

    lector.readAsDataURL(imagen);
}

function mostrarImagen(event)
{
    var imagenSource = event.target.result;
   var previewImagen = document.getElementById('preview')
   previewImagen.src = imagenSource;
}
document.getElementById('archivo').addEventListener('change', procesarArchivo, false);
