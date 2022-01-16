class Pokemons {
    constructor (Img, Name,Health, Food, Clean,Depression ) {
        this.Img = Img;
        this.Name = Name;
        this.Health = Health;     
        this.Food = Food;
        this.Clean = Clean;
        this.Depression = Depression;
    } 
}
const arr = [
    {
    Img: "url('../img/pikachu.png')",
    Name: 'Пикачу',
    Health: 100,
    Food: 100,
    Clean: 100,
    Depression: 100,
},
{
    Img: "url('../img/bulbasaur.png')",
    Name: 'Бульбазаур',
    Health: 100,
    Food: 100,
    Clean: 100,
    Depression: 100,
},
{
   Img: "url('../img/dino.png')",
   Name: 'Дино',
   Health: 100,
   Food: 100,
   Clean: 100,
   Depression: 100,
},
{
   Img:"url('../img/psiduck.png')",
   Name: 'Псидак',
   Health: 100,
   Food: 100,
   Clean: 100,
   Depression: 100,
},
{
   Img: "url('../img/skqirtl.png')",
   Name: 'Сквиртл',
   Health: 100,
   Food: 100,
   Clean: 100,
   Depression: 100,
}];


function addPokemon () {
    let i = arr[(Math.floor(Math.random(0, arr.length)*(arr.length+1)))];
    console.log(i.Img)
    let body = document.querySelector('body');
    let divPokemon = document.createElement('div');
    let divHealth = document.createElement('div');
    let spanHealth = document.createElement('span');
    let divImg = document.createElement('div');
    let img = document.createElement('img');
    let divName = document.createElement('div');
    let spanName = document.createElement('span');
    let divButtons = document.createElement('div');
    let divFood = document.createElement('div');
    let btnFood = document.createElement('button');
    let divClean = document.createElement('div');
    let btnClean = document.createElement('button');
    let divPlay = document.createElement('div');
    let btnPlay = document.createElement('button');
    let divMain = document.createElement('div');

    spanName.innerText= i.Name.toUpperCase();
    img.src= i.Img;
    btnFood.innerText= 'КОРМИТЬ';
    btnClean.innerText= 'ЧИСТИТЬ';
    btnPlay.innerText= 'ИГРАТЬ';
    spanHealth.innerText= 'ЗДОРОВЬЕ' + i.Health;
    divHealth.appendChild(spanHealth);
    divImg.appendChild(img);
    divName.appendChild(spanName);
    divFood.appendChild(btnFood);
    divClean.appendChild(btnClean);
    divPlay.appendChild(btnPlay); 
    divButtons.className = 'buttons';
    divButtons.appendChild(divFood);
    divButtons.appendChild(divClean);
    divButtons.appendChild(divPlay);
    divPokemon.className = 'pokemon';
    divMain.className = 'divmain';
    divPokemon.appendChild(divName);
    divPokemon.appendChild(divImg);
    divPokemon.appendChild(divHealth);
    divPokemon.appendChild(divButtons);
    divMain.appendChild(divPokemon);
    body.appendChild(divMain);

}