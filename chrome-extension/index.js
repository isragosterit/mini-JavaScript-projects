let myLeads = []
// create variables
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// add event listener for saving links
    inputBtn.addEventListener("click", function() {
    // if input value is not empty
    if (inputEl.value.trim() !== '') {
    myLeads.push(inputEl.value)
    inputEl.value='';
    renderLeads()
    }

})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems  
    document.getElementById("input-el").reset();
}


 
 
