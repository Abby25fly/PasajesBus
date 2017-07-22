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
    dni:dni
    }
  console.log(pax);
  mostrarDatos.innerHTML="<center><h3>Datos de la Reserva</h3><p><strong>Número de asiento: </strong>"+asiento+"</p><p><strong>Nombre del Pasajero: </strong>" +nombre+ ", " +apellidos+"</p><p><strong>DNI del pasajero: </strong>"+dni+"</p></center>"
  borrar();
}

function borrar(){
  document.getElementById("inputName").value="";
  document.getElementById("inputSurname").value="";
  document.getElementById("inputDni").value="";
}
function buscar_dni(){
  var busDni=document.getElementById("buscardni").value;
  for(var i = 1; i<=32;i++){
    if(pax[i] != undefined && pax[i].dni == busDni){
      document.getElementById("inputName").value = pax[i].nombre;
      document.getElementById("inputSurname").value = pax[i].apellidos;
      document.getElementById("inputDni").value = pax[i].dni;
    }
  }
}

function muestraLista(){
  for(var i = 1; i<=32;i++){
    if(pax[i] != undefined){
      var nombre=document.getElementById("inputName").value += pax[i].nombre;
      var apellidos=document.getElementById("inputSurname").value += pax[i].apellidos;
      var dni=document.getElementById("inputDni").value += pax[i].dni;
    }
  }
}
/*
function cancelar(){
}
*/
