const tiposCurso =["Bacharelado", "Tecnologo", "Licenciatura"]

// receber e enviar dados para local storage 

const getLocalStorage =() => JSON.parse(localStorage.getItem("bdCurso")) ?? []
const setLocalStorage = (dbCurso) =>localStorage.setItem("bdCurso", JSON.stringify(dbCurso))


const criarCurso = (curso) => {
    const dbCurso = getLocalStorage()
    dbCurso.push (curso)
    setLocalStorage(dbCurso)

}


const deleteCurso =(index) => {
    const dbCurso = getLocalStorage() 
    dbCurso.splice(index,1)
    setLocalStorage(dbCurso)
}


document.querySelector("#form").addEventListener("submit",salvarCurso);


function salvarCurso() { 
    const newCurso = {
        nomeCurso: document.querySelector("#nomeCurso").value,
        dataCriacao: document.querySelector("#dataCriacao").value,
        tipo: tiposCurso[document.querySelector("select").value],
        ead: document.querySelector("#radioForm").checked,
        id: 1,
    }
    criarCurso(newCurso)
    updateTable()
}

 let cont = 0;

function createRow(curso) {
    const newRow = document.createElement("tr")
        newRow.innerHTML = `
        <td>${curso.nomeCurso}</td>
        <td>${curso.dataCriacao}</td>
        <td>${curso.tipo}</td>
        <td>${curso.ead}</td>
        <td>${curso.id + cont }</td>
        ` 
    document.querySelector("#tabela").appendChild(newRow)

    cont++

}

function clearTable() {
    const rows = document.querySelectorAll("#tabela tr")
    rows.forEach(row => row.parentNode.removeChild(row))
}

function updateTable () {
    const dbCurso = getLocalStorage() 
    clearTable()
    dbCurso.forEach(createRow)
    dbCurso.forEach(createSelect)
}

// criar deletarSelect

document.querySelector("#deletarForm").addEventListener("submit",deleteCurso);

function createSelect(curso) {
    const createSelect = document.createElement("option")
        createSelect.innerHTML = `
        <option>${curso.nomeCurso} - ${curso.tipo}</option>
        ` 
    document.querySelector("#deletarSelect").appendChild(createSelect)
}


updateTable()