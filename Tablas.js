var contenido = document.getElementById('contenido');
var busc = document.getElementById('Bus');
var formulario = document.getElementById("formulario");
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var data= new FormData(formulario);
    console.log(data.get('Bus'));

    fetch('datos.json')// se puede poner la dirrecion de url(es para un API) o un archivo en formato de  json
    .then( res => res.json() )
    .then( datos => {
      
       contenido.innerHTML = ''
      
        for(let valor of datos){
        if(valor.id == data.get('Bus', Int32Array)){  
         contenido.innerHTML += `
          
          <tr>
            <th scope="row">${valor.id}</th>
            <td>${valor.title}</td> 
            <td>${valor.description}</td> 
            <td>${valor.done ? "Activo" : "Eliminado" }</td> 
            <th>
            <button type="submit" id="Limpiar" class="btn btn-primary w-10" >Modificar</button>
            <button type="submit" id="Limpiar" class="btn btn-danger w-10" >Eliminar</button>
          </th>
           </tr>
   
           ` 
    
    }}
    })

});


function traer(){
    fetch('datos.json')// se puede poner la dirrecion de url(es para un API) o un archivo en formato de  json
    .then( res => res.json() )
    .then( datos => {
       // console.log(datos)
       Tabla(datos)
    })
};



function Tabla(datos){
    //console.log(datos)
     contenido.innerHTML = ''

    for(let valor of datos){
        
    contenido.innerHTML += `
       
       <tr>
         <th scope="row">${valor.id}</th>
         <td>${valor.title}</td> 
         <td>${valor.description}</td> 
         <td>${valor.done ? "Activo" : "Eliminado" }</td> 
         <th>
         <button type="submit" id="Limpiar" class="btn btn-primary w-10" >Modificar</button>
         <button type="submit" id="Limpiar" class="btn btn-danger w-10" >Eliminar</button>
       </th>
        </tr>

        ` 
    }

};

function Limpiar(){
    contenido.innerHTML = ''
    contenido.innerHTML += `
       
    <tr>
      <th scope="row"></th>
      <td></td> 
      <td></td> 
      <td></td> 
      <td></td> 
     </tr>

     ` 
};

