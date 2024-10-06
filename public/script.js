const addCart = document.querySelector(".products")

addCart.addEventListener("click", (e)=>{
    if(e.target.localName === "button"){
        fetch("/cart", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({id : e.target.dataset.n})
        })
    }
})

