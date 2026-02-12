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
//console.log(femaleCharacters);

/*-----------------------------------------------------------------------------------
EVERY
1.Does every character have blue eyes?
2.Does every character have mass more than 40?
3.Is every character shorter than 200?
4.Is every character male?
--------------------------------------------------------------------------------------*/

//1.Does every character have blue eyes?
const allBlueEyes = characters.every((character)=>character.eye_color =='blue');
//console.log(allBlueEyes);

//2.Does every character have mass more than 40?
const allMass = characters.every((character)=>character.mass >40);
//console.log(allMass);

//3.Is every character shorter than 200?
const allShorterThan200 = characters.every((character)=>character.height < 200);
//console.log(allShorterThan200);

//4.Is every character male?
const allMale = characters.every((character)=>character.gender == 'male');
//console.log(allMale);

/*-----------------------------------------------------------------------------------
SOME
1.Is there at least one male character?
2.Is there at least one character with blue eyes?
3.Is there at least one character taller than 200?
4.Is there at least one character that has mass less than 50?
--------------------------------------------------------------------------------------*/

//1.Is there at least one male character?
const atLeastOneMale = characters.some((character)=>character.gender == 'male');
//console.log(atLeastOneMale);

//2.Is there at least one character with blue eyes?
const atLeastOneBlueEyes = characters.some((character)=>character.eye_color == 'blue');
//console.log(atLeastOneBlueEyes);

//3.Is there at least one character taller than 200?
const atLeastOneCharacterTaller = characters.some((character)=>character.height > 200);
//console.log(atLeastOneCharacterTaller);

//4.Is there at least one character that has mass less than 50?
const atLeastOneCharacterLessMass = characters.some((character)=>character.mass < 50);
//console.log(atLeastOneCharacterLessMass);

/*-----------------------------------------------------------------------------------
SORT
1.Sort by name
2.Sort by mass
3.Sort by height
4.Sort by gender
--------------------------------------------------------------------------------------*/
//1.Sort by name
const sortByName = characters.sort((a,b)=>{{
    if(a.name < b.name){return -1;}
    if(a.name > b.name){return 1;}
    return 0;
}});
//console.log(sortByName);

//2.Sort by mass
const sortByMass = characters.sort((a,b)=>{return a.mass-b.mass});
//console.log(sortByMass);

//3.Sort by height
const sortByHeight = characters.sort((a,b)=>{return a.height-b.height});
//console.log(sortByHeight);

//4.Sort by gender
const sortByGender = characters.sort((a,b)=>{
    if(a.gender>b.gender){return 1}
    if(a.gender<b.gender){return -1}
    return 0;
});

//console.log(sortByGender);

/*-----------------------------------------------------------------------------------
REDUCE
1.Get the total mass of all characters
2.Get the total height of all characters
3.Get the total number of characters in all the character names
4.Get the total number of characters by eye color (hint. a map of eye color to count)
--------------------------------------------------------------------------------------*/

//1.Get the total mass of all characters
const totalMass = characters.reduce((acc,value)=>{
    return acc += Number(value.mass);
},0);
//console.log(totalMass);

//2.Get the total height of all characters
const totalHeight = characters.reduce((acc,value)=>{
    return acc += Number(value.height);
},0);
//console.log(totalHeight);

//3.Get the total number of characters in all the character names
const totalCharactersInNames = characters.reduce((acc,value)=>{
    return acc += value.name.length;
},0);   
//console.log(totalCharactersInNames);

//4.Get the total number of characters by eye color (hint. a map of eye color to count)

const totalColorCount = characters.reduce((acc,value)=>{
    if(acc[value.eye_color]){
        acc[value.eye_color]++;
    } else {
        acc[value.eye_color] = 1;
    }
    return acc;
},{});

console.log(totalColorCount);











