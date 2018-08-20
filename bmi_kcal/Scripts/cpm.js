var selectedGender;
var valueForSex;
var selectedActivity;
var valueForActivity;
var brm;
var cpm;
var noEnterData;
function BrmCpm() {
    noEnterData = false;
    var growth = document.getElementById("growth").value;
    var weight = document.getElementById("weight").value;
    var age = document.getElementById("age").value;
    growth = growth.replace(",", ".");
    weight = weight.replace(",", ".");
    var textInFirstContentModal;
    if (growth > 0 && weight > 0 && age > 0) {
        if (document.getElementById('male').checked) {
            selectedGender = document.getElementById('male').value;
            valueForSex = 5;
        }
        else if (document.getElementById('female').checked) {
            selectedGender = document.getElementById('female').value;
            valueForSex = -161;
        }

        if (document.getElementById('level0').checked) {
            valueForActivity = 1.2;
            selectedActivity = document.getElementById('level0').value;
        }
        else if (document.getElementById('level1').checked) {
            valueForActivity = 1.35;
            selectedActivity = document.getElementById('level1').value;

        }
        else if (document.getElementById('level2').checked) {
            valueForActivity = 1.55;
            selectedActivity = document.getElementById('level2').value;

        }
        else if (document.getElementById('level3').checked) {
            valueForActivity = 1.75;
            selectedActivity = document.getElementById('level3').value;

        }
        else if (document.getElementById('level4').checked) {
            valueForActivity = 2.05;
            selectedActivity = document.getElementById('level4').value;

        }
        brm = ((9.99 * weight) + (6.25 * growth) - (4.92 * age) + valueForSex).toFixed(2);
        cpm = (brm * valueForActivity).toFixed(2);

        // alert(brm + ' and ' + cpm);

    }
    else {
        noEnterData = true;
        textInFirstContentModal = '<h5 class="text-center">Nie jest możliwe sprawdzenie BRM/CPM - bez wprowadzenia poprawnie danych w formularzu!</h5 ><i id="ScoreContent" class="far fa-surprise fa-4x"></i>';
     
    }
    if (noEnterData == false) {
        textInFirstContentModal = '<h5 class="text-center">Twoje BRM (podstawowa przemiany materii) wynosi: ' + brm + ' kcal</h5 ><h5 class="text-center">Oraz CPM (całkowica przemiana materii) wynosi: ' + cpm + ' kcal</h5 ><i id="ScoreContent" class="fas fa-dumbbell fa-4x"></i>';
        var std = {};
        // std.Number = $("#Number").val();
        brm = brm.replace(".", ",");
        cpm = cpm.replace(".", ",");
        std.ResultBRMValue = brm;
        std.ResultCPMValue = cpm;
        std.Weight = weight;
        std.Growth = growth;
        std.Age = age;
        std.SelectedActivity = selectedActivity;
        std.Gender = selectedGender;
        $.ajax({
            type: "POST",
            url: "/Home/NewRecordBrmCpm", // the URL of the controller action method
            data: '{std: ' + JSON.stringify(std) + '}',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                // nothing doing
            },
            error: function (req, status, error) {
                alert("Błąd wstawiania danych");
            }
        });
    }

    document.getElementById("infocontent1").innerHTML = textInFirstContentModal;
    $('#ModalInfoCenter').modal('show');


}