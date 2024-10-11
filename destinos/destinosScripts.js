// Obtener todos los elementos de destino
const destinationItems = document.querySelectorAll('.destination-item');

// Función para manejar el clic en un destino
function handleDestinationClick(event) {
    const destinationName = event.currentTarget.querySelector('.destination-name').textContent;
    alert(`¡Has hecho clic en ${destinationName}!`);
}

// Añadir un evento 'click' a cada destino
destinationItems.forEach(item => {
    item.addEventListener('click', handleDestinationClick);
});

// Cambio de color al pasar el mouse sobre h3 (títulos de los destinos)
const destinationNames = document.querySelectorAll('.destination-name');

destinationNames.forEach(name => {
    name.addEventListener('mouseover', function() {
        name.style.color = 'blue'; // Cambia el color al pasar el mouse
    });

    name.addEventListener('mouseout', function() {
        name.style.color = ''; // Restaura el color original cuando el mouse se va
    });
});