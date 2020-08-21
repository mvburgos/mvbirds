// 1. neceitamos las imágenes, un listado de imágenes.
var bannerImages = [
    'banner-images/01_General.jpg',
    'banner-images/03_Doliornis.jpg',
    'banner-images/04_Coeligena.jpg',
];

// 2. definir la posición inicial del banner = 0
var initialPos = 0;

// 3. al hacer click en una flechita necesito avanzar o retroceder en las posiciones de mi listado
function changeImage(direction) {
    // 1. en qué posicion está actualmente
    var pos = ;

    // 2. saber si es avanzar o retroceder
    if (direction == 'advance') {

    }

    if (direction == 'back') {

    }

    // necesitamos saber si es el final o el principio del listado

    initialPos = pos;

    // 4. asignar la imagen al banner
    // 3. cambiar la imágen
    return bannerImages[pos];
}


