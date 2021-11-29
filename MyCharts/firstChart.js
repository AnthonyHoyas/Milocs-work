let myChart = document.getElementById('myChart').getContext('2d');
let cities = fetch("data.json")
.then(response => response.json())
.then(data => {
    for (let list of data) {
    console.log(list.name);
}})
//Global Options

let belgPopChart = new Chart(myChart, {
    type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: [cities.forEach(element => console.log(element))], //'Bruxelles', 'Mons', 'Liège', 'Namur', 'Arlon', 'Anvers'],  
        datasets: [{
            label: 'population',
            data: [
                1019022,
                231493,
                459805,
                200132,
                182597,
                116709
            ],
            backgroundColor: [
                'green',
                'blue',
                'red',
                'yellow',
                'purple',
                'black'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest City In Belgium',
            fontSize: 25,
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: 'red'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
            }
        }
    }
});