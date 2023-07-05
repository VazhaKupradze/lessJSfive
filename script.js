//----1----//

let elementImg = document.createElement('img');

elementImg.src = 'images/walpOne.jpeg';
elementImg.alt = 'image';
elementImg.setAttribute('class', 'styleImg')
// elementImg.setAttribute('src', 'images/walpOne.jpeg')

document.getElementById('wraper').appendChild(elementImg);

let elementH2 = document.createElement('h2');

elementH2.setAttribute('class', 'title');
elementH2.innerText = "image title";

document.getElementById('wraper').appendChild(elementH2);


//----2----//

let arrayTwo = [23, 45, 32, 5, 87, 7, 3, 98]

let minNumber = arrayTwo.sort((x, y) => y - x);

console.log(minNumber[minNumber.length - 1]);



//----3----//


let stringThree = '12345';

let arrayThree = stringThree.split('');

let sum = 0;

for (let i = 0; i < arrayThree.length; i++) {
    sum += Number(arrayThree[i]);
}

console.log(sum);

//----4----//


let arrayFour = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];

let numbersFilet = arrayFour.filter(checkNumbers);

function checkNumbers(num) {
    if (typeof num === 'number')
        console.log(num);
}


//----5----//


let arrayFive = [14, 150, 'css', null, 'javascript', 25];

let filetrArray = arrayFive.map(item => {
    if (typeof item === 'number') {
        return item * item;
    } else if (typeof item === 'string') {
        return item.toUpperCase();
    } return item;
})

console.log(filetrArray);

//----6----//


let stringSix = 'თელავცანეგ'

let reverse = '';

for (let i = stringSix.length - 1; i >= 0; i--) {
    reverse += (stringSix[i]);
}

console.log(reverse);


//----7----//


let info = 'Good day'

let arraySeven = info.slice(5, 8);

console.log(arraySeven);


//----8----//

function stringLenght(target) {
    return target.length;
}

let someString = 'asdkasdlkasmdlsa';
let functionString = stringLenght(someString);
console.log(functionString);

//----9----//

function functionPrompt() {
    let city = prompt("საქათველოს დედაქალაქი?");
    let checkedAnswer = city.toLowerCase();
    if (checkedAnswer === "tbilisi") {
        document.getElementById("answer").innerHTML = "სწორია"
    } else (document.getElementById("answer").innerHTML = "არასწორია")
}


//----10----//

let link = "https://google.com"

function protocolCheck() {
    if (link.indexOf("https://") !== -1) {
        console.log("მოიცავს");
    } else {
        console.log("არ მოიცავს");
    }
}

protocolCheck(link);

//----11----//


let fruits = ["apple", "mango", "avocado", "kiwi",]

fruits.splice(fruits.length - 2, 1, "strawberry");

console.log(fruits);