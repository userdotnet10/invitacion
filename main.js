var end = new Date('08/09/2024 00:00 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
   var now = new Date();
   var distance = end - now;
   if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = 'EXPIRED!';
      return;
   }
var days = Math.floor(distance / _day);
var hours = Math.floor((distance % _day) / _hour);
var minutes = Math.floor((distance % _hour) / _minute);
var seconds = Math.floor((distance % _minute) / _second);
document.getElementById('countdown').innerHTML = '<div class="box">'+days + '<div class="text">DIAS</div></div><div class="box">' + hours + '<div class="text">HORAS</div></div><div class="box">' + minutes + '<div class="text">MIN</div></div><div class="box">' + seconds+'<div class="text">SEG</div></div>';
}        
timer = setInterval(showRemaining, 1000);

function submitForm() {
   const form = document.forms['rsv'];
   const data = new FormData(form);

   if (!form.querySelector('input[name="Asistencia"]:checked')) {
      alert('Por favor, selecciona una opción de asistencia.');
      return false;
   }

   fetch('https://script.google.com/macros/s/AKfycbxqxZyLUpjinxpjbqHdDSJpdlA1g3Gdj1oarFx2EVsjDvxqBWlop1OQVMEeajFTVdspfw/exec', {
     method: 'POST',
     body: data
   })
   .then(response => response.json())
   .then(result => {

      cleanInput()
      console.log('Success:', result);
      alert('Formulario enviado correctamente');

   })
   .catch(error => {
     console.error('Error:', error);
     alert('Hubo un error al enviar el formulario');
   });

   return false;
 }

function cleanInput(){
   document.getElementById('rsv').reset();
}
