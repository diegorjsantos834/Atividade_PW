document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formIdade');
    const inputAno = document.getElementById('ano_nascimento');
    const resultadoDiv = document.querySelector('.resu');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const anoNascimento = parseInt(inputAno.value);
        const anoAtual = new Date().getFullYear();
        
        if (isNaN(anoNascimento)) {
            resultadoDiv.innerHTML = '<p>Por favor, digite um ano válido!</p>';
            return;
        }
        
        if (anoNascimento > anoAtual) {
            resultadoDiv.innerHTML = '<p>Ano de nascimento não pode ser maior que o ano atual!</p>';
            return;
        }
        
        if (anoNascimento < 1900) {
            resultadoDiv.innerHTML = '<p>Por favor, digite um ano a partir de 1900!</p>';
            return;
        }
        
        const idade = anoAtual - anoNascimento;
        resultadoDiv.innerHTML = `<p>Sua idade é: <strong>${idade} anos</strong></p>`;
        
        inputAno.value = '';
        inputAno.focus();
    });
});