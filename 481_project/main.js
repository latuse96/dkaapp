$(document).ready(function () {
    loadInfo = function () {
        $("#cwLbs").val(sessionStorage.cwLbs != "undefined" ? sessionStorage.cwLbs : '');
        $("#cwOz").val(sessionStorage.cwOz != "undefined" ? sessionStorage.cwOz : '');
        $("#cwKg").val(sessionStorage.cwKg != "undefined" ? sessionStorage.cwKg : '');
        $("#age").val(sessionStorage.age != "undefined" ? sessionStorage.age : '');
        $("#bwLbs").val(sessionStorage.bwLbs != "undefined" ? sessionStorage.bwLbs : '');
        $("#bwOz").val(sessionStorage.bwOz != "undefined" ? sessionStorage.bwOz : '');
        $("#bwKg").val(sessionStorage.bwKg != "undefined" ? sessionStorage.bwKg : '');
        $('input[value=' + sessionStorage.ageType + ']').prop("checked", true);
    };

    loadInfo();


    $("#cwLbs").on('keyup input', function () {
        var input = $("#cwLbs").val();
        input = input.replace(/[^0-9.]/g, '');
        $("#cwLbs").val(input);

        if (input == ""){
            if ($("#cwOz").val() == "")
                $("#cwKg").val("");
            return; 
        }

        var pounds = parseFloat($("#cwLbs").val());
        var oz = parseFloat($("#cwOz").val());
        if (isNaN(oz))
            oz = 0;

        var kg = pounds + oz / 16;
        kg = kg * 0.45359237

        kg = kg.toFixed(2);
        $("#cwKg").val(kg);
    });

    $("#cwKg").on('keyup input', function ($event) {
        var input = $("#cwKg").val();
        input = input.replace(/[^0-9.]/g, '');
        $("#cwKg").val(input);

        if (input == ""){
            $("#cwOz").val("");
            $("#cwLbs").val("");
            return; 
        }

        var weight = parseFloat($("#cwKg").val()) * 2.20462;
        var lbs = Math.floor(weight);
        var oz = ((weight - lbs) * 16);
        $("#cwLbs").val(lbs.toFixed(2));

        $("#cwOz").val(oz.toFixed(2));
    });

    $("#cwOz").on('keyup input', function () {
        var input = $("#cwOz").val();
        input = input.replace(/[^0-9.]/g, '');
        $("#cwOz").val(input);

        if (input == ""){
            if ($("#cwLbs").val() == "")
                $("#cwKg").val("");
            return; 
        }

        var pounds = parseFloat($("#cwLbs").val());
        var oz = parseFloat($("#cwOz").val());
        if (isNaN(pounds))
            pounds = 0;

        var kg = pounds + oz / 16;
        kg = kg * 0.45359237

        kg = kg.toFixed(2);
        $("#cwKg").val(kg);
    });

    $("#bwLbs").on('keyup input', function () {
        var input = $("#bwLbs").val();
        input = input.replace(/[^0-9.]/g, '');
        $("#bwLbs").val(input);

        if (input == ""){
            if ($("#bwOz").val() == "")
                $("#bwKg").val("");
            return; 
        }

        var pounds = parseFloat($("#bwLbs").val());
        var oz = parseFloat($("#bwOz").val());
        if (isNaN(oz))
            oz = 0;

        var kg = pounds + oz / 16;
        kg = kg * 0.45359237

        kg = kg.toFixed(2);
        $("#bwKg").val(kg);
    });

    $("#bwKg").on('keyup input', function () {
        var input = $("#bwKg").val();
        input = input.replace(/[^0-9.]/g, '');
        $("#bwKg").val(input);

        if (input == ""){
            $("#bwOz").val("");
            $("#bwLbs").val("");
            return; 
        }

        var weight = parseFloat($("#bwKg").val()) * 2.20462;
        var lbs = Math.floor(weight);
        var oz = ((weight - lbs) * 16);
        $("#bwLbs").val(lbs.toFixed(2));

        $("#bwOz").val(oz.toFixed(2));
    });

    $("#bwOz").on('keyup input', function () {
        var input = $("#bwOz").val();
        input = input.replace(/[^0-9.]/g, '');
        $("#bwOz").val(input);

        if (input == ""){
            if ($("#bwLbs").val() == "")
                $("#bwKg").val("");
            return; 
        }

        var pounds = parseFloat($("#bwLbs").val());
        var oz = parseFloat($("#bwOz").val());
        if (isNaN(pounds))
            pounds = 0;

        var kg = pounds + oz / 16;
        kg = kg * 0.45359237

        kg = kg.toFixed(2);
        $("#bwKg").val(kg);
    });

    $("#age").on('keyup input', function () {
        var input = $("#age").val();
        input = input.replace(/[^0-9.]/g, '');
        $("#age").val(input);

        if (input == ""){
            $("#age").val("");
        }
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
        $("#infoPrompt").attr("hidden", true);
        if ($("#cwLbs").length) {
            sessionStorage.cwLbs = $("#cwLbs").val();
        }
        if ($("#cwOz").length) {
            sessionStorage.cwOz = $("#cwOz").val();   
        }
        if ($("#cwKg").length) {
            sessionStorage.cwKg = $("#cwKg").val();
        }
        if ($("#bwLbs").length) {
            sessionStorage.bwLbs = $("#bwLbs").val();
        }
        if ($("#bwOz").length) {
            sessionStorage.bwOz = $("#bwOz").val();
        }
        if ($("#bwKg").length) {
            sessionStorage.bwKg = $("#bwKg").val();
        }
        if ($("#age").length) {
            sessionStorage.age = $("#age").val();
        }
        if ($("#cWKg").length) {
            sessionStorage.cwKg = $("#cwKg").val();
        }
        if ($("#age").length) {
            var inUnit = $("#age").val();
            if (inUnit == "") {
                sessionStorage.age = 0;
            } else {
                sessionStorage.age = $("#age").val();
            }
        }
        if ($("#years").length || $("#months").length || $("#days").length) {
            sessionStorage.ageType = $('input[name=age]:checked').val();
        }
        populateTable();
        displayWeights();
        computeDifference();
        checkIfUpdate();
    };

    populateTable = function() {
        var kgWeight = sessionStorage.cwKg;
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
        var insulinInfusionUnits = 0.1 * kgWeight;

        $(".fullRate").text(infusionRate.toFixed(2));
        $(".halfRate").text((infusionRate * .5).toFixed(2));
        $(".threeQuarterRate").text((infusionRate * .75).toFixed(2));
        $(".quarterRate").text((infusionRate * .25).toFixed(2));
        $(".zeroRate").text(0);
        $(".infusionRate").text(insulinInfusionUnits.toFixed(2));
    }

    infoPrompt = function(message) {
        $("#infoButton").click();
        $("#infoPrompt").attr("hidden", false).text(message);
    }

    // START Birth Weight Javascript

    displayWeights = function () {
        //Displays Birth Weight
        $("#display_bwlbs").val(sessionStorage.bwLbs);
        $("#display_bwOz").val(sessionStorage.bwOz);
        $("#display_bwkgs").val(sessionStorage.bwKg);

        //Displays Current Weight
        $("#display_cwlbs").val(sessionStorage.cwLbs);
        $("#display_cwOz").val(sessionStorage.cwOz);
        $("#display_cwkgs").val(sessionStorage.cwKg);
    }
    computeDifference = function () {
        var cwKg = sessionStorage.cwKg;
        var bwKg = sessionStorage.bwKg;
        var difference = (parseFloat(cwKg) - parseFloat(bwKg)).toFixed(2);
        $("#DifferenceKg").val(difference);

    if(cwKg > bwKg){
        var weight = parseFloat(difference) * 2.20462;
        var lbs = Math.floor(weight);
        var oz = ((weight - lbs) * 16);
        $("#DifferenceLbs").val(lbs);
        $("#DifferenceOz").val(oz.toFixed(2));
    }else if(cwKg < bwKg ){
        var weight = parseFloat(difference) * 2.20462;
        var lbs = Math.ceil(weight);
        var oz = ((weight - lbs) * 16);
        $("#DifferenceLbs").val(lbs);
        $("#DifferenceOz").val(oz.toFixed(2));
    }

        var PercentFromBirthWeight = ((parseFloat(difference) / parseFloat(cwKg)) * 100).toFixed(1);
    if (PercentFromBirthWeight < 0) {
        $("#DisplayPercentage").val(PercentFromBirthWeight);
        $('#DisplayPercentage').css("color", "red");
    } else {
        $("#DisplayPercentage").val(PercentFromBirthWeight);
        $('#DisplayPercentage').css("color", "black");
    }
}

    // START Glasgow Coma Javascript
    // Page colors set here
    var bodyColor = "white";
    var textColor = "black";
    var sectionBackgroundColorA = "rgb(242,229,212)";
    var sectionBackgroundColor = "rgb(242,229,212)";
    var outputBackgroundColor = "rgb(212,225,242)";
    var selectedColor = "burlywood";
    var goodColor = "rgb(144,238,144,0.75)";
    var comaColor = "rgb(255,255,0,0.75)";
    var badColor = "rgb(255,25,25,0.75)";
    var ageNum = sessionStorage.age;
    var ageUnit = sessionStorage.ageType;
    var age = ageNum + "," + ageUnit;
    if ($(document).find("title").text() == "Glasgow Coma Scale") {
        checkIfUpdate();
    }

    // Set all element colors based on defined incoming values
    $('.gcBody').css("background-color", bodyColor);
    $('.gcBody').css("color", textColor);
    $('.selection').css("background-color", sectionBackgroundColorA);
    $('.gcTable').css("background-color", sectionBackgroundColor);
    $('.gcTableO').css("background-color", outputBackgroundColor);
    $('.gcNum').css("background-color", outputBackgroundColor);
    $('.gcNum').css("color", textColor);
    $('.gcResult').css("background-color", outputBackgroundColor);
    $('.gcResult').css("color", textColor);

    function gcCalculate() {
        var g1 = getGroupValues("group1").split(',');
        var g2 = getGroupValues("group2").split(',');
        var g3 = getGroupValues("group3").split(',');
        if (parseInt(g1[2]) > 0 && parseInt(g2[2]) > 0 && parseInt(g3[2])) {
            var value = parseInt(g1[2]) + parseInt(g2[2]) + parseInt(g3[2]);
        } else {
            var value = 0;
        }
        if (value >= 3 && value < 8) {
            $('#output').css("background-color", comaColor);
            $('#outputResult').css("background-color", comaColor);
            $('#cat1').css("background-color", outputBackgroundColor);
            $('#cat2').css("background-color", outputBackgroundColor);
            $('#cat3').css("background-color", badColor);
            if (value <= 5) {
                $('#output').css("background-color", badColor);
                $('#outputResult').css("background-color", badColor);
            }
        } else if (value >= 8) {
            if (value > 8) {
                $('#output').css("background-color", goodColor);
                $('#outputResult').css("background-color", goodColor);
            } else {
                $('#output').css("background-color", comaColor);
                $('#outputResult').css("background-color", comaColor);
            }
            if (value >= 13) {
                $('#cat1').css("background-color", goodColor);
                $('#cat2').css("background-color", outputBackgroundColor);
                $('#cat3').css("background-color", outputBackgroundColor);
            } else if (value >= 9 && value <= 12) {
                $('#cat1').css("background-color", outputBackgroundColor);
                $('#cat2').css("background-color", comaColor);
                $('#cat3').css("background-color", outputBackgroundColor);
            } else if (value >= 3 && value <= 8) {
                $('#cat1').css("background-color", outputBackgroundColor);
                $('#cat2').css("background-color", outputBackgroundColor);
                $('#cat3').css("background-color", badColor);
            }
        } else {
            $('#output').css("background-color", outputBackgroundColor);
            $('#outputResult').css("background-color", outputBackgroundColor);
            $('#cat1').css("background-color", outputBackgroundColor);
            $('#cat2').css("background-color", outputBackgroundColor);
            $('#cat3').css("background-color", outputBackgroundColor);
        }
        if (value >= 8) {
            $('#outputResult').text("Good chance for recovery");
        } else if (value >= 3 && value <= 5) {
            $('#outputResult').text("Potentially fatal");
        } else if (value > 5 && value < 8) {
            $('#outputResult').text("Recovery may be possible");
        } else {
            $('#outputResult').text("");
        }
        if (value >= 3) {
            $('#output').text(value + "/15");
        } else {
            $('#output').text("");
        }
    }
    function getGroupValues(groupName) {
        var group = "input[name='" + groupName + "']:checked";
        var val = $(group.toString()).val();
        if (typeof val != "undefined") {
            return val;
        } else {
            return val = '"","",0';
        }
    }

    // Functionality for age input collection
    $('.age-num').on('input', ageNumberChange);
    $('input:radio[name=age]').change(function () {
        ageUnit = $(this).val();
        convertUnit();
        age = ageNum + "," + ageUnit;
        sessionStorage.age = ageNum;
        sessionStorage.ageType = ageUnit;
        $("#inputAge").text(ageNum);
        $("#inputUnit").text(ageUnit);
        groupUpdate();
    });
    function convertUnit() {
        if (ageUnit === "Months") {
            ageUnit = "months";
        } else if (ageUnit === "Years") {
            ageUnit = "years";
        } else if (ageUnit === "Days") {
            ageUnit = "days";
        }
    }
    function ageNumberChange() {
        ageNum = $(this).val();
        convertUnit();
        age = ageNum + "," + ageUnit;
        sessionStorage.age = ageNum;
        sessionStorage.ageType = ageUnit;
        $("#inputAge").text(ageNum);
        $("#inputUnit").text(ageUnit);
        groupUpdate();
    }
    function checkIfUpdate() {
        var input = age.split(',');
        if (input[0] != "" && input[1] != "") {
            if (sessionStorage.age == undefined || sessionStorage.ageType == undefined) {
                infoPrompt("Please enter the patient's age");
            }
        } else {
            if (sessionStorage.age == "" || sessionStorage.ageType == "") {
                infoPrompt("Please enter the patient's age");
            }
        }
        $("#inputAge").text(sessionStorage.age);
        $("#inputUnit").text(sessionStorage.ageType);
        age = ($("#age").val() != '' ? sessionStorage.age : 0) + "," + $('input[name=age]:checked').val();
        if ($("#inputAge").text() == 0) {
            $('#gcInput').css("background-color", badColor);
        } else {
            $('#gcInput').css("background-color", outputBackgroundColor);
        }
        groupUpdate();
    }

    // Change verbal response fields based on age (<5 years)
    function groupUpdate() {
        $('.group').each(function () {
            var input = age.split(',');
            var num = parseInt(input[0]);
            var unit = input[1].toString();
            if (unit === "months" || unit === "days") {
                if (num >= 0 && num <= 23) {
                    $("#o1").text("Smiles or coos appropriately");
                    $("#o2").text("Cries and consolable");
                    $("#o3").text("Persistent inappropriate crying &/or screaming");
                    $("#o4").text("Grunts or is agitated or restless");
                    $("#o5").text("No response");
                }
            } else if (unit === "years") {
                if (num >= 2 && num <= 5) {
                    $("#o1").text("Appropriate words or phrases");
                    $("#o2").text("Inappropriate words");
                    $("#o3").text("Persistent cries and/or screams");
                    $("#o4").text("Grunts");
                    $("#o5").text("No response");
                } else if (num > 5) {
                    $("#o1").text("Oriented");
                    $("#o2").text("Confused conversation, but able to answer questions");
                    $("#o3").text("Inappropriate responses, words discernible");
                    $("#o4").text("Incomprehensible speech");
                    $("#o5").text("None");
                }
            }
        });
    }
    // Highlight row and select radio on row, label, or radio select
    $(".selection").click(function (e) {
        var $radio = $(this).find('input:radio');
        if (!$(e.target).is('input:radio')) {
            $radio.prop('checked', !$radio.prop('checked'));
            if ($radio.is(':checked')) {
                if ($(e.target).is('label')) {
                    $(e.target).parent().parent().children().css("background-color", sectionBackgroundColorA);
                    $(e.target).parent().css("background-color", selectedColor);
                } else {
                    $(e.target).parent().children().css("background-color", sectionBackgroundColorA);
                    $(e.target).css("background-color", selectedColor);
                }
            } else {
                if ($(e.target).is('label')) {
                    $(e.target).parent().parent().children().css("background-color", sectionBackgroundColorA);
                    $(e.target).parent().css("background-color", sectionBackgroundColorA);
                } else {
                    $(e.target).parent().children().css("background-color", sectionBackgroundColorA);
                    $(e.target).css("background-color", sectionBackgroundColorA);
                }
            }
        } else {
            $(e.target).parent().parent().children().css("background-color", sectionBackgroundColorA);
            $(e.target).parent().css("background-color", selectedColor);
        }
        gcCalculate();
    });
    // END Glasgow Coma Javascript
})
