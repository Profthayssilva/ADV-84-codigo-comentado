// 1. Obtenha a referência do canvas: Primeiro, obteremos a referência do canvas e a
// armazenaremos dentro da variável canvas. Qualquer que seja o conteúdo do canvas será
// armazenado na variável ctx com o método getContext e colocando canvas como um objeto.
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

// Defina width & height da imagem rover:
roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

// definiremos a coordenada x / y para a imagem do rover e armazenaremos dentro da
// variável chamada roverX em 10.
roverX = 10;
roverY = 10;

// Primeiro, definiremos a função add().
function add() {
// 	Adicionando o fundo de Marte ao canvas: Adicionaremos o código para adicionar o
// fundo de Marte ao canvas. É obrigatório que a imagem seja carregada primeiro, antes do canvas.
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	// Adicione a imagem do Rover ao canvas: Adicionaremos o código para adicionar a
	// imagem do Rover ao canvas.		
	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}

// Adicionaremos a função uploadBackground, a qual é chamada para enviar a imagem de fundo.
function uploadBackground() {
	
// 	➔ Sintaxe: ctx.drawImage(img,x,y,width,height);
// ○ ctx é a referência do desenho no canvas.
// ○ img: Essa deve ser a variável image, que deve ser definida antes da definição da
// função.
// ○ x: em qual coordenada x a imagem deve ser desenhada
// ○ y: em qual coordenada y a imagem deve ser desenhada
// ○ width da imagem
// ○ height da imagem
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

// adicionamos a função uploadrover, a qual é chamada para enviar a imagem do rover.
function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

// Controle o rover: Agora, adicionamos o código para controlar o rover.
// ■ window significa a tela inteira.
// ■ Um evento keydown é um event listener, caso qualquer tecla seja
// pressionada e a função myKeydown for executada.
window.addEventListener("keydown", myKeyDown);


// Defina a função myKeydown.
function myKeyDown(e)
{

// 	buscamos o valor da tecla pressionada.
// ○ e.keyCode obterá o valor da tecla pressionada. E, armazenaremos-a dentro de uma
// variável keyPressed.
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
}
function up()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		console.log("Quando direcional cima for pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		console.log("Quando direcional baixo for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("Quando direcional esquerda for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		console.log("Quando direcional direita for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadrover();
   }
}

	