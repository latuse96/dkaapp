$(function() {
    if(sessionStorage.cwKg == undefined) {
        infoPrompt("Please enter the patient's weight");
    } else {
        populateTable(); 
    }

    $("#saveInfo").click(function() {
        if(sessionStorage.cwKg == undefined) {
            infoPrompt("Please enter the patient's weight");
        }
    })
})