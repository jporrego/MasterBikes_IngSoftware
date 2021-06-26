document.querySelectorAll('.producto__btn').forEach(item => {
    item.addEventListener('click', añadirACarrito)
})

function añadirACarrito(e) {
    const counter = document.querySelector(".navbar_cart__counter");

    let numero = parseInt(counter.innerHTML);
    counter.innerHTML = numero + 1;
}
