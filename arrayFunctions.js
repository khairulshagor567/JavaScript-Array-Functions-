const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

/*---------------------------------------------------------------
MAP
1.Get an array of all names
2.Get an array of all heights
3.Get an array of objects with just name and height properties
4.Get an array of all first names
----------------------------------------------------------------*/

//1.Get an array of all names
const allNames = characters.map((character)=>character.name);
//console.log(allNames);

//2.Get an array of all heights
const allHeights = characters.map((character)=>character.height);
//console.log(allHeights);

//3.Get an array of objects with just name and height properties
const nameHeights = characters.map((character)=>{
    return {
        name:character.name,
        height:character.height
    }
});
//console.log(nameHeights);

//4.Get an array of all first names
const firstNames = characters.map((character)=>{
    return character.name.split(' ')[0];
});
//console.log(firstNames);

/*-----------------------------------------------------------------------------------
REDUCE
1.Get the total mass of all characters
2.Get the total height of all characters
3.Get the total number of characters in all the character names
4.Get the total number of characters by eye color (hint. a map of eye color to count)
--------------------------------------------------------------------------------------*/

//1.Get the total mass of all characters

/*-----------------------------------------------------------------------------------
FILTER
1.Get characters with mass greater than 100
2.Get characters with height less than 200
3.Get all male characters
4.Get all female characters
--------------------------------------------------------------------------------------*/
//1.Get characters with mass greater than 100
const massGraterThan100 = characters.filter((character)=>{
    return character.mass >100;
});
//console.log(massGraterThan100);

//2.Get characters with height less than 200

const heightLessThan200 = characters.filter((character)=>{
    return character.height < 200;
});
//console.log(heightLessThan200);

//3.Get all male characters
const maleCharacters = characters.filter((character)=>{
    return character.gender === 'male';
});
//console.log(maleCharacters);

//4.Get all female characters
const femaleCharacters = characters.filter((character)=>{
    return character.gender === 'female';
});
console.log(femaleCharacters);