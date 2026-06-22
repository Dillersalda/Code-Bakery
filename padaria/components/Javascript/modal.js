const btnCadastro = document.getElementById('btn-cadastro');
const modal = document.getElementById('modal-cadastro');
const fechar = document.getElementById('fechar-modal');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnCriarConta = document.querySelector('.btn-criar-conta');
const mensagemErro = document.getElementById('mensagem-erro');


btnCadastro.addEventListener('click',function(){
    modal.classList.add('ativo')
});

fechar.addEventListener('click', function(){
    modal.classList.remove('ativo');
});

btnCriarConta.addEventListener('click', () => {

    if(nome.value === ""){
        mensagemErro.textContent = 'Insira um nome.';
        return;
    }

    if(email.value === ""){
        mensagemErro.textContent = 'insira um email.';
        return;
    }

    if(senha.value === ""){
        mensagemErro.textContent = 'Insira uma senha';
        return;
    }

    mensagemErro.textContent = 'Conta Criada com Sucesso';
}); 