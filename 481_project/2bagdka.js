$(function() {
    if(sessionStorage.bwKg == undefined) {
        $("#infoButton").click();
        alert("Please enter the patient's weight")
    } else {
        populateTable(); 
    }
    populateTable = function() {
        var kgWeight = $("#cwKg").val();
        var maintenanceFluid;
        if(kgWeight <= 10) {
            maintenanceFluid = kgWeight * 100;
        } else if(kgWeight <= 20) {
            maintenanceFluid = 1000 + (kgWeight-10) * 50;
        } else {
            maintenanceFluid = 1500 + (kgWeight-20) * 20;
        }
        if(maintenanceFluid > 2400) {
            maintenanceFluid = 2400;
        }
        var dropFactor = 20;
        var infusionRate = (maintenanceFluid/1440 * dropFactor);

        $(".fullRate").text(infusionRate.toFixed(2));
        $(".halfRate").text((infusionRate * .5).toFixed(2));
        $(".threeQuarterRate").text((infusionRate * .75).toFixed(2));
        $(".quarterRate").text((infusionRate * .25).toFixed(2));
        $(".zeroRate").text(0);
    }
})