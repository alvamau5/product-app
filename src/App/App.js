import { Product } from "./Product.js";
import { UI } from "./UI.js";

/**
 * Eventos del DOM
 */

document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    //Obteniendo Valores del Form
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    //Crear un nuevo Objeto de Producto
    const product = new Product(name, price, year);

    //Crear una nueva Instancia del UI
    const ui = new UI();

    //Mensaje de completar formulario
    if (name === "" || price === "" || year === "") {
      return ui.showMessage("Completa los campos", "danger");
    }

    //Guardando un Producto
    ui.addProduct(product);
    ui.showMessage("Producto Agregado", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleProduct(e.target);
  e.preventDefault();
});
