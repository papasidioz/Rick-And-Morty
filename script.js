const container = document.getElementById("section-characters")

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data.items[0])

        
    })