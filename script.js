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

    task.textContent = textTask;

    // Remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "X";

    btnRemover.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(btnRemover);

    // Marcar concluído
    task.addEventListener("click", function () {
        task.classList.toggle("concluida");
    });

    list.appendChild(task);

    input.value = " ";
});

