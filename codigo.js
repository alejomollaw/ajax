const getInfo = async ()=>{
	let aprobados = document.querySelector('.num-aprobados');
	let desaprobados = document.querySelector('.num-desaprobados');
	try{
		let req = await axios("informacion.txt");
		aprobados.textContent = req.data.aprobados;
		desaprobados.textContent = req.data.desaprobados;
	}catch(e) {
		aprobados.style.color = "#f00";
		desaprobados.style.color = "#f00";
		aprobados.textContent = "La API falló";
		desaprobados.textContent = "La API falló";
	}
}
document.querySelector('.getInfo').addEventListener('click',getInfo);
