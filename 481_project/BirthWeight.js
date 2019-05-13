$(function() {
    if(sessionStorage.cwKg === undefined || sessionStorage.cwKg === "" || sessionStorage.bwKg === undefined || sessionStorage.bwKg === "") {
        infoPrompt();
    } else {
        displayWeights();
        computeDifference(); 
    }

    $("#saveInfo").click(function() {
        if(sessionStorage.cwKg === undefined || sessionStorage.cwKg === "" || sessionStorage.bwKg === undefined || sessionStorage.bwKg === "") {
            infoPrompt();
        }
    })
})