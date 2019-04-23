$(function () {
    var curWeight, age, birthweight;

    $("#cwLbs").on('keyup input', function () {
        var a = parseInt($("#cwLbs").val());
        var b = parseInt($("#cwOz").val());
        b = b / 16;

        if (!isNaN(b))
            a = a + b;

        $("#cwKg").val(a * 0.453592);
    });

    $("#cwKg").on('keyup input', function () {
        var a = parseInt($("#cwKg").val());
        $("#cwLbs").val(Math.floor(a * 2.204));
        a = a * 2.204;
        a = a.toString().split('.')[1]
        a = "." + a;
        a = parseFloat(a);
        $("#cwOz").val(a * 16);
    });

    $("#cwOz").on('keyup input', function () {
        var a = parseInt($("#cwLbs").val());
        var b = parseInt($("#cwOz").val());
        b = b / 16;

        if (!isNaN(a))
            b = a + b;

        $("#cwKg").val(b * 0.453592);
    });

    $("#bwLbs").on('keyup input', function () {
        var a = parseInt($("#bwLbs").val());
        var b = parseInt($("#bwOz").val());
        b = b / 16;

        if (!isNaN(b))
            a = a + b;

        $("#bwKg").val(a * 0.453592);
    });

    $("#bwKg").on('keyup input', function () {
        var a = parseInt($("#bwKg").val());
        $("#bwLbs").val(Math.floor(a * 2.204));
        a = a * 2.204;
        a = a.toString().split('.')[1]
        a = "." + a;
        a = parseFloat(a);
        $("#bwOz").val(a * 16);
    });

    $("#bwOz").on('keyup input', function () {
        var a = parseInt($("#bwLbs").val());
        var b = parseInt($("#bwOz").val());
        b = b / 16;

        if (!isNaN(a))
            b = a + b;

        $("#bwKg").val(b * 0.453592);
    });

    $("#infoButton").click(function () {
        $("#info").removeClass("infoHidden").addClass("infoShow");
    });

    $("#saveInfo").click(function () {
        $("#info").removeClass("infoShow").addClass("infoHidden");
        //info does not actually save yet
    });

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
