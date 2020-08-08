// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener("click", cloneField)

// Executar uma ação
function cloneField () {
//     Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //no JS vamos sempre utilizar o node para nos referirmos a elementos html

//      pegar os campos. que camposs??
    const fields = newFieldContainer.querySelectorAll("input")

//      para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })

//     Colocar na página: onde??
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
