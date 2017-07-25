var asiento = -1;
var asientos = document.getElementsByTagName('td');
for (var i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect,false);
}
function redirect(event){
    asiento=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(198, 190, 186)') ? 'transparent' : '#c6beba';
}
var pax= new Array(32);
for(var i = 1; i<=32;i++){
  pax[i]=undefined;
}

function mostrarReserva (){
  var nombre = document.getElementById("inputName").value;
  var apellidos = document.getElementById("inputSurname").value;
  var dni = document.getElementById("inputDni").value;
  var asiento = document.getElementById("mostrar").textContent;
  var mostrarDatos = document.getElementById("muestra");
    pax[asiento]={
    nombre:nombre,
    apellidos:apellidos,
    dni:dni,
    asiento:asiento
    }
  console.log(pax);
  mostrarDatos.innerHTML="<center><h3>Datos de la Reserva</h3><p><strong>Número de asiento: </strong>"+asiento+"</p><p><strong>Nombre del Pasajero: </strong>" +nombre+ ", " +apellidos+"</p><p><strong>DNI del pasajero: </strong>"+dni+"</p><br></center>"
  borrar();
}

function borrar(){
  document.getElementById("inputName").value="";
  document.getElementById("inputSurname").value="";
  document.getElementById("inputDni").value="";
}

function muestraLista(){
  for(var i = 1; i<=32;i++){
    if(pax[i] != undefined){
      var list = document.getElementById("checklist");
      var showlist = document.getElementById("listar");
      list.innerHTML="<center><h3>Lista de pasajeros: </h3></center>"
      showlist.innerHTML+="<center><p>Número de asiento: "+pax[i].asiento+"</p><p>Nombre del pasajero: "+pax[i].nombre+", "+pax[i].apellidos+"</p><p>DNI del pasajero: "+pax[i].dni+"</p><br></center>"
    }
  }
}

function buscar(){
  var busDni=document.getElementById("buscardni").value;
  for(var i = 1; i<=32;i++){
    if(pax[i] != undefined && pax[i].dni == busDni){
      var findDni =document.getElementById("muestraDNI");
      findDni.innerHTML="<center><h3>Reserva Encontrada</h3><p>Número de asiento: "+pax[i].asiento+"</p><p>Nombre del pasajero: "+ pax[i].nombre+", "+pax[i].apellidos+"</p><p>DNI del pasajero: "+pax[i].dni+"</p></center>"
    }
  }
}
/*
function cancelar(){
}
*/
