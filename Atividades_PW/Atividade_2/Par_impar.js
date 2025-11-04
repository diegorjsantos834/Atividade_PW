document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formPar_Impar');
    const inputNumero = document.getElementById('Par_Impar');
    
    // Criar div para resultado se não existir
    let resultadoDiv = document.querySelector('.resu');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.className = 'resu';
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const numero = parseInt(inputNumero.value);
        
        if (isNaN(numero)) {
            resultadoDiv.innerHTML = '<p>Por favor, digite um número válido!</p>';
            return;
        }
        
        if (numero % 2 === 0) {
            resultadoDiv.innerHTML = `<p>O número ${numero} é <strong>PAR</strong>!</p>`;
        } else {
            resultadoDiv.innerHTML = `<p>O número ${numero} é <strong>ÍMPAR</strong>!</p>`;
        }
        
        inputNumero.value = '';
        inputNumero.focus();
    });
});