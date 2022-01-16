'use strict';
console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished){
  // new object with above properties
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }//end Object
  //push album
  collection.push(album);
  //return object(title, artist, yearPublished)
  return album;
}
//add 6 albums to collection

addToCollection('Zaba', 'Glass Animals', 2014);
console.log(collection);
addToCollection('How to be a Human Being', 'Glass Animals', 2016);
addToCollection('Dream Land', 'Glass Animals', 2020);
addToCollection('Neon Jungle', 'CloZee',2020);
addToCollection('Nouvelle Era', 'CloZee',2021);
addToCollection('Back to Forever', 'Lissie', 2013);
//log the collection array
console.log(collection);

// add function showCollection
function showCollection(array){
//log the number of itmes in array
  console.log(array.length);
//loop over the array and log each album's information
  for (let i of array) {
    console.log(`${i.title} by ${i.artist} published in ${i.yearPublished}`);
  }
}
//test the showCollection function
showCollection(collection);

//add a function named findByartist, parameter=string artist, create empty array for results
function findByartist(artist){
  let artistArray=[];
  for (let i of array){
    if (collection[i].artist ===  artist){
      artistArray.push(collection.artist);
    }
    return true;
  }
console.log(artistArray);
}
//Test the function
artistArray('Glass Animals');



//(i = 0; i<collection.length; i++)
