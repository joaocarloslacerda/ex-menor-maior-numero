function verificaMenorValor(){

    let resultado = document.getElementById("resultadoMenor");

    let valorUm = Number(document.getElementById("valorUmMenor").value);
    let valorDois = Number(document.getElementById("valorDoisMenor").value);

    if(valorUm < valorDois){
        resultado.innerHTML = `O menor valor é ${valorUm}`;
    }
    else{
        resultado.innerHTML = `O menor valor é ${valorDois}`;
    }
}
function verificaMaiorValor(){
    
    let resultado = document.getElementById("resultadoMaior");

    let valorUm = Number(document.getElementById("valorMaiorUm").value);
    let valorDois = Number(document.getElementById("valorMaiorDois").value);

    if(valorUm > valorDois){
        resultado.innerHTML = `O maior valor é ${valorUm}`;
    }
    else{
        resultado.innerHTML = `O maior valor é ${valorDois}`;
    }
}