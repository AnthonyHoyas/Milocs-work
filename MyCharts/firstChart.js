let myChart = document.getElementById('myChart').getContext('2d');
let labels = [];
let labelsPop = [];
let test = ['Bruxelles', 'Mons', 'Liège', 'Namur', 'Arlon', 'Anvers'];
let testpop = ['1000000', '200000', '154875', '559321', '214587', '65983']
let citiesList = fetch("be.json")
    .then(response => response.json())
    .then(cities => {
        for (let city of cities) {
            labels.push(city.city)
        }
    })
let poplist = fetch("be.json")
    .then(response => response.json())
    .then(populations => {
        for (let population of populations) {
            labelsPop.push(population.population);
        }
    })
console.log(labelsPop)
console.log(labels)
console.log(test)
//Global Options

let belgPopChart = new Chart(myChart, {
    type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: test,
        datasets: [{
            label: 'population',
            data: testpop,
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