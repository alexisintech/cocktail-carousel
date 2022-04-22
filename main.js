//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.getElementById("button2").addEventListener('click', NextDrink)

let drinkArr = [];

function NextDrink() {

    let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

    fetch (url)
        .then(res => {
        return res.json()
        })
        .then(data => {
            let d = data.drinks[0];
            // console.log(margarita.strDrink); //"The drink's name"
            document.querySelector('h1').innerText = d.strDrink;
            // console.log(d.strInstructions);
            // document.querySelector('h3').innerText = d.strInstructions;
            // console.log(d.strDrinkThumb); //Pic of drink
            document.getElementById('img').src = d.strDrinkThumb;
            console.log(data);
            drinkArr.push(d);
            console.log(drinkArr);
            return drinkArr;
        })

}

document.getElementById("button1").addEventListener('click', LastDrink)

function LastDrink() {
    let lastDrink = drinkArr[drinkArr.length - 1];
    console.log(lastDrink);
    document.querySelector('h1').innerText = lastDrink.strDrink;
    document.getElementById('img').src = lastDrink.strDrinkThumb;
}