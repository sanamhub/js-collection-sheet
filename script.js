function addRow() {
  event.preventDefault();

  // add row skeleton
  let tbody = document.querySelector("#tbody");
  let row = tbody.insertRow(-1);
  let productName = row.insertCell(0);
  let quantity = row.insertCell(1);
  let rate = row.insertCell(2);
  let total = row.insertCell(3);
  let supplier = row.insertCell(4);
  let btn = row.insertCell(5);

  // add values in row
  productName.innerHTML = document.querySelector("#addProductName").value;
  quantity.innerHTML = document.querySelector("#addQuantity").value;
  rate.innerHTML = document.querySelector("#addRate").value;
  total.innerHTML = document.querySelector("#addTotal").value;
  supplier.innerHTML = document.querySelector("#addSupplier").value;
  btn.innerHTML =
    '<button type="button" class="btn btn-danger btn-sm pull-right" onclick="removeRow(this);">Remove</button>';

  // clear form
  document.querySelector("#addProductName").value = ""; // get from backend
  document.querySelector("#addQuantity").value = 0;
  document.querySelector("#addRate").value = 0; // get from backend
  document.querySelector("#addTotal").value = 0;
  document.querySelector("#addSupplier").value = "";

  // reset autofocus
  document.querySelector("#addProductName").focus();

  calculateAllTotal();
  getRowCount();
}

// remove button functionality
function removeRow(obj) {
  let i = obj.parentNode.parentNode.rowIndex - 1;
  document.querySelector("#tbody").deleteRow(i);
  calculateAllTotal();
  getRowCount();
}

// calc add total
function calculateTotal() {
  let quantity = document.querySelector("#addQuantity").value;
  let rate = document.querySelector("#addRate").value;
  let total = parseFloat(quantity) * parseFloat(rate);

  document.querySelector("#addTotal").value = total;
}

// calculate save total
function calculateAllTotal() {
  let table = document.querySelector("#tbody");
  let saveTotal = 0;

  for (let i = 0; i < table.rows.length; i++) {
    saveTotal = saveTotal + parseFloat(table.rows[i].cells[3].innerHTML);
  }
  document.querySelector("#saveTotal").value = saveTotal;
}

// get row count
function getRowCount() {
  let table = document.querySelector("#tbody");
  let count = table.rows.length;

  document.querySelector("#saveCount").value = count;
}

let quantity = document.querySelector("#addQuantity");
let rate = document.querySelector("#addRate");

quantity.addEventListener("keyup", calculateTotal);
rate.addEventListener("keyup", calculateTotal);
  