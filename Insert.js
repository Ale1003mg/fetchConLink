console.log('Prueba');
//Restriciones de arranque

//Funciones
var Confirmar = document.getElementById('confirmar');
//var IDcat = document.getElementById('Idcat');
//var Cate = document.getElementById('categoria');
var formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    Confirmar.innerHTML=``;
    //console.log('Prueba');
    //console.log(Cate);
    var data= new FormData(formulario);
    console.log(data.get('Idcat'));
    console.log(data.get('categoria'));
    var datos =  {idCat:data.get('Idcat'),catNombre:data.get('categoria')};
    console.log(datos);
   /* if (data.get('categoria')=='') {
        Confirmar.innerHTML= `
        </br>
        <div class="alert alert-danger" role="alert">
           No se guardo
       </div>
        `
        alert("Digite el nombre de la categoria");

    }else
    {
       
         console.log(data.get('categoria'));
         Confirmar.innerHTML=
         `
         </br>
         <div class="alert alert-primary" role="alert">
            Se guardo Correctamente
        </div>
         `
    }*/
/*
   fetch('Categorias.json',{
        metho: 'POST',
        body: JSON.stringify(datos),
        headers:{'Content-Type': 'application/json'}
                            })// se puede poner la dirrecion de url(es para un API) o un archivo en formato de  json
    .then( res => res.json() )
    .catch(alert("No se guardo"))
    .then( datos => {
        console.log(datos);
           
     
    })*/

});