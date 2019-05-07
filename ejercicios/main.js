let btn1=document.getElementById('registrar');
let detalle_registro=document.getElementById("detalle-registro");
let registro_final=document.getElementById('registro-final');

let inp_nombre=document.getElementById("nombre");
let inp_fecha=document.getElementById("fecha");
let inp_hora=document.getElementById("hora");
let inp_tipo=document.getElementById("tipo");
let registro=[];



btn1.addEventListener("click",()=>{
event.preventDefault();
detalle_registro.style.display="block";

})


registro_final.addEventListener("click",()=>{
	
 let item={
 	nombre:inp_nombre.value,
 	fecha:inp_fecha.value,
 	hora:inp_hora.value,
 	tipo:inp_tipo.value,
 	obervacion:"",
 	estado:1
	}
	registro.push(item);
	mostarActivos();
	mostarInactvios();
})

