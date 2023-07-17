let contenedor_poke = document.querySelector("#contenedor-pokemon");

const URL = "https://pokeapi.co/api/v2/pokemon/"

for(i = 1; i <=100; i++){
     fetch(URL + i)
        .then(resp => resp.json())
        .then(data => {cargarPokemon(data)})
}

function cargarPokemon(poke){
    let div = document.createElement("div");
    div.classList.add = "pokemon-todos";
    let tipos = poke.types;  
    let idPoke = poke.id.toString();
      
    tipos = tipos.map(t => `<p class="tipo-poke ${t.type.name}">${t.type.name}</p>`);
    tipos = tipos.join(' ');

    if (idPoke.length === 1){
       idPoke = '00'+idPoke
    }else if(idPoke.length === 2){
        idPoke = '0'+idPoke
     }


    div.innerHTML = `
    <div class="card-pokemon">
                    <p class="id-p-b">#${idPoke}</p>
                    <div class="img-poke">
                        <img src="${poke.sprites.other['official-artwork'].front_default}" alt="" class="img-pokemon">
                    </div>
                    <div class="informacion">
                        <div class="principal-info">
                            <p class="id-poke">#${idPoke}</p>
                            <h2 class="nombre-poke">#${poke.name}</h2>
                        </div>
                        <div class="tipo-info">
                            ${tipos}
                        </div>
                        <div class="stats-info">
                            <p class="stat-poke">${poke.weight}kg</p>
                            <p class="stat-poke ">${poke.height}m</p>
                        </div>
                    </div>                
                </div>
    `
    contenedor_poke.append(div);

}

const btnHeader = document.querySelectorAll(".btn-header")

let boton = btnHeader.forEach(btn => {btn.addEventListener("click", (evento) => {
    let event = evento.currentTarget.id;
    contenedor_poke.innerHTML = ''
    for(i = 1; i <=100; i++){
    fetch(URL + i)
       .then(resp => resp.json())
       .then(data => {
            let tipos = data.types.map(t => t.type.name);  
            if(event === 'ver-todos'){
                cargarPokemon(data);
            }else {
                if(tipos.includes(event)){
                    cargarPokemon(data);
                }
            }
           
       });
    }
    

}) });