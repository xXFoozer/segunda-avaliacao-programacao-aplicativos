novoCarro = [];
function adicionarTarefa() {
    const inputMV = document.getElementById("carroMV");
    console.log(inputMV); 
    const inputCV = document.getElementById("carroCV");
    console.log(inputCV)
    const inputAV = document.getElementById("carroAV");
    console.log(inputAV)

    const inputPV = document.getElementById("carroPV");
    const inputFV = document.getElementById("carroFV");
    
    const tarefaTextoMV = inputMV.value.trim();
    const tarefaTextoCV = inputCV.value.trim();
    const tarefaTextoAV = inputAV.value.trim();
    const tarefaTextoPV = inputPV.value.trim();
    const tarefaTextoFV = inputFV.value.trim();

    if (tarefaTextoMV === '' || tarefaTextoCV === '' || tarefaTextoAV === '' || tarefaTextoPV === '' || tarefaTextoFV === '') {
        alert("ITEM VAZIO! PREENCHA O CAMPO E TENTE NOVAMENTE.");
        return;
    }

    const vendido = document.getElementById("carroVendido").checked;

    const novaTarefa = {
        id: Math.floor(Math.random() * 1000000),
        text: `${tarefaTextoMV}, ${tarefaTextoCV}, ${tarefaTextoAV}, ${tarefaTextoPV}, ${tarefaTextoFV}`,
        completed: vendido,
        image: tarefaTextoFV,
    };

    novoCarro.push(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(novoCarro));
    render();
    
    inputMV.value = "";
    inputCV.value = "";
    inputAV.value = "";
    inputPV.value = "";
    inputFV.value = "";
}

function render() {
    const listaTarefas = document.getElementById("lista-tarefa");
    listaTarefas.innerHTML = "";

    for (var i = 0; i < novoCarro.length; i++) {
        const li = document.createElement("li");
        if (novoCarro[i].completed) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = novoCarro[i].text;

        const img = document.createElement("img");
        img.src = novoCarro[i].image; 
        img.style.width = "50px"; 
        img.style.marginRight = "10px"; 

        const concluir = document.createElement("span");
        concluir.textContent = "task_alt";
        concluir.classList.add("check", "material-symbols-outlined");
        concluir.setAttribute("onclick", `trocaConcluir(${novoCarro[i].id})`);

        const edit = document.createElement("span");
        edit.textContent = "edit_note";
        edit.classList.add("edit", "material-symbols-outlined");
        edit.setAttribute("onclick", `editarTarefa(${novoCarro[i].id})`);

        const deletar = document.createElement("span");
        deletar.textContent = "delete";
        deletar.classList.add("delete", "material-symbols-outlined");
        deletar.setAttribute("onclick", `deletarTarefa(${novoCarro[i].id})`);

        const div = document.createElement("div");
        div.style.display = 'flex';
        div.style.marginTop = '2px';
        
        div.appendChild(concluir);
        div.appendChild(edit);
        div.appendChild(deletar);

        li.appendChild(span);
        li.appendChild(img); 
        li.appendChild(div);

        listaTarefas.appendChild(li);
    }
}