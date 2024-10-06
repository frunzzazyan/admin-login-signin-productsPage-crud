
const addBtn = document.querySelector(".btn-add")
const deleteBtn = document.querySelector(".btn-delete")
const idInput = document.querySelector(".input-delete")


addBtn.addEventListener("click", ()=>{
    location.pathname = "/"
})

let id = ''

idInput.addEventListener("input",(e)=>{
    id = e.target.value
})
console.log(deleteBtn)
deleteBtn.addEventListener("click", ()=>{
    fetch(`/admin/${id}`, {
        method : "DELETE"
    })
    location.pathname = "/"
})