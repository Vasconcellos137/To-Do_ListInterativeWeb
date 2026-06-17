// document.getElementById
// addEventListener
// document.createElement
// appendchild

const input = document.getElementById("taskInput");
const botao = document.getElementById("addBtn");
const list = document.getElementById("taskList");


botao.addEventListener("click", function () {

    const textTask = input.value.trim();

    // Verificar se vazio
    if (textTask === "") {
        alert("Pode não, necessita-se tarefa..");
        return;
    }

    const task = document.createElement("li");

    // Remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "X";

    btnRemover.addEventListener("click", function () {
        task.remove();
    });

    const texto = document.createElement("span");
    texto.textContent = textTask;

    task.appendChild(btnRemover);
    task.appendChild(texto);

    // Marcar concluído
    task.addEventListener("click", function () {
        task.classList.toggle("concluida");
    });

    list.appendChild(task);

    input.value = "";
});

// Contador - informa quantidade de tarefas pendentes
function contarPendentes() {

    const tasks = document.querySelectorAll("#taskList li");

    let pendentes = 0;

    tasks.forEach(function (task) {
        if (!task.classList.contains("concluida")) {
            pendentes++;
        }
    });

    return pendentes;
}

const pendentesBtn = document.getElementById("pendestes");
pendentesBtn.addEventListener("click", function () {
    const pendentes = contarPendentes();
    alert(`Você possui ${pendentes} tarefas pendentes.`);
});