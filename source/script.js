const userInput = document.getElementById("user-input");
const botaoChecar = document.getElementById("check-btn");
const botaoLimpar = document.getElementById("clear-btn");
const divResultados = document.getElementById("results-div");

botaoChecar.addEventListener("click", () => {
    //Checar se o input está vazio
    if (userInput.value === ""){
        alert("Por favor insira um número de telefone");
    }
    else {
        //Construir expressão Regex:
        const codigoPais = "^(55\\s?)?";
        const codigoArea = "(\\([0-9]{2}\\)|[0-9]{2})";
        const numeroTelefone = "(?:9[0-9]{4}|[2-8][0-9]{3})[\\s\\-]?[0-9]{4}$";
        const espacosEIfens = "[\\s\\-]?";
        const telefoneRegex = new RegExp(
            `${codigoPais}${codigoArea}${espacosEIfens}${numeroTelefone}`
        );
        
        //Chamar função para mostrar resultado
        MostarResultado(telefoneRegex.test(userInput.value)); //Método test() compara o input com o regex
    }
});

botaoLimpar.addEventListener("click", () => {
    divResultados.innerHTML = "";
    divResultados.style.display = "none";
});

const MostarResultado = (numeroValido) => {
    //Cria um novo elemento "p"
    const resultado = document.createElement("p");

    divResultados.style.display = "block";

    //Muda o texto do novo elemento "p" e o adiciona ao "results-div"
    if (numeroValido)
    {
        resultado.innerText = `Telefone válido: ${userInput.value}`;
        divResultados.appendChild(resultado);
    }
    else
    {
        resultado.innerText = `Telefone inválido: ${userInput.value}`;
        divResultados.appendChild(resultado);
    }
};