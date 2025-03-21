

document.getElementById("get-pokemon").addEventListener("click", async () => {
    const pokemonName = document.getElementById("pokemon-select").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; 
  
    const response = await fetch(url);
  
    if (response.ok) {
      const data = await response.json();
  
      let infoContainer = document.getElementById("pokemon-info");
  
      
      if (!infoContainer) {
        infoContainer = document.createElement("div");
        infoContainer.id = "pokemon-info";
        document.querySelector(".container").appendChild(infoContainer);
      }
  
      infoContainer.innerHTML = `
        <div>
          <h2>${data.name.toUpperCase()}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Altura: ${(data.height / 10).toFixed(1)} m</p>
          <p>Peso: ${(data.weight / 10).toFixed(1)} kg</p>
          <p>Tipo(s): ${data.types.map(t => t.type.name).join(", ")}</p>
        </div>
      `;
      infoContainer.style.textAlign = "left";
    } else {
      alert("No se pudo obtener la información del Pokémon. Intenta nuevamente.");
    }
  });