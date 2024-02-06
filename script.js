vagas = [
    {
        titulo: "Engenheiro de Software",
        periodo: "10 meses",
        salario: "R$ 3.000,00 reais",
        horario: "10:00 - 15:00",
        dias: "Segunda a Sexta"
    },
    {
        titulo: "Analista de Sistemas",
        periodo: "9 meses",
        salario: "R$ 2.000,00 reais",
        horario: "09:00 - 14:00",
        dias: "Segunda a Sexta"
    },
    {
        titulo: "Segurança da Informação",
        periodo: "24 meses",
        salario: "R$ 4.000,00 reais",
        horario: "09:00 - 15:00",
        dias: "Segunda a Sexta"
    },
    {
        titulo: "Engenheiro da computação",
        periodo: "12 meses",
        salario: "R$ 2.600,00 reais",
        horario: "11:00 - 16:00",
        dias: "Segunda a Sexta"
    },
]

const main = document.getElementById("main")

let totalDeVagas = vagas.length

for (i = 0; i < totalDeVagas; i++){
    main.innerHTML += `
    <div id="vagaId${i}" class="vagas">
    <h3>
    ${vagas[i]["titulo"]}
    </h3>     
    periodo: ${vagas[i]["periodo"]}<br>
    salario: ${vagas[i]["salario"]}<br>
    horario: ${vagas[i]["horario"]}<br>
    dias: ${vagas[i]["dias"]}<br>
    <button>Candidatar-se</button>
    </div>
    `
}

const add = document.getElementById("add")

add.addEventListener('click', adicionar)

function adicionar(){
    titulo = prompt("Titulo: ")
    periodo = prompt("Periodo: ")
    salario = prompt("Salario: ")
    horario = prompt("Horario: ")
    dias = prompt("Dias: ")
    
    main.innerHTML += `
    <div id="vagaId${i}" class="vagas">
    <h3>
    ${titulo}
    </h3>     
    periodo: ${periodo}<br>
    salario: ${salario}<br>
    horario: ${horario}<br>
    dias: ${dias}<br>
    <button>Candidatar-se</button>
    </div>
    `
}