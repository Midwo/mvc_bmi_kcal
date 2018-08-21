//var Quantity = new Array();
//var Content = new Array();

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
window.onload = function () {
    //function DivisionOfActivity() {
    // $("#tblTop5 tbody tr").remove();
    $('body').removeClass('bg1').addClass('bg2');

    var myVar;

    myVar = setTimeout(showPage, 1500);



    $.ajax({
        type: 'POST',
        url: "/Home/DivisionOfActivity",
        dataType: 'json',
        data: { id: '' },
        success: function (data) {
            var items = '';
            var Quantity = new Array();
            var Content = new Array();
            $.each(data, function (i, item) {
                Quantity.push(item.Quantity);
                Content.push(item.Content);
                // $('#tblTop5 tbody').append(rows);
            });
            //   console.log(Quantity);
            //    console.log(Content);


            var ctx = document.getElementById("SelectedActivity");
            var myChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: Content,
                    datasets: [{
                        label: '# of Votes',
                        data: Quantity,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            //var ctx = document.getElementById("myChart");
            //var myChart = new Chart(ctx, {
            //    type: 'radar',
            //    data: {
            //        labels: Content,
            //        datasets: [{
            //            label: '# of Votes',
            //            data: Quantity,
            //            backgroundColor: [
            //                'rgba(255, 99, 132, 0.2)',
            //                'rgba(54, 162, 235, 0.2)',
            //                'rgba(255, 206, 86, 0.2)',
            //                'rgba(75, 192, 192, 0.2)',
            //                'rgba(153, 102, 255, 0.2)',
            //                'rgba(255, 159, 64, 0.2)'
            //            ],
            //            borderColor: [
            //                'rgba(255,99,132,1)',
            //                'rgba(54, 162, 235, 1)',
            //                'rgba(255, 206, 86, 1)',
            //                'rgba(75, 192, 192, 1)',
            //                'rgba(153, 102, 255, 1)',
            //                'rgba(255, 159, 64, 1)'
            //            ],
            //            borderWidth: 1
            //        }]
            //    },
            //    options: {
            //        scales: {
            //            yAxes: [{
            //                ticks: {
            //                    beginAtZero: true
            //                }
            //            }]
            //        }
            //    }
            //});








        },
        error: function (ex) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }
    });

    $.ajax({
        type: 'POST',
        url: "/Home/DivisionOfGender",
        dataType: 'json',
        data: { id: '' },
        success: function (data) {
            var items = '';
            var Quantity = new Array();
            var Content = new Array();
            $.each(data, function (i, item) {
                Quantity.push(item.Quantity);
                Content.push(item.Content);
                // $('#tblTop5 tbody').append(rows);
            });
            //    console.log(Quantity);
            //   console.log(Content);


            var ctx = document.getElementById("SelectedGender");
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: Content,
                    datasets: [{
                        label: '# of Votes',
                        data: Quantity,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

            //var ctx = document.getElementById("myChart");
            //var myChart = new Chart(ctx, {
            //    type: 'radar',
            //    data: {
            //        labels: Content,
            //        datasets: [{
            //            label: '# of Votes',
            //            data: Quantity,
            //            backgroundColor: [
            //                'rgba(255, 99, 132, 0.2)',
            //                'rgba(54, 162, 235, 0.2)',
            //                'rgba(255, 206, 86, 0.2)',
            //                'rgba(75, 192, 192, 0.2)',
            //                'rgba(153, 102, 255, 0.2)',
            //                'rgba(255, 159, 64, 0.2)'
            //            ],
            //            borderColor: [
            //                'rgba(255,99,132,1)',
            //                'rgba(54, 162, 235, 1)',
            //                'rgba(255, 206, 86, 1)',
            //                'rgba(75, 192, 192, 1)',
            //                'rgba(153, 102, 255, 1)',
            //                'rgba(255, 159, 64, 1)'
            //            ],
            //            borderWidth: 1
            //        }]
            //    },
            //    options: {
            //        scales: {
            //            yAxes: [{
            //                ticks: {
            //                    beginAtZero: true
            //                }
            //            }]
            //        }
            //    }
            //});








        },
        error: function (ex) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }
    });



    $.ajax({
        type: 'POST',
        url: "/Home/DivisionOfDiet",
        dataType: 'json',
        data: { id: '' },
        success: function (data) {
            var items = '';
            var Quantity = new Array();
            var Content = new Array();
            $.each(data, function (i, item) {
                Quantity.push(item.Quantity);
                Content.push(item.Content);
                // $('#tblTop5 tbody').append(rows);
            });
            //    console.log(Quantity);
            //   console.log(Content);


            var ctx = document.getElementById("RequestDiet");
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Content,
                    datasets: [{
                        label: '# of Votes',
                        data: Quantity,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 159, 64, 0.8)',
                            'rgba(0, 0, 0, 0.8)',
                            'rgba(200, 200, 200, 0.8)'

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(200, 200, 200, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                autoSkip: false
                            }
                        }]
                    }
                }
            });

            //var ctx = document.getElementById("myChart");
            //var myChart = new Chart(ctx, {
            //    type: 'radar',
            //    data: {
            //        labels: Content,
            //        datasets: [{
            //            label: '# of Votes',
            //            data: Quantity,
            //            backgroundColor: [
            //                'rgba(255, 99, 132, 0.2)',
            //                'rgba(54, 162, 235, 0.2)',
            //                'rgba(255, 206, 86, 0.2)',
            //                'rgba(75, 192, 192, 0.2)',
            //                'rgba(153, 102, 255, 0.2)',
            //                'rgba(255, 159, 64, 0.2)'
            //            ],
            //            borderColor: [
            //                'rgba(255,99,132,1)',
            //                'rgba(54, 162, 235, 1)',
            //                'rgba(255, 206, 86, 1)',
            //                'rgba(75, 192, 192, 1)',
            //                'rgba(153, 102, 255, 1)',
            //                'rgba(255, 159, 64, 1)'
            //            ],
            //            borderWidth: 1
            //        }]
            //    },
            //    options: {
            //        scales: {
            //            yAxes: [{
            //                ticks: {
            //                    beginAtZero: true
            //                }
            //            }]
            //        }
            //    }
            //});








        },
        error: function (ex) {
            var r = jQuery.parseJSON(response.responseText);
            alert("Message: " + r.Message);
            alert("StackTrace: " + r.StackTrace);
            alert("ExceptionType: " + r.ExceptionType);
        }
    });
    return false;
    //  }
};