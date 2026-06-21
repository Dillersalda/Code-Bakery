const btnCadastro = document.getElementById('btn-cadastro');
const modal = document.getElementById('modal-cadastro');
const fechar = document.getElementById('fechar-modal');

btnCadastro.addEventListener('click',function(){
    modal.classList.add('ativo')
});

fechar.addEventListener('click', function(){
    modal.classList.remove('ativo');
})