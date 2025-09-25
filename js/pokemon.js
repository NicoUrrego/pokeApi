async function Pokemon(id){

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
        const data = await res.json();

    var root = document.getElementById("root");

    let tipoPoke= "";
    for(let i=0;i < data.types.length; i++){

        tipoPoke += `<span>${data.types[i].type.name}</span>`;
    }

    root.innerHTML = `<div class="pokemon"></div>`
    


}

Pokemon(5)
Pokemon(29)