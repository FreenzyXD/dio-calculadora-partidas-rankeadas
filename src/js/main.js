document.getElementById("calcularButton").onclick = function(event) {
    event.preventDefault();
    calcularRankeadas();
}

function calcularRankeadas() {
    let dados = []

    dados["Vitórias"] = parseInt(document.getElementById('vitorias').value);
    dados["Derrotas"] = parseInt(document.getElementById('derrotas').value);
    dados["Nível"] =  descobreNivel(dados["Vitórias"], dados["Derrotas"]);
    dados["Total de Partidas"] = (dados["Vitórias"] + dados["Derrotas"]);
    dados["Porcentagem de Vitorias"] = ((dados["Vitórias"] / dados["Total de Partidas"]) * 100).toFixed(1);
    dados["Saldo de Vitorias"] = (dados["Vitórias"] - dados["Derrotas"]);

    let resultado = document.getElementById('resultado');
    let html = ""
    
    for (let dado in dados) {
        html += `<li>${dado}: ${dados[dado]}</li>`;
    }

    resultado.innerHTML = html;
}

function descobreNivel(vitorias, derrotas) {
    let nivel = false;
    const totalVitorias = (vitorias - derrotas)

    switch (!isNaN(totalVitorias)) {
        case totalVitorias > 100:
            nivel = "Imortal"
            break;
        case totalVitorias > 90:
            nivel = "Lendário"
            break;
        case totalVitorias > 80:
            nivel = "Diamante"
            break;
        case totalVitorias > 50:
            nivel = "Ouro"
            break;
        case totalVitorias > 20:
            nivel = "Prata"
            break;
        case totalVitorias > 10:
            nivel = "Bronze"
            break;
        case totalVitorias <= 10:
            nivel = "Ferro"
            break;
    }

    return nivel;
}
