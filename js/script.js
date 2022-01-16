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
    Img: 'img/pikachu.png',
    Name: 'Пикачу',
    Health: 100,
    Food: 100,
    Clean: 100,
    Depression: 100,
},
{
    Img: 'img/bulbasaur.png',
    Name: 'Бульбазаур',
    Health: 100,
    Food: 100,
    Clean: 100,
    Depression: 100,
},
{
   Img: 'img/dino.png',
   Name: 'Дино',
   Health: 100,
   Food: 100,
   Clean: 100,
   Depression: 100,
},
{
   Img: 'img/psiduck.png',
   Name: 'Псидак',
   Health: 100,
   Food: 100,
   Clean: 100,
   Depression: 100,
},
{
   Img: 'img/skqirtl.png',
   Name: 'Сквиртл',
   Health: 100,
   Food: 100,
   Clean: 100,
   Depression: 100,
}];


function addPokemon () {
    let i = arr[(Math.floor(Math.random(0, arr.length)*(arr.length+1)))];
    console.log(i.Img)
    const body = document.querySelector('body');
    const divPokemon = document.createElement('div');
    const divHealth = document.createElement('div');
    const spanHealth = document.createElement('span');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const divName = document.createElement('div');
    const spanName = document.createElement('span');
    const divButtons = document.createElement('div');
    const divFood = document.createElement('div');
    const divFood1 = document.createElement('div');
    const spanFood = document.createElement('span');
    const btnFood = document.createElement('button');
    const divClean = document.createElement('div');
    const divClean1 = document.createElement('div');
    const spanClean = document.createElement('span');
    const btnClean = document.createElement('button');
    const divPlay = document.createElement('div');
    const divPlay1 = document.createElement('div');
    const spanPlay = document.createElement('span');
    const btnPlay = document.createElement('button');
    const divMain = document.createElement('div');
    spanName.innerText= i.Name.toUpperCase();
    img.src= i.Img;
    btnFood.innerText= 'КОРМИТЬ';
    btnClean.innerText= 'УБРАТЬ';
    btnPlay.innerText= 'ИГРАТЬ';
    spanHealth.innerText= 'ЗДОРОВЬЕ' + i.Health ;
    spanFood.innerText= 'СЫТОСТЬ'+i.Food;
    spanClean.innerText='ГИГИЕНА'+i.Clean;
    spanPlay.innerText='РАДОСТЬ'+i.Depression;
    divButtons.className = 'buttons';
    divHealth.appendChild(spanHealth);
    divImg.appendChild(img);
    divName.appendChild(spanName);
    divFood1.appendChild(spanFood);
    divFood.appendChild(btnFood);
    divButtons.appendChild(divFood);
    divClean1.appendChild(spanClean); 
    divClean.appendChild(btnClean);
    divButtons.appendChild(divClean);
    divPlay1.appendChild(spanPlay); 
    divPlay.appendChild(btnPlay);
    divButtons.appendChild(divPlay);
    divPokemon.className = 'pokemon';
    divMain.className = 'divmain';
    divPokemon.appendChild(divName);
    divPokemon.appendChild(divImg);
    divPokemon.appendChild(divHealth);
    divPokemon.appendChild(divButtons);
    divMain.appendChild(divPokemon);
    body.appendChild(divMain);
    btnFood.addEventListener('click', () => this.Eating());
    
    this.interval1 = setInterval(() =>{
	
        if (this.Food>0){
            this.Food--;
        }

        
        if (this.Food<50 && this.Food>19) {this.Health--;}
        else{if (this.Food<20) {this.Health=this.Health-3;}}

        if (this.Food<0) {
            this.Food=0;
        }

        this.Regener();
        this.Dead();
        
    },1000);}


    Eating(); 
    {
		this.Food += 10;
		if (this.Food>100) {this.Food =100;}
		this.Regener();
	}
