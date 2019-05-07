let mostarActivos=()=>{
	let lista=document.getElementById('listado-activadas');
	let temp="";
	for(item of registro){
		temp=temp+`<li onclick="verdetalle('${item.}')">${item.nombre}</li>`;
	}
	lista.innerHTML=temp;
}

let mostarInactvios=()=>{
	let lista=document.getElementById('listado-inactivadas');
	let temp="";
	for( item of registro){
			temp=temp+`<li >${item.nombre}</li>`;
	}
	lista.innerHTML=temp;
}


let limpiar=()=>{
	inp_nombre.value="";
	inp_fecha.value="";
	inp_hora.value="";
	inp_tipo.value=0;
}
