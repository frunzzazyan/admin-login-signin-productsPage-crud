const closeBtn = document.querySelector(".cart")

closeBtn.addEventListener("click", (e)=>{
    if(e.target.localName === "h1"){
       fetch(`/cart/${e.target.dataset.n}`, {
        method : "DELETE"
       })

       location.pathname = "/cart"
    }
})