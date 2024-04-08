// Selecionando elemento por ID
var elementoPorId = document.getElementById("elementoPorId");
elementoPorId.innerHTML = "Elemento selecionado por ID";

// Selecionando elementos por classe
var elementosPorClasse = document.getElementsByClassName("elementoPorClasse");
for (var i = 0; i < elementosPorClasse.length; i++) {
    elementosPorClasse[i].innerHTML = "Elemento selecionado por Classe";
}

// Selecionando elementos por tag
var elementosPorTag = document.getElementsByTagName("li");
for (var i = 0; i < elementosPorTag.length; i++) {
    elementosPorTag[i].innerHTML = "Elemento selecionado por Tag";
}

// Criando um novo elemento HTML
var novoElemento = document.createElement("p");
novoElemento.innerHTML = "Novo Elemento Criado";
document.getElementById("novoElemento").appendChild(novoElemento);

// ---------------------------------------- //

// getElementById
function normal() {
    var element_text = document.getElementById("text");
    element_text.style.fontWeight = "normal";
}

function negrito() {
    var element_text = document.getElementById("text");
    element_text.style.fontWeight = "bold";
}

// getElementsByClassName
function mostrar_destacados() {
    var elementos_destaque = document.getElementsByClassName("destaque");

    for (var i = 0; i < elementos_destaque.length; i++) {
            elementos_destaque[i].innerHTML += " - Este parágrafo usa a class destaque!";
    }
} 

// getElementsByTagName
function revelar() {
    var numelementos = document.getElementsByTagName("p");

    var resultadocalculo = document.getElementById("resultadocalculo");
    resultadocalculo.innerHTML = `${numelementos.length}`;
}

// createElement
function inserir_html() {
    var nova_div = document.createElement("div");

    var conteudo = document.createTextNode("Olá, e seja bem vindo!");

    nova_div.appendChild(conteudo);

    var div_atual = document.getElementById("div1");

    document.body.insertBefore(nova_div, div_atual);
    nova_div.style.bottom = "1000px";
}
