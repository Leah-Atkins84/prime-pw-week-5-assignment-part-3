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
