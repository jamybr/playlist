function Verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;

    if(!user || !senha){
        alert("Campos de preenchimento obrigatório. Favor preencher!");
    } else{
        window.location.href = "lista.html";
    }
}

var dadosLista = [];
var dadosArt = [];
function salvarUser(){

    let nomeMusica = document.getElementById("nomeMusica").value;
    let nomeArt = document.getElementById("nomeArt").value;
    

    if(nomeMusica && nomeArt){
        dadosLista.push(nomeMusica);
        dadosArt.push(nomeArt);
        
        criaLista();
        document.getElementById('nomeMusica').value = '';
        document.getElementById('nomeArt').value = '';
      //  console.log(dadosLista)
    }else{
        alert("Campos de preenchimento obrigatórios");
        document.getElementById("nomeMusica").focus();
    }
}

function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Música</th><th>Artista</th><th>Ações</th></tr>";

    for(let i=0; i<= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + dadosArt[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

function excluir(i) {
    dadosLista.splice((i-1), 1);
    dadosArt.splice((i-1), 1);
    document.getElementById("tabela").deleteRow(i);
};

function editar(i) {
    document.getElementById("nomeMusica").value = dadosLista[(i-1)];
    document.getElementById("nomeArt").value = dadosArt[(i-1)];
    dadosLista.splice(dadosLista[(i-1), 1]);
    dadosArt.splice(dadosArt[(i-1), 1]);
}
