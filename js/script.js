// console.log("Script cargado correctamente.");
//Lo necesito para agregarle el evento de click
const botonMenu = document.querySelector(".hamburger");
//Lo necesito para agregarle la clase
const menu = document.querySelector("#menuPrincipal");
// const icono= botonMenu.querySelector("i");
// console.log(botonMenu);
// console.log(menu);
// console.log(icono);

botonMenu.addEventListener("click", () => {
    // console.log("Hice clic en el boton del hamburguesa");
    menu.classList.toggle("open");
})



