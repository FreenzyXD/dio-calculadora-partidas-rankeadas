function calcularRankeadas() {
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    const nivel = descobreNivel(vitorias, derrotas);
    const totalPartidas = (vitorias + derrotas);
    const porcentagemVitorias = (vitorias / totalPartidas) * 100;
    const saldoDeVitorias = (vitorias - derrotas)

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
                <li>Total de Partidas: ${totalPartidas}</li>
                <li>Vitórias: ${vitorias}</li>
                <li>Derrotas: ${derrotas}</li>
                <li>Saldo de Vitorias: ${saldoDeVitorias}
                <li>Nível: ${nivel}</li>
                <li>Taxa de Vitória: ${porcentagemVitorias.toFixed(1)}%</li>
                <li>O herói tem o saldo de ${saldoDeVitorias} e está no nível ${nivel}</li>`

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
