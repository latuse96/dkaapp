$(function() {
    if(sessionStorage.bwKg == undefined) {
        infoPrompt("Please enter the patient's weight");
    } else {
        populateTable(); 
    }
})