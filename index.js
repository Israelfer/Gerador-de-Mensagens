function gerarFrase() {
    const frase = [
    "Flamengo é campeão",
    "Náutico é campeão",
    "Sport perdeu foii???",
    "Vamos adulto Ney",
    "Vou mitar no cartola",
    "PSG vai ser campeão da Champions?",
    "O Bayer vem forte",
    "Lewa melhor do mundo?",
    ]

    let numRandom = Math.floor(Math.random()*frase.length) 

    document.getElementById("pFrase").innerHTML = `"${frase[numRandom]}"`
}

const ligar = document.getElementsByClassName("container")[0]
const buttonLigar = document.getElementsByClassName("btnNeon")[0]

function ligarNeon() {
ligar.classList.toggle("ligarNeon")
buttonLigar.classList.toggle("ligarNeon")
}