(()=>{"use strict";class e{constructor(e,t,n){this.name=e,this.price=t,this.year=n}}class t{addProduct(e){const t=document.getElementById("product-list"),n=document.createElement("div");n.innerHTML=`\n            <div class="card text-center mb-4">\n                <div class="card-body">\n                    <strong>Product Name</strong>: ${e.name}\n                    <strong>Product Price</strong>: ${e.price}\n                    <strong>Product Year</strong>: ${e.year}\n                    <a href="#" class="btn btn-danger" name="delete">Delete</a>\n                </div>\n            </div>\n       `,t.appendChild(n)}resetForm(){document.getElementById("product-form").reset()}deleProduct(e){"delete"===e.name&&(e.parentElement.parentElement.parentElement.remove(),this.showMessage("Producto Eliminado","danger"))}showMessage(e,t){const n=document.createElement("div");n.className=`alert alert-${t} mt-4`,n.appendChild(document.createTextNode(e));const r=document.querySelector(".container"),o=document.querySelector("#App");r.insertBefore(n,o),setTimeout((function(){document.querySelector(".alert").remove()}),2e3)}}document.getElementById("product-form").addEventListener("submit",(function(n){n.preventDefault();const r=document.getElementById("name").value,o=document.getElementById("price").value,d=document.getElementById("year").value,c=new e(r,o,d),s=new t;if(""===r||""===o||""===d)return s.showMessage("Completa los campos","danger");s.addProduct(c),s.showMessage("Producto Agregado","success"),s.resetForm()})),document.getElementById("product-list").addEventListener("click",(e=>{(new t).deleProduct(e.target),e.preventDefault()}))})();