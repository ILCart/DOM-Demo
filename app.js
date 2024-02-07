// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById("name").addEventListener("change",(e)=>{
      let nameElement = document.getElementById("nameTag");
      nameElement.innerText = e.target.value;

    })
    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();
      
        var formData = new FormData(e.target);
        // output as an object
        formData = Object.fromEntries(formData);
        console.log(formData);
      
        // ...or iterate through the name-value pairs
        // for (var pair of formData.entries()) {
        //   console.log(pair[0] + ": " + pair[1]);
        // }
        
        let nameElement = document.getElementById("nameTag");
        let textElement = document.getElementById("info");
        nameElement.innerText = formData.name;
        textElement.innerText = formData.type;
      });
    // Log readiness to console
    console.log("Ready");
});

function processForm(form){

}