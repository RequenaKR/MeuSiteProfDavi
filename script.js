// FILMES
let filmes = [

    {
    titulo: "Harry Potter",
    imagem: "Harry_Potter_Pedra_Filosofal_2001.jpg",
    descricao: "Narra a jornada de um jovem órfão que descobre, aos 11 anos, ser um bruxo famoso por ter sobrevivido a um ataque do terrível Lord Voldemort quando era bebê."
    }
    
    ];
    
    // SÉRIES
    let series = [
    
    {
    titulo: "Peaky Blinders",
    imagem: "PB.jpg",
    descricao: "É um drama de época aclamado pela crítica que narra a ascensão da família gângster Shelby em Birmingham, Inglaterra, logo após a Primeira Guerra Mundial."
    }

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaSeries = document.getElementById("listaSeries");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    series.forEach(function(s){
    
    listaSeries.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();