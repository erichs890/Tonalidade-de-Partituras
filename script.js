const sustenidoRadio = document.querySelector("#sustenidoRadio")
const bemolRadio = document.querySelector("#bemolRadio")
const resultado = document.querySelector("#resultado")
const resultado1 = document.querySelector("#resultado1")
const sustenidos = [
    { num: 0 ,tom: "Dó maior", tomRelativo: "Lá menor", escala: "DÓ-RÉ-MI-FÁ-SOL-LÁ-SI-DÓ", escalaCifra: "C-D-E-F-G-A-B", notasSus: "Nenhuma" },
    { num: 1,tom: "Sol maior", tomRelativo: "Mi menor", escala: "SOL-LÁ-SI-DÓ-RÉ-MI-FÁ SUSTENIDO-SOL", escalaCifra: "G-A-B-C-D-E-F#-G", notasSus: "Fá" },
    { num: 2,tom: "Ré maior", tomRelativo: "Si menor", escala: "RÉ-MI-FÁ SUSTENIDO-SOL-LÁ-SI-DÓ SUSTENIDO-RÉ", escalaCifra: "D-E-F#-G-A-B-C#-D", notasSus: "Fá, Dó" },
    { num: 3,tom: "Lá maior", tomRelativo: "Fá sustenido menor", escala: "LÁ-SI-DÓ SUSTENIDO-RÉ-MI-FÁ SUSTENIDO-SOL SUSTENIDO-LÁ", escalaCifra: "A-B-C#-D-E-F#-G#-A", notasSus: "Fá, Dó, Sol" },
    { num: 4,tom: "Mi maior", tomRelativo: "Dó sustenido menor", escala: "MI-FÁ SUSTENIDO-SOL SUSTENIDO-LÁ-SI-DÓ SUSTENIDO-RÉ SUSTENIDO-MI", escalaCifra: "E-F#-G#-A-B-C#-D#-E", notasSus: "Fá, Dó, Sol, Ré" },
    { num: 5,tom: "Si maior", tomRelativo: "Sol sustenido menor", escala: "SI-DÓ SUSTENIDO-RÉ SUSTENIDO-MI-FÁ SUSTENIDO-SOL SUSTENIDO-LÁ SUSTENIDO-SI", escalaCifra: "B-C#-D#-E-F#-G#-A#-B", notasSus: "Fá, Dó, Sol, Ré, Lá" },
    { num: 6,tom: "Fá sustenido maior", tomRelativo: "Ré sustenido menor", escala: "FÁ SUSTENIDO-SOL SUSTENIDO-LÁ SUSTENIDO-SI-DÓ SUSTENIDO-RÉ SUSTENIDO-MI SUSTENIDO-FÁ SUSTENIDO", escalaCifra: "F#-G#-A#-B-C#-D#-E#-F#", notasSus: "Fá, Dó, Sol, Ré, Lá, Mi" },
    { num: 7,tom: "Dó sustenido maior", tomRelativo: "Lá sustenido menor", escala: "DÓ SUSTENIDO-RÉ SUSTENIDO-MI SUSTENIDO-FÁ SUSTENIDO-SOL SUSTENIDO-LÁ SUSTENIDO-SI SUSTENIDO-DÓ SUSTENIDO", escalaCifra: "C#-D#-E#-F#-G#-A#-B#-C#", notasSus: "Fá, Dó, Sol, Ré, Lá, Mi, Si" }
]

const bemois = [
    { num: 0, tom: "Dó maior", tomRelativo: "Lá menor", escala: "DÓ-RÉ-MI-FÁ-SOL-LÁ-SI-DÓ", escalaCifra: "C-D-E-F-G-A-B", notasBem: "Nenhuma" },
    { num: 1, tom: "Si bemol maior", tomRelativo: "Sol menor", escala: "SI-BEMOL-DÓ-MI-BEMOL-FÁ-SOL-BEMOL-LÁ-BEMOL-SI-BEMOL", escalaCifra: "Bb-C-D-Eb-F-G-Ab", notasBem: "Si" },
    { num: 2, tom: "Mi bemol maior", tomRelativo: "Dó menor", escala: "MI-BEMOL-FÁ-SOL-BEMOL-LÁ-BEMOL-SI-BEMOL-DÓ-MI-BEMOL", escalaCifra: "Eb-F-G-Ab-Bb-C-D", notasBem: "Si, Mi" },
    { num: 3, tom: "Lá bemol maior", tomRelativo: "Fá menor", escala: "LÁ-BEMOL-SI-BEMOL-DÓ-BEMOL-RÉ-BEMOL-MI-BEMOL-FÁ-BEMOL-LÁ-BEMOL", escalaCifra: "Ab-Bb-C-Db-Eb-F-G", notasBem: "Si, Mi, Lá" },
    { num: 4, tom: "Ré bemol maior", tomRelativo: "Si bemol menor", escala: "RÉ-BEMOL-MI-BEMOL-FÁ-BEMOL-SOL-BEMOL-LÁ-BEMOL-SI-BEMOL-RÉ-BEMOL", escalaCifra: "Db-Eb-F-Gb-Ab-Bb-C", notasBem: "Si, Mi, Lá, Ré" },
    { num: 5, tom: "Sol bemol maior", tomRelativo: "Mi bemol menor", escala: "SOL-BEMOL-LÁ-BEMOL-SI-BEMOL-DÓ-BEMOL-RÉ-BEMOL-MI-BEMOL-SOL-BEMOL", escalaCifra: "Gb-Ab-Bb-Cb-Db-Eb-F", notasBem: "Si, Mi, Lá, Ré, Sol" },
    { num: 6, tom: "Dó bemol maior", tomRelativo: "Lá bemol menor", escala: "DÓ-BEMOL-RÉ-BEMOL-MI-BEMOL-FÁ-BEMOL-SOL-BEMOL-LÁ-BEMOL-SI-BEMOL-DÓ-BEMOL", escalaCifra: "Db-Eb-F-Gb-Ab-Bb-C", notasBem: "Si, Mi, Lá, Ré, Sol, Dó" },
    { num: 7, tom: "Fá bemol maior", tomRelativo: "Ré bemol menor", escala: "FÁ-BEMOL-SOL-BEMOL-LÁ-BEMOL-SI-BEMOL-DÓ-BEMOL-RÉ-BEMOL-MI-BEMOL-FÁ-BEMOL", escalaCifra: "Fb-Gb-Ab-Bb-Cb-Db-Eb", notasBem: "Si, Mi, Lá, Ré, Sol, Dó, Fá" }
]


function criarInput(tipo){
    resultado1.innerHTML = ""
    
    const label = document.createElement("label")
    const input = document.createElement("input")
    if(tipo === "Sustenido"){
        label.textContent = 'Quantos sustenidos? '
        input.type = 'number'
        input.min = '0'
        input.max = '7'
        input.placeholder = 'De 0 a 7'
    } else if (tipo === "Bemol") {
        label.textContent = 'Quantos bemois? '
        input.type = 'number'
        input.min = '0'
        input.max = '7'
        input.placeholder = 'De 0 a 7'
    }
    resultado1.appendChild(label)
    resultado1.appendChild(input)

    input.addEventListener("input", () => {
        const num = parseInt(input.value);
        if (!isNaN(num) && num >= 0 && num <= 7) {
            const tomSelecionado = tipo === "Sustenido" 
                ? sustenidos.find(tom => tom.num === num) 
                : bemois.find(tom => tom.num === num);
            if (tomSelecionado) {
                tipo === "Sustenido" ? exibirSus(tomSelecionado) : exibirBemol(tomSelecionado);
            }
        } else {
            resultado.innerHTML = "Por favor, insira um número válido entre 0 e 7.";
        }
    })
}

sustenidoRadio.addEventListener('change', function() {
    resultado.innerHTML = ""
    criarInput('Sustenido')
})

bemolRadio.addEventListener('change', function() {
    resultado.innerHTML = ""

    criarInput('Bemol')
})

function exibirSus(tomSelecionado){
    resultado.innerHTML = "" 
    const container = document.createElement("div")

    const tom = document.createElement("h3")
    tom.textContent = `O tom é ${tomSelecionado.tom}!`
    
    const tomRelativo = document.createElement("h4")
    tomRelativo.textContent = `O tom relativo a esse é: ${tomSelecionado.tomRelativo}`
    
    const quais = document.createElement("p")
    quais.textContent = `Essas são as notas sustenidas: ${tomSelecionado.notasSus}`
    
    const escala = document.createElement("p")
    escala.textContent = `E a escala é: ${tomSelecionado.escala}`
    
    const escalaCifra = document.createElement("p")
    escalaCifra.textContent = `E a escala em cifra é: ${tomSelecionado.escalaCifra}`
    
    container.append(tom, tomRelativo, quais, escala, escalaCifra)
    resultado.appendChild(container)
}

function exibirBemol(tomSelecionado){
    resultado.innerHTML = "" 
    const container = document.createElement("div")

    const tom = document.createElement("h3")
    tom.textContent = `O tom é ${tomSelecionado.tom}!`
    
    const tomRelativo = document.createElement("h4")
    tomRelativo.textContent = `O tom relativo a esse é: ${tomSelecionado.tomRelativo}`
    
    const quais = document.createElement("p")
    quais.textContent = `Essas são as notas bemois: ${tomSelecionado.notasBem}`
    
    const escala = document.createElement("p")
    escala.textContent = `E a escala é: ${tomSelecionado.escala}`
    
    const escalaCifra = document.createElement("p")
    escalaCifra.textContent = `E a escala em cifra é: ${tomSelecionado.escalaCifra}`
    
    container.append(tom, tomRelativo, quais, escala, escalaCifra)
    resultado.appendChild(container)

}
