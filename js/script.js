



class character {

   constructor(Nombre, Especie, Imagen) {
    this.Nombre = Nombre;
    this.Especie = Especie;
    this.Imagen = Imagen;
    }
    get informacion() {
    
        let arreglo = [this.Nombre, this.Especie, this.Imagen];
        return arreglo;

    }
}

function show(informacion) {

    
    let id = document.getElementById("personajes");
    id.innerHTML += ` <div class="cartas">
        <img class="imagen" width="100%" src="${informacion[2]}" />
        <h3 class="nombre">${informacion[0]}</h3>
        <p class="especie">${informacion[1]}</p>
    </div>`;

}


async function getPersonajesrick() {

    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json();
    let Persona = data.results;
    
    Persona.map((person) => {
        let personaje = new character(person.name, person.species, person.image);
        show(personaje.informacion);

    });
}

getPersonajesrick();
