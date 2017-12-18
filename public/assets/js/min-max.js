// Spinal Fusion Chart of Highest and Lowest Cost in US



//not sure how to get the chart to actually redraw 
// or how to get dollar signs inserted

google.charts.load('current', {
    'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function minMaxChart(procedure, state1, num1, state2, num2) {
    var data = google.visualization.arrayToDataTable([
        ['State', 'Procedure Cost'],
        [state1, "$ " + num1],
        [state2, "$ " + num2],

        ]);

    var options = {
        chart: {
            title: procedure,
            subtitle: 'Highest and Lowest Cost of Procedure in US',
        },
        bars: 'vertical',
        bar: {
            groupWidth: "50%"
        },


        vAxis: {
            format: 'decimal'
        },
        height: 500,
        width: 550,
        colors: ['#4374e0']
    };

    var chart = new google.charts.Bar(document.getElementById('min-max'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
};


$(document).ready(minMaxChart("Heart Transplant", "Pennsylvania", 2794182, "Arizona", 382051))
