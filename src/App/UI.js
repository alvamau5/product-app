/**
 * Clase de Interfaz de Usuario
 */

// clase de interaccion con el intefaz (agregado y borrado de elementos)
export class UI {
  //Agregar un nuevo producto
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
       `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage("Producto Eliminado", "danger");
    }
  }

  showMessage(menssage, ccsClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${ccsClass} mt-4`;
    div.appendChild(document.createTextNode(menssage));

    //Mostrando en el DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    //Mostrar Mensaje en la UI
    container.insertBefore(div, app);

    //Remover Mensaje despues de 3 segundos
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
  }
}
