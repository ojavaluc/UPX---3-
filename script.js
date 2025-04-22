// Função para mostrar ou esconder os textos das ideias
function toggleVisibility(id) {
    // Obtém o elemento de texto associado ao balão
    var textElement = document.getElementById(id);
    
    // Verifica se o texto está visível ou não
    if (textElement.style.display === "block") {
        // Se estiver visível, esconde o texto
        textElement.style.display = "none";
    } else {
        // Se não estiver visível, esconde todos os outros textos
        var allTexts = document.querySelectorAll('.text-idea');
        allTexts.forEach(function (text) {
            text.style.display = 'none';
        });
        
        // Exibe o texto associado ao balão clicado
        textElement.style.display = "block";
    }
}
