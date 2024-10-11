function likeTestimonial(element) {
    let likeCountElement = element.querySelector('.like-total');
    let currentLikes = parseInt(likeCountElement.textContent);
    if(currentLikes === 0){
        likeCountElement.textContent = currentLikes + 1; // Incrementar contador
    }
    
}

const testimoniosCont = document.getElementById("testimonio-container");


function generarTestimonios (){
    testimonios.forEach(testimonio => {
        const testimonioDiv = document.createElement("div");
        testimonioDiv.classList.add("testimonio");

        const imagen = document.createElement("img");
        imagen.src=testimonio.imagen;
        imagen.alt= `Viajero ${testimonio.nombre}`;
        imagen.width =200;
        imagen.height=200;

        const parrafo = document.createElement("p");
        parrafo.textContent = `${testimonio.descripcion}`;

        //Añadir imagen y comentario
        testimonioDiv.appendChild(imagen);
        testimonioDiv.appendChild(parrafo);
 

        testimoniosCont.appendChild(testimonioDiv);

    } );
  
}

window.onload = generarTestimonios;



const testimonios = [
            {nombre:"Santiago",fecha: "26 de septiembre de 2024",descripcion: "Muy buena le experiencia", imagen: "/testimonios/human1.avif"},
            {nombre: "Juli", fecha: "30 de septiembre de 2024", descripcion: "Soacha es el municipio más poblado del departamento de Cundinamarca en Colombia. Su área es de 184 km², y su población es de 808 288.​ Su área urbana está conurbada con la de Bogotá. Ingresó a la Región Metropolitana de Bogotá el 29 de abril de 2024.", imagen: "/testimonios/human2.avif"},
            {nombre: "messi", fecha: "2 de ocubre de 2030", descripcion: "Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago. Los karts y los juegos mecánicos están entre las atracciones del parque de diversiones Multiparque, y el espacio verde Mirador de los Nevados ofrece una vista panorámica de la ciudad y la montaña.", imagen: "/testimonios/human3.avif"},
            {nombre: "Ronaldo", fecha: "2 de ocubre de 2030", descripcion: "Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago. Los karts y los juegos mecánicos están entre las atracciones del parque de diversiones Multiparque, y el espacio verde Mirador de los Nevados ofrece una vista panorámica de la ciudad y la montaña.", imagen: "/testimonios/human4.avif"},
            {nombre: "El pibe", fecha: "2 de ocubre de 2030", descripcion: "Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago. Los karts y los juegos mecánicos están entre las atracciones del parque de diversiones Multiparque, y el espacio verde Mirador de los Nevados ofrece una vista panorámica de la ciudad y la montaña.", imagen: "/testimonios/human5.avif"},
            {nombre: "Lucas", fecha: "2 de ocubre de 2030", descripcion: "Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago. Los karts y los juegos mecánicos están entre las atracciones del parque de diversiones Multiparque, y el espacio verde Mirador de los Nevados ofrece una vista panorámica de la ciudad y la montaña.", imagen: "/testimonios/human6.avif"},
            {nombre: "Superman", fecha: "2 de ocubre de 2056", descripcion: "Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago. Los karts y los juegos mecánicos están entre las atracciones del parque de diversiones Multiparque, y el espacio verde Mirador de los Nevados ofrece una vista panorámica de la ciudad y la montaña.", imagen: "/testimonios/human7.png"},
            {nombre: "Hulk", fecha: "2 de ocubre de 2031", descripcion: "Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago. Los karts y los juegos mecánicos están entre las atracciones del parque de diversiones Multiparque, y el espacio verde Mirador de los Nevados ofrece una vista panorámica de la ciudad y la montaña.", imagen: "/testimonios/human7.png"},
            {nombre: "Iron man", fecha: "2 de ocubre de 2060", descripcion: "Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago. Los karts y los juegos mecánicos están entre las atracciones del parque de diversiones Multiparque, y el espacio verde Mirador de los Nevados ofrece una vista panorámica de la ciudad y la montaña.", imagen: "/testimonios/human7.png"},
            {nombre: "Hercules", fecha: "2 de ocubre de 1990", descripcion: "Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago. Los karts y los juegos mecánicos están entre las atracciones del parque de diversiones Multiparque, y el espacio verde Mirador de los Nevados ofrece una vista panorámica de la ciudad y la montaña.", imagen: "/testimonios/human7.png"},
]
    

