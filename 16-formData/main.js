
var formData = new FormData();

formData.append("nombre", "Groucho");
formData.append("id", 123456); // el numero es convertido en texto "123456"

fetch('http://sminnova.com/demo/registro.php', {
  method: 'POST',
  body: formData
})
.then(response => response)
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));


var formDataRegistro=new FormData(document.getElementById('registro'));

fetch('http://sminnova.com/demo/registro.php', {
  method: 'POST',
  body: formDataRegistro
})
.then(response => response)
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
