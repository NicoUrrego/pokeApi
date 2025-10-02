async function Pokemon(parametro){
    
    var root = document.getElementById("root");
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
        const data = await res.json();

        let tipoPoke = "";
        for (let i = 0; i < data.types.length; i++) {
            tipoPoke += `<span>${data.types[i].type.name}</span> `;
        }
        const pokemon = `
    <section class="c-pokemon">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" height="120" width="auto">
        <p>Nombre: ${data.name}</p>
        <p>Data: ${data.id}</p>
        <p>Tipo: ${tipoPoke}</p>
        <p>Altura: ${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
        <p>hp: ${data.stats[0].base_stat}</p>
        <p>Velocidad: ${data.stats[5].base_stat}</p>
        <p>Ataque: ${data.stats[1].base_stat} Defensa: ${data.stats[2].base_stat}</p>
        <p>Ataque Especial: ${data.stats[3].base_stat} Defensa Especial: ${data.stats[4].base_stat}</p>

    </section>
    `;

    root.innerHTML = pokemon;
}
