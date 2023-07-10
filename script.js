class Cat{
    constructor(name,age,color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    meow(){
        console.log(`${this.name} goes meow moew meow....`);
    }
    indroduceCat(){
        console.log(`My ${this.color} cat called ${this.name} is ${this.age} years old.`);
    }
    flexing(){
        console.log(`${this.name} loves eating and playing.`);
    }
}

const myCat = new Cat('Minu',2, 'black');
const yourCat = new Cat('Yuyu', 3, 'white');
console.log(myCat);
console.log(yourCat);

myCat.meow();
myCat.indroduceCat();
myCat.flexing();

yourCat.meow();
yourCat.indroduceCat();
yourCat.flexing();


class Pirate{
    constructor(captainName, shipName, numCrew){
        this.captainName = captainName;
        this.shipName = shipName;
        this.numCrew = numCrew;
    }
    sail(){
        console.log(`Crew of ${this.captainName} get ready to sail.`);
    }
    fight(){
        console.log(`crew of ${this.shipName} with number of ${this.numCrew} prepare to fight the navy.`);
    }
    plunder(){
        console.log(`${this.captainName} pirates there is a ship and an island ahead prepare to plunder.`);
    }
}



const jollyRoger = [];

const blackPearl = [];

const marry = new Pirate('Luffy', "Going Mary", 7);
const dutchman = new Pirate("Hendrick Van Der Decken","Flying Dutchman ", 120);
const fancy = new Pirate('pirate Henry', 'Fancy', 179);
const galey = new Pirate('William Kidd','Adventure Galley', 124);
const Whydah = new Pirate('Black Sam','Whydah', 146);
const fortune = new Pirate('Bartholomew Roberts','Royal Fortune', 145);



jollyRoger.push(marry, dutchman,fancy);
blackPearl.push(galey,Whydah,fortune);


for(let element of jollyRoger){
    console.log("Captain Name: "+element.captainName, "Ship Name: "+element.shipName,"Crew number: "+element.numCrew);
}

for(let element of blackPearl){
    console.log("Captain Name: "+element.captainName, "Ship Name: "+element.shipName,"Crew number: "+element.numCrew);
}
   