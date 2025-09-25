async function Pokemon(id){

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
    const data = await res.json();

    var root = document.getElementById("root");
    root.innerHTML = `<div class="pokemon"></div>`
    data.forms[0].name
}

Pokemon(5)
Pokemon(29)