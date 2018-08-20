var noEnterData;
var bmi;
function Bmi() {
    var resultstatus;
    noEnterData = false;
    var growth = document.getElementById("growth").value;
    var weight = document.getElementById("weight").value;
    growth = growth.replace(",", ".");
    weight = weight.replace(",", ".");
    var textInFirstContentModal;
    if (growth > 0 && weight > 0) {
        bmi = (Math.round(weight / (growth / 100 * growth / 100) * 100)) / 100;
        //alert(bmi);
        if (bmi < 16.0) {
            textInFirstContentModal = '<h5 class="text-center">Wynik ten wskazuje na: "wygłodzenie". Musisz o siebie zadbać i jak najszybciej zwiększyć swoją wagę</h5 ><i id="ScoreContent" class="far fa-frown-open fa-4x"></i>';
            resultstatus = "wygłodzenie";
        }
        else if (bmi <= 16.99) {
            textInFirstContentModal = '<h5 class="text-center">Wynik ten wskazuje na: "wychuczenie". Musisz o siebie zadbać i znacznie zwiększyć swoją wagę</h5 ><i id="ScoreContent" class="far fa-frown-open fa-4x"></i>';
            resultstatus = "wychuczenie";
        }
        else if (bmi <= 18.49) {
            textInFirstContentModal = '<h5 class="text-center">Wynik ten wskazuje na: "niedowagę". Musisz o siebie zadbać i odrobinę zwiększyć swoją wagę</h5 ><i id="ScoreContent" class="far fa-frown-open fa-4x"></i>';
            resultstatus = "niedowaga";
        }
        else if (bmi <= 24.99) {
            textInFirstContentModal = '<h5 class="text-center">Wynik ten wskazuje na: "waga prawidłowa". Twój wynik jest idealny, prawidłowy! Nie musisz zwiększać swojej wagi ani też zmniejszać</h5 ><i id="ScoreContent" class="far fa-smile-wink fa-4x"></i>';
            resultstatus = "waga prawidłowa";
        }
        else if (bmi <= 29.99) {
            textInFirstContentModal = '<h5 class="text-center">Wynik ten wskazuje na: "nadwaga". Musisz o siebie zadbać i odrobinę zmniejszyć swoją wagę.</h5 ><i id="ScoreContent" class="far fa-frown-open fa-4x"></i>';
            resultstatus = "nadwaga";
        }
        else if (bmi <= 34.99) {
            textInFirstContentModal = '<h5 class="text-center">Wynik ten wskazuje na: "otyłość pierwszego stopnia". Musisz o siebie zadbać i zmniejszyć swoją wagę.</h5 ><i id="ScoreContent" class="far fa-frown-open fa-4x"></i>';
            resultstatus = "otyłość pierwszego stopnia";
        }
        else if (bmi <= 39.99) {
            textInFirstContentModal = '<h5 class="text-center">Wynik ten wskazuje na: "otyłość drugiego stopnia". Musisz o siebie zadbać i jak najszybceij zmniejszyć swoją wagę.</h5 ><i id="ScoreContent" class="far fa-frown-open fa-4x"></i>';
            resultstatus = "otyłość drugiego stopnia";
        }
        else {
            textInFirstContentModal = '<h5 class="text-center">Wynik ten wskazuje na: "otyłość trzeciego stopnia". Musisz o siebie zadbać i jak najszybciej zmniejszyć swoją wagę.</h5 ><i id="ScoreContent" class="far fa-frown-open fa-4x"></i>';
            resultstatus = "otyłość trzeciego stopnia";
        }
    }
    else {
        textInFirstContentModal = '<h5 class="text-center">Nie jest możliwe sprawdzenie BMI - bez wprowadzenia poprawnie danych w formularzu!</h5 ><i id="ScoreContent" class="far fa-surprise fa-4x"></i>';
        noEnterData = true;
    }
    if (noEnterData == false) {
        textInFirstContentModal = '<h4 class="text-center">Twój wynik BMI, to: ' + bmi + '</h4>' + textInFirstContentModal;
        var std = {};
        // std.Number = $("#Number").val();
        std.ResultBMIValue = bmi;
        std.ResultBMIName = resultstatus;
        std.Weight = weight;
        std.Growth = growth;
        $.ajax({
            type: "POST",
            url: "/Home/NewRecordBMI", // the URL of the controller action method
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

function ShowPromo()
{
    setTimeout(ShowPromoContent, 800);
 
}
function ShowPromoContent() {
    var textInSecondContentModal, title1, title2, subtitle1, subtitle2, cardtext1, cardtext2;
    if (bmi < 16.0) {
        title1 = "Dieta na 'wygłodzenie'";
        title2 = "Ćwiczenia na 'wygłodzenie'";
        subtitle1 = "Prosta, szybka i bezpieczna";
        subtitle2 = "Proste, szybkie i bezpieczne";
        cardtext1 = "Zamów dietę już teraz - nie tylko damy Ci przepisy ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
        cardtext2 = "Zamów ćwiczenia już teraz - nie tylko poprawidzmy dla Ciebie spis całego treningu ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
    }
    else if (bmi <= 16.99) {
        title1 = "Dieta na 'wychudzenie'";
        title2 = "Ćwiczenia na 'wychudzenie'";
        subtitle1 = "Prosta, szybka i bezpieczna";
        subtitle2 = "Proste, szybkie i bezpieczne";
        cardtext1 = "Zamów dietę już teraz - nie tylko damy Ci przepisy ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
        cardtext2 = "Zamów ćwiczenia już teraz - nie tylko poprawidzmy dla Ciebie spis całego treningu ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
    }
    else if (bmi <= 18.49) {
        title1 = "Dieta na 'niedowagę'";
        title2 = "Ćwiczenia na 'niedowagę'";
        subtitle1 = "Prosta, szybka i bezpieczna";
        subtitle2 = "Proste, szybkie i bezpieczne";
        cardtext1 = "Zamów dietę już teraz - nie tylko damy Ci przepisy ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
        cardtext2 = "Zamów ćwiczenia już teraz - nie tylko poprawidzmy dla Ciebie spis całego treningu ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
    }
    else if (bmi <= 24.99) {
        title1 = "Dieta na 'wagę prawidłową'";
        title2 = "Ćwiczenia na 'wagę prawidłową'";
        subtitle1 = "Prosta, szybka i bezpieczna";
        subtitle2 = "Proste, szybkie i bezpieczne";
        cardtext1 = "Zamów dietę już teraz - nie tylko damy Ci przepisy ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
        cardtext2 = "Zamów ćwiczenia już teraz - nie tylko poprawidzmy dla Ciebie spis całego treningu ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
    }
    else if (bmi <= 29.99) {
        title1 = "Dieta na 'nadwagę'";
        title2 = "Ćwiczenia na 'nadwagę'";
        subtitle1 = "Prosta, szybka i bezpieczna";
        subtitle2 = "Proste, szybkie i bezpieczne";
        cardtext1 = "Zamów dietę już teraz - nie tylko damy Ci przepisy ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
        cardtext2 = "Zamów ćwiczenia już teraz - nie tylko poprawidzmy dla Ciebie spis całego treningu ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
    }
    else if (bmi <= 34.99) {
        title1 = "Dieta na 'otyłość pierwszego stopnia'";
        title2 = "Ćwiczenia na 'otyłość pierwszego stopnia'";
        subtitle1 = "Prosta, szybka i bezpieczna";
        subtitle2 = "Proste, szybkie i bezpieczne";
        cardtext1 = "Zamów dietę już teraz - nie tylko damy Ci przepisy ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
        cardtext2 = "Zamów ćwiczenia już teraz - nie tylko poprawidzmy dla Ciebie spis całego treningu ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
    }
    else if (bmi <= 39.99) {
        title1 = "Dieta na 'otyłość drugiego stopnia'";
        title2 = "Ćwiczenia na 'otyłość drugiego stopnia'";
        subtitle1 = "Prosta, szybka i bezpieczna";
        subtitle2 = "Proste, szybkie i bezpieczne";
        cardtext1 = "Zamów dietę już teraz - nie tylko damy Ci przepisy ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
        cardtext2 = "Zamów ćwiczenia już teraz - nie tylko poprawidzmy dla Ciebie spis całego treningu ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
    }
    else {
        title1 = "Dieta na 'otyłość drugiego stopnia'";
        title2 = "Ćwiczenia na 'otyłość drugiego stopnia'";
        subtitle1 = "Prosta, szybka i bezpieczna";
        subtitle2 = "Proste, szybkie i bezpieczne";
        cardtext1 = "Zamów dietę już teraz - nie tylko damy Ci przepisy ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
        cardtext2 = "Zamów ćwiczenia już teraz - nie tylko poprawidzmy dla Ciebie spis całego treningu ale również udzielimy wszystkim niezbędnych odpowiedzi na Twoje pytania!";
    }

    textInSecondContentModal = '<div class="tab-pane fade show active" id="nav-diet" role="tabpanel" aria-labelledby="nav-home-tab"><div class="card" id = "cardcenter" style = "width: 18rem;"><div class="card-body"><h5 class="card-title">' + title1 + '</h5><h6 class="card-subtitle mb-2 text-muted">' + subtitle1 + '</h6><p class="card-text">'+cardtext1+'</p><a href="https://mdwojak.pl/" class="card-link">Zamów już teraz</a></div></div></div><div class="tab-pane fade" id="nav-sport" role="tabpanel" aria-labelledby="nav-profile-tab"><div class="card" id="cardcenter" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+title2+'</h5><h6 class="card-subtitle mb-2 text-muted">'+subtitle2+'</h6><p class="card-text">'+cardtext2+'</p><a href="https://mdwojak.pl/" class="card-link">Zamów już teraz</a></div></div></div>'; 
    document.getElementById("nav-tabContent").innerHTML = textInSecondContentModal;
        $('#ModalPromo').modal('show');
}