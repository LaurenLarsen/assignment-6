// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(800, 700);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(300, 100);

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

    document.getElementById('cancel').addEventListener('click', () => {
        window.close();
    });
   

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

    document.getElementById('submit').addEventListener('click', () => {
     
       window.close();
        
   });
  

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

    let id = document.getElementById("id");
    let name = document.getElementById("name");
    let ext = document.getElementById("extension");
    let email = document.getElementById("email");
    let department = document.getElementById("department");
    
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

   
document.getElementById('submit').addEventListener('click', () => {
    let output = window.opener.document.getElementById("loginDetails");

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
    
    output.innerHTML = 'ID: ' + id.value + "<br>"
                    + 'Name: ' + name.value + "<br>"
                    + 'Extension: ' + ext.value + "<br>"
                    + 'Email: ' + email.value + "<br>"
                    + 'Department: ' + department.value+ "<br>";
   
    });
    

// CLOSE THE POPUP


// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

});