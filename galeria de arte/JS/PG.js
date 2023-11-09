const actividadElementos = document.querySelectorAll(`.ActividadBlock`);
const overlay = document.getElementById("Overlay");
const infoActividad = document.getElementById("InformacionActividad");
const slideshowContainer = infoActividad.querySelector('.ContenedorDiapositivas');					
let slideIndex = 1;

const textoActividades = {
	DetectarActividad1: '<h4>Diversión hecha a mano (Opción 1)</h4><br><p>Primero, se procedió a trazar los contornos de los peces sobre la tela y se procedió a recortarlos con precisión. Posteriormente, se les adherió un clip en la parte correspondiente. Luego, se revistió el mango de la caña con cuidado y se añadió una tira de lana. Por último, se aplicó un imán en el extremo de la tira, garantizando que posea la capacidad de atraer a los peces de manera efectiva y permita el funcionamiento adecuado de la caña de pescar.</p>',
	DetectarActividad2: '<h4>Diversión hecha a mano (Opción 2)</h4><br><p id="textact2">La actividad fue, apartir de botellas de plástico, hacer aviones de juguete. Durante la actividad les indicamos a los niños que, en una cartulina, dibujara y recortarán dos óvalos largos que servirían como alas del avión, después tomaron las botellas y les hicieron dos cortes rectos en los laterales de las botellas donde para después, meter las alas a través de ella. Ya finalizando la parte inicial, les indicamos que podrían empezar a decorar su avión de la manera que más les guste; ya sea pintando lo, decorando con recortes de tela o papel o con listones. Finalmente, con un hilo grueso, amarraron, ya sea en el cuello de la botella o atraves de las ranuras hechas anteriormente, sus avísenos para colgarlos.</p>', 
	DetectarActividad3: '<h4>RompeArte: Pintura en pedazos</h4><br><p>En esta actividad Se pintaron varios lienzos por partes con marcador, juntando todos los lienzos se forma una imagen más grande, estos lienzos se entregaron a cada estudiante para que estos realizaran el pintado en casa, esto se hizo para generar compromiso artístico, luego el lienzo fue entregado por cada estudiante para formar la imagen completa con la creatividad de cada uno.</p>',
	DetectarActividad4: '<h4>Arte en 3D: Dibujos asombrosos</h4><br><p>Esta actividad se trató de dibujos en 3D. Se le pidió a los estudiantes que trajeran colores azul y rojo, además de una hoja blanca, ya que de otro color no se vería. Los chicos eligieron una imagen de referencia para realizar el dibujo. Después se les indico que, para hacer el dibujo, tendría que dibujarlo, primero con rojo y luego con azul. Nuestro grupo trajo un par de lentes 3d, para que los chico pudieran ver el resultado de sus dibujos.</p>',
}

const imagenesActividades = {
	DetectarActividad1: ['./Assets/Act1/act1img1.png', './Assets/Act1/act1img2.png', './Assets/Act1/act1img3.png'],
	DetectarActividad2: ['./Assets/Act2/act2img1.png', './Assets/Act2/act2img2.png', './Assets/Act2/act2img3.png'],
	DetectarActividad3: ['./Assets/Act3/act3img1.png', './Assets/Act3/act3img2.png', './Assets/Act3/act3img3.png'],
	DetectarActividad4: ['./Assets/Act4/act4img1.png', './Assets/Act4/act4img2.png', './Assets/Act4/act4img3.png'],
}

actividadElementos.forEach((element, index) => {
	element.addEventListener('click', () => {
		const id = element.id
		overlay.style.display = 'block';
		infoActividad.style.display = "block";

		const texto = textoActividades[id];
		mostrarTextoEnCaja(texto);

		const imagenes = imagenesActividades[id];
		cargarImagenesEnDiapositivas(imagenes)

		showSlide(index + 1);
	});
});

function mostrarTextoEnCaja(texto){
	const cajaTexto = document.getElementById('CajaTexto');
	cajaTexto.innerHTML = texto;
}

function cargarImagenesEnDiapositivas(imagenes){
	const slides = infoActividad.querySelectorAll('.slide');
	for (let i = 0; i < slides.length; i++) {
		const img = slides[i].querySelector('img');
		img.src = imagenes[i];
	}
}

overlay.addEventListener('click', () => {
	overlay.style.display = 'none';
	infoActividad.style.display = "none";
});

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = infoActividad.querySelectorAll('.slide');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}