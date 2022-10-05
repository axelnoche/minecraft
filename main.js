var lienzo = new fabric.Canvas('miLienzo');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var objeto_jugador= "";
var bloque_objeto_imagen= "";

function actualización_jugador()
{
	fabric.Image.fromURL("jugador.png", function(Img) {
	objeto_jugador = Img;
	objeto_jugador.scaleToWidth(150);
	objeto_jugador.scaleToHeight(140);
	objeto_jugador.set({top:player_y,left:player_x});
	lienzo.add(objeto_jugador);
	});
}

function nueva_imagen(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	bloque_objeto_imagen = Img;
	bloque_objeto_imagen.scaleToWidth(block_image_width);
	bloque_objeto_imagen.scaleToHeight(block_image_height);
	bloque_objeto_imagen.set({top:player_y,left:player_x});
	lienzo.add(bloque_objeto_imagen);
	});

}



// Agrega un evento listener y llama la función requerida
window.addEventListener("keydown", mi_teclapulsada);

// Define la función mi_TeclaPulsada
function mi_teclapulsada(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == "80"){
	console.log("p y shift precionadas juntas");
	block_image_width = block_image_width + 10;
	block_image_he = block_image_height + 10;
	document.getElementById("anchura_actual").innerHTML =block_image_width;
	document.getElementById("altura_actual").innerHTML =block_image_height;
}
if(e.shiftKey == true && keyPressed == "77"){
	console.log("m y shift precionadas juntas");
	block_image_width = block_image_width - 10;
	block_image_he = block_image_height - 10;
	document.getElementById("anchura_actual").innerHTML =block_image_width;
	document.getElementById("altura_actual").innerHTML =block_image_height;

}
if(keyPressed == "38"){
	arriba();
	console.log("arriba")
}
if(keyPressed == "40"){
	abajo();
	console.log("abajo")
}
if(keyPressed == "37"){
	izquierda();
	console.log("izquierda")
}
if(keyPressed == "39"){
	derecha();
	console.log("derecha")
}
if(keyPressed == "87"){
	nueva_imagen("muro.jpg");
	console.log("w");
	
}
if(keyPressed == "71"){
	nueva_imagen("tierra.png");
	console.log("g");
	
}
if(keyPressed == "76"){
	nueva_imagen("verde_claro.png");
	console.log("l");
	
}
if(keyPressed == "87"){
	nueva_imagen("muro.jpg");
	console.log("w");
	
}
if(keyPressed == "84"){
	nueva_imagen("tronco.jpg");
	console.log("t");
	
}
if(keyPressed == "82"){
	nueva_imagen("techo.jpg");
	console.log("r");
	
}
if(keyPressed == "89"){
	nueva_imagen("muro_amarillo.png");
	console.log("y");
	
}
if(keyPressed == "68"){
	nueva_imagen("verde_oscuro.png");
	console.log("d");
	
}
if(keyPressed == "85"){
	nueva_imagen("unico.png");
	console.log("u");
	
}
if(keyPressed == "67"){
	nueva_imagen("nube.jpg");
	console.log("c");
	
}
}



// Verifica si las teclas SHIFT y P son presionadas juntas








// Verifica si las teclas SHIFT y M son presionadas juntas








    // Verifica si el valor de la tecla es igual al del valor de la tecla de flecha ARRIBA 38

	



	// Verifica si el valor de la tecla es igual al del valor de la tecla de flecha ABAJO 40
	
	



	// Verifica si el valor de la tecla es igual al del valor de la tecla de flecha IZQUIERDA 37
	




	// Verifica si el valor de la tecla es igual al del valor de la tecla de flecha DERECHA 39
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'W' 87
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'G' 71
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'L' 76
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'T' 84
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'R' 82
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'Y' 89
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'D' 68
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'U' 85
	




	// Verifica si el valor de la tecla es igual al valor de la tecla 'C' 67
	




// Función para mover al jugador hacia arriba cuando la tecla de la flecha hacia ARRIBA es presionada.
function arriba()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura de imagen del bloque = " + block_image_height);
		console.log("Cuando la tecla hacia arriba es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		actualización_jugador
	}
}
// Función para mover al jugador hacia abajo cuando la tecla de la flecha hacia ABAJO es presionada.
function abajo()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura de imagen del bloque = " + block_image_height);
		console.log("Cuando la tecla hacia abajo es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		actualización_jugador
	}
}
// Función para mover al jugador hacia la izquierda cuando la tecla de la flecha IZQUIERDA es presionada.
function izquierda()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("altura de imagen del bloque = " + block_image_width);
		console.log("Cuando la tecla hacia la izquierda es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		actualización_jugador
	}
}
// Función para mover al jugador hacia la derecha cuando la tecla de la flecha DERECHA es presionada.
function derecha()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("altura de imagen del bloque = " + block_image_width);
		console.log("Cuando la tecla hacia la derecha es presionada, X =  " + player_x + " , Y = "+player_y);
		lienzo.remove(objeto_jugador);
		actualización_jugador
	}
}
