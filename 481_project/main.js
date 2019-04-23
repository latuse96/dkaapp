$(function () {
    loadInfo = function () {
        $("#cwLbs").val(sessionStorage.cwLbs);
        $("#cwOz").val(sessionStorage.cwOz);
        $("#cwKg").val(sessionStorage.cwKg);
        $("#age").val(sessionStorage.age);
        $("#bwLbs").val(sessionStorage.bwLbs);
        $("#bwOz").val(sessionStorage.bwOz);
        $("#bwKg").val(sessionStorage.bwKg);

    };

    loadInfo();
    $("#cwLbs").on('keyup input', function () {
        var weight = parseInt($("#cwLbs").val());
        var weight1 = parseInt($("#cwOz").val());
        weight1= weight1/ 16;

        if (!isNaN(weight1))
            weight = weight + weight1;
        weight= weight* 0.453592;
        weight = weight.toFixed(2);
        $("#cwKg").val(weight);
    });

    $("#cwKg").on('keyup input', function () {
        var weight = parseInt($("#cwKg").val());
        $("#cwLbs").val(Math.floor(weight * 2.204).toFixed(2));
        weight= weight* 2.204;
        weight=weight.toString().split('.')[1]
        weight= "." + weight;
        weight = parseFloat(weight * 16).toFixed(2);
        $("#cwOz").val(weight);
    });

    $("#cwOz").on('keyup input', function () {
        var weight = parseInt($("#cwLbs").val());
        var weight1 = parseInt($("#cwOz").val());
        weight1= weight1 / 16;

        if (!isNaN(weight))
            weight1= weight+weight1;

        weight1 = (weight1 * 0.453592).toFixed(2);
        $("#cwKg").val(weight1);
    });

    $("#bwLbs").on('keyup input', function () {
        var weight = parseInt($("#bwLbs").val());
        var weight1 = parseInt($("#bwOz").val());
        weight1 = weight1/ 16;

        if (!isNaN(weight1))
            weight= weight+weight1;

        weight = (weight * 0.453592).toFixed(2);
        $("#bwKg").val(weight);
    });

    $("#bwKg").on('keyup input', function () {
        var weight = parseInt($("#bwKg").val());
        $("#bwLbs").val(Math.floor(weight * 2.204).toFixed(2));
        weight= weight* 2.204;
        weight=weight.toString().split('.')[1]
        weight= "." +weight;
        weight = parseFloat(weight);
        $("#bwOz").val((weight * 16).toFixed(2));
    });

    $("#bwOz").on('keyup input', function () {
        var weight= parseInt($("#bwLbs").val());
        var weight1= parseInt($("#bwOz").val());
        weight1= weight1/ 16;

        if (!isNaN(weight))
            weight1= weight+weight1;

        $("#bwKg").val((weight1 * 0.453592).toFixed(2));
    });

    $("#infoButton").click(function () {
        $("#info").removeClass("infoHidden").addClass("infoShow");
    });

    $("#saveInfo").click(function () {
        saveInfo();
        $("#info").removeClass("infoShow").addClass("infoHidden");

        //info does notweightctually save yet
    });

    saveInfo = function () {
        sessionStorage.cwLbs = $("#cwLbs").val();
        sessionStorage.cwOz = $("#cwOz").val();
        sessionStorage.cwKg = $("#cwKg").val();
        sessionStorage.age = $("#age").val();
        sessionStorage.bwLbs = $("#bwLbs").val();
        sessionStorage.bwOz = $("#bwOz").val();
        sessionStorage.bwKg = $("#bwKg").val();
    };


    $("#populateTableButton").click(function() {
        populateTable();
    })
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
