//link de conexion al api:http://jsonplaceholder.typicode.com/guide.html
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
   // var datos =  {idCat:data.get('Idcat'),catNombre:data.get('categoria')};
    //console.log(datos);
    if (data.get('Id')=='') {
        Confirmar.innerHTML= `
        </br>
        <div class="alert alert-danger" role="alert">
           No se Elimino
       </div>
        `
        alert("Digite el Id a eliminar");

    }else
    {
          fetch('https://jsonplaceholder.typicode.com/posts/'+data.get('Id'),{
        method: 'DELETE' })// se puede poner la dirrecion de url(es para un API) o un archivo en formato de  json
   
       
        // console.log(data.get('Id'));
         Confirmar.innerHTML=
         `
         </br>
         <div class="alert alert-primary" role="alert">
            Se  elimino
        </div>
         `
    }

    /*fetch('https://jsonplaceholder.typicode.com/posts/'+data.get('Id'),{
        method: 'DELETE' })// se puede poner la dirrecion de url(es para un API) o un archivo en formato de  json
   */

});