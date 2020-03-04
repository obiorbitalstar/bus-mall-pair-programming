var names = ["bag.jpg", 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];



var imageHolder = document.querySelector('#imageHolder');
var rightImage = document.querySelector('#rightImage');
var middleImage = document.querySelector('#middleImage');
var leftImage = document.querySelector('#leftImage');



function Products(prod) {
    this.prodduct = prod;
    this.votes = 0;
    this.views = 0;
    this.imgPath = `/img/${this.prodduct}`;
    Products.all.push(this);

}
Products.all = [];

for (let i = 0; i < names.length; i++) {

    new Products(names[i]);
}

function chartDataUpdate(){
    var newChartData = JSON.stringify(Products.all);
    localStorage.setItem('votesAndViews',newChartData);
}

function chartDataBringer (){ 
    var newBroughtData = localStorage.getItem('votesAndViews');
    if(newBroughtData){
        Products.all = JSON.parse(newBroughtData);

        render2();
    }
}


var rightProduct, middleProduct, leftProduct;

function render() {

    rightProduct = Products.all[randomNumber(0, Products.all.length - 1)];
 
    middleProduct = Products.all[randomNumber(0, Products.all.length - 1)];

    leftProduct = Products.all[randomNumber(0, Products.all.length - 1)];




    while ((rightProduct === middleProduct) || (rightProduct === leftProduct) || (middleProduct === leftProduct)) {
        render();
    }



    rightImage.setAttribute('src', rightProduct.imgPath);
    rightImage.setAttribute('alt', rightProduct.name);
    rightImage.setAttribute('title', rightProduct.name);

    middleImage.setAttribute('src', middleProduct.imgPath);
    middleImage.setAttribute('alt', middleProduct.name);
    middleImage.setAttribute('title', middleProduct.name);


    leftImage.setAttribute('src', leftProduct.imgPath);
    leftImage.setAttribute('alt', leftProduct.name);
    leftImage.setAttribute('title', leftProduct.name);
}
render();


imageHolder.addEventListener('click', catchClicks);
var clicksCounter = 0;
function catchClicks(event) {
    if (clicksCounter < 25) {
        if (event.target.id !== 'imageHolder') {
            if (event.target.id === 'rightImage') {
                rightProduct.votes++
            } else if (event.target.id == 'middleImage') {
                middleProduct.votes++
            }
            else if (event.target.id === 'leftImage') {
                leftProduct.votes++
            }
            clicksCounter++;
            rightProduct.views++;
            middleProduct.views++;
            leftProduct.views++;
            for (let i = 0; i < Products.all.length; i++) {
                clickArray[i] = Products.all[i].votes;
                viewsArray[i] = Products.all[i].views;
            }
            chartDataUpdate();
            render();
        }
    } else {
        alert("you exceeded the allowed number of votes (which is 25)");
        imageHolder.removeEventListener('click', catchClicks)
        render2();
    }
}
var clickArray = [];
var viewsArray = [];

function render2() {
    console.log(clickArray);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: '# of Votes',
                data: clickArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }, {
                label: '# of Views',
                data: viewsArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
chartDataBringer();
