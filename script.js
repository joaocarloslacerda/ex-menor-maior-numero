function verificaMenorValor(){

    let resultado = document.getElementById("resultadoMenor");

    let valorUmMenor = Number(document.getElementById("valorUmMenor").value);
    let valorDoisMenor = Number(document.getElementById("valorDoisMenor").value);

    if(valorUmMenor < valorDoisMenor){
        resultado.innerHTML = `O menor valor é ${valorUmMenor}`;
    }
    else{
        resultado.innerHTML = `O menor valor é ${valorDoisMenor}`;
    }
    resultado.style.marginLeft = "135px";
}
function verificaMaiorValor(){
    
    let resultado = document.getElementById("resultadoMaior");

    let valorUmMaior = Number(document.getElementById("valorUmMaior").value);
    let valorDoisMaior = Number(document.getElementById("valorDoisMaior").value);

    if(valorUmMaior > valorDoisMaior){
        resultado.innerHTML = `O maior valor é ${valorUmMaior}`;
    }
    else{
        resultado.innerHTML = `O maior valor é ${valorDoisMaior}`;
    }
    resultado.style.marginLeft = "135px";
}