let open= document.getElementsByClassName("open");
let modal_container = document.getElementById("modal-container");

function clickModal (parametro){
    if (parametro == "contacto"){
        let modal_container = document.getElementById("modal-container");
        modal_container.classList.add("show");
    }
    if (parametro == "quienes"){
        let modal_container = document.getElementById("modal-container");
        modal_container.classList.add("show");
    }
}

let close= document.getElementById("close");
close.addEventListener("click", ()=>  {
    console.log("pruebaa")
    let modal_container = document.getElementById("modal-container");
   
    modal_container.classList.remove("show"); }
)
   



