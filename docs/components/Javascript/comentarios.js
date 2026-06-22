const comentarios = [
    {
        texto: "O Pythonccino salvou meu deploy!",
        autor: "João Dev"
    },

    {
        texto:"Melhor Café para programar durante a madrugada!",
        autor:"Maria Front-end"
    },

    {
        texto:"O Javalatte aumentou minha produtividade!",
        autor:"Carlos Full Stack"
    },

    {
        texto:"Depois que provei uma vez, toda semana preciso do meu Cakescript",
        autor:"Soninha Back-love"
    }
];

let indice = 0;

 function trocarComentario() {

    const comentario = document.getElementById('comentario-texto');
    const autor = document.getElementById('autor-comentario')

    comentario.classList.add('esconder');
    autor.classList.add('esconder');

    setTimeout(() => {
     indice++;

    if(indice >= comentarios.length) {
        indice = 0;
    }
    

    comentario.textContent = comentarios[indice].texto;
    autor.textContent = comentarios[indice].autor;

    comentario.classList.remove('esconder');
    autor.classList.remove('esconder');

},500);
}


setInterval(trocarComentario, 4000);

