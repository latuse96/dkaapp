$(function() {
    if(sessionStorage.cwKg === undefined || sessionStorage.cwKg === "" || sessionStorage.bwKg === undefined || sessionStorage.bwKg === "") {
        infoPrompt("Please enter the patient's weight");
    } else {
        displayWeights();
        computeDifference(); 
    }

    $("#saveInfo").click(function() {
        if(sessionStorage.cwKg === undefined || sessionStorage.cwKg === "" || sessionStorage.bwKg === undefined || sessionStorage.bwKg === "") {
            infoPrompt("Please enter the patient's weight");
        }
    })
})