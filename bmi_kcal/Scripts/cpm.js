var selectedGender;
var valueForSex;
var selectedActivity;
var valueForActivity;
var brm;
var cpm;
var noEnterData;
var textInSecondContentModal;
var levelactivity;
var diet1, diet2, diet3;

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
            levelactivity = 0;
        }
        else if (document.getElementById('level1').checked) {
            valueForActivity = 1.35;
            selectedActivity = document.getElementById('level1').value;
            levelactivity = 1;

        }
        else if (document.getElementById('level2').checked) {
            valueForActivity = 1.55;
            selectedActivity = document.getElementById('level2').value;
            levelactivity = 2;

        }
        else if (document.getElementById('level3').checked) {
            valueForActivity = 1.75;
            selectedActivity = document.getElementById('level3').value;
            levelactivity = 3;

        }
        else if (document.getElementById('level4').checked) {
            valueForActivity = 2.05;
            selectedActivity = document.getElementById('level4').value;
            levelactivity = 4;

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
        diet1 = (parseFloat(cpm) - 150);
        diet2 = cpm;
        diet3 = (parseFloat(cpm) + 150);
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

$(document).ready(function () {
    $('#ModalInfoCenter').on('hidden.bs.modal', function () {
        if (noEnterData == false) {
            ShowPromo();
        }
    });

});

function ShowPromo() {
    setTimeout(ShowPromoContent, 800);

}

function ShowPromoContent() {

    textInSecondContentModal = '<h4 class="text-center">Specjalna oferta!</h4><h5 class="text-center">Możesz skorzystać z świetnej promocji diet poniżej:</h5><nav><div class="nav nav-tabs" id="nav-tab" role="tablist"><a class="nav-item nav-link active" id="nav-diet1-tab" data-toggle="tab" href="#nav-diet1" role="tab" aria-controls="nav-diet1" aria-selected="true">Deficytowa</a><a class="nav-item nav-link" id="nav-diet2-tab" data-toggle="tab" href="#nav-diet2" role="tab" aria-controls="nav-diet2" aria-selected="false">Utrzymująca</a><a class="nav-item nav-link" id="nav-diet3-tab" data-toggle="tab" href="#nav-diet3" role="tab" aria-controls="nav-diet3" aria-selected="false">Wzrostowa</a></div></nav><div class="tab-content"><div class="tab-pane fade show active" id="nav-diet1" role="tabpanel" aria-labelledby="nav-diet1-tab"><div class="card" id="cardcenter" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Dieta deficytowa</h5><h6 class="card-subtitle mb-2 text-muted">Zapewnimy Ci catering na: ' + diet1 + ' kcal.</h6><p class="card-text">Z naszą dietą bezpiecznie i prosto zmniejszysz swoją wagę. Twoja dieta, to 150 kcal dziennie deficytu!</p><a href="https://mdwojak.pl/" class="card-link">Zamów już teraz</a></div></div></div><div class="tab-pane fade" id="nav-diet2" role="tabpanel" aria-labelledby="nav-diet2-tab"><div class="card" id="cardcenter" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Dieta stagnacyjna</h5><h6 class="card-subtitle mb-2 text-muted">Zapewnimy Ci catering na: ' + diet2 + ' kcal.</h6><p class="card-text">Z naszą dietą bezpiecznie i prosto utrzymasz swoją wagę. Twoja dieta, to dokładnie Twoje CPM!</p><a href="https://mdwojak.pl/" class="card-link">Zamów już teraz</a></div></div></div><div class="tab-pane fade" id="nav-diet3" role="tabpanel" aria-labelledby="nav-diet3-tab"><div class="card" id="cardcenter" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Dieta wzrostowa</h5><h6 class="card-subtitle mb-2 text-muted">Zapewnimy Ci catering na: ' +diet3+' kcal.</h6><p class="card-text">Z naszą dietą bezpiecznie i prosto zwiększych swoją wagę. Twoja dieta to przekraczanie CPM aż o 150 kcal!</p><a href="https://mdwojak.pl/" class="card-link">Zamów już teraz</a></div></div></div></div>';
    document.getElementById("infocontent").innerHTML = textInSecondContentModal;
    $('#ModalPromo').modal('show');
}