//when user clicks save button, task will be saved.
function saveFunction() {
  //if input field is empty, do not save
  if (input.value != 0) {
    const list = document.createElement("li");
    list.innerText = document.getElementById("input").value;
    document.body.appendChild(list);
    //delete input field when user clicks save button
    document.getElementById("input").value = "";
    //add delete button
    let btn = document.createElement("button");
    btn.innerHTML = "delete";
    //delete selected item
    btn.addEventListener("click", function () {
      list.remove();
      btn.remove();
    });
    document.body.appendChild(btn);
  }
}
