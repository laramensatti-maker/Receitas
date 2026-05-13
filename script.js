const formulario = document.getElementById('form');
const colecao = document.getElementById('colecao');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    
    const tituloD = document.getElementById('titulo').value;
    const tempoD = document.getElementById('tempo').value;
    const modoD = document.getElementById('modo').value;
    const ingredientesD = document.getElementById('ingredientes').value;
    const imagemD = document.getElementById('link').value;

  
    const novo = {
        titulo: tituloD,
        ingredientes: ingredientesD,
        modo: modoD,
        tempo: tempoD,
        imagem: imagemD,
    };

   
    const card = `
        <div class="card">
            <h3>${novo.titulo}</h3>
            <p><strong> Tempo de Preparo: </strong>${novo.tempo}</p>
            <p><strong> Ingredientes:<br> </strong>${novo.ingredientes}</p>
            <p><strong> Modo de Preparo:<br> </strong>${novo.modo}</p>
            <img src="${novo.imagem}">
        </div>
    `;


    colecao.innerHTML+=card;
    formulario.reset();
});