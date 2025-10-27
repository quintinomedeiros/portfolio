// Consumo dos dados do json no github

async function fetchProfileData (){
    const url = "../data/curriculo.json";
    const fetching = await fetch(url);
    return await fetching.json();
}