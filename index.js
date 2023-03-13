$(document).ready(function () {
    // var spreadsheetID = "1oZ6z_l6OZ4BSu3qnlKZGj2_pD7L2it6D0Ki00swXkZs";
    // var worksheetID = "COLOCA AQUÍ EL ID DE TU HOJA DE CÁLCULO";
    var url = "https://docs.google.com/spreadsheets/d/1oZ6z_l6OZ4BSu3qnlKZGj2_pD7L2it6D0Ki00swXkZs/edit?usp=sharing";
    
    $.getJSON(url, function (data) {
        var entry = data.feed.entry;

        $(entry).each(function () {
            $('.table').append('<tr><td>' + this.gsx$columna1.$t + '</td><td>' + this.gsx$columna2.$t + '</td><td>' + this.gsx$columna3.$t + '</td></tr>');
        });
    });
    console.log(url)
});
