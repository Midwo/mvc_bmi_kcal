function Bmi() {
    var growth = document.getElementById("growth").value;
    var weight = document.getElementById("weight").value;
    growth = growth.replace(",", ".");
    weight = weight.replace(",", ".");
    var text;
    if (growth > 0 && weight > 0) {
        var bmi = (Math.round(weight / (growth / 100 * growth / 100) * 100)) / 100;
        //alert(bmi);
        if (bmi < 16.0) {
            text = "Wygłodzenie, Twoje BMI wynosi: " + bmi;
        }
        else if (bmi <= 16.99) {
            text = "Wychudzenie, Twoje BMI wynosi: " + bmi;
        }
        else if (bmi <= 18.49) {
            text = "Niedowaga, Twoje BMI wynosi: " + bmi;
        }
        else if (bmi <= 24.99) {
            text = "Waga prawidłowa, Twoje BMI wynosi: " + bmi;
        }
        else if (bmi <= 29.99) {
            text = "Nadwaga, Twoje BMI wynosi: " + bmi;
        }
        else if (bmi <= 34.99) {
            text = "Otyłość pierwszego stopnia, Twoje BMI wynosi: " + bmi;
        }
        else if (bmi <= 39.99) {
            text = "Otyłość drugiego stopnia, Twoje BMI wynosi: " + bmi;
        }
        else {
            text = "Otyłość trzeciego stopnia, Twoje BMI wynosi: " + bmi;
        }
    }
    else {
        text = "Nie jest możliwe sprawdzenie BMI - bez wprowadzenia poprawnie danych w formularzu!"
    }
    // document.getElementById("infocontent1").innerHTML = '<div class="card" style="width: 18rem;"><img class="card-img-top" src="..." alt="Card image cap"><div class="card-body"><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p></div></div>' + text;
    $('#ModalInfoCenter').modal('show');
}
$(document).ready(function () {
    $('#ModalInfoCenter').on('hidden.bs.modal', function () {
        ShowPromo();
    });
});



function ShowPromo()
{
    setTimeout(ShowPromoContent, 800);
 
}
function ShowPromoContent()
{
    $('#ModalPromo').modal('show');
}