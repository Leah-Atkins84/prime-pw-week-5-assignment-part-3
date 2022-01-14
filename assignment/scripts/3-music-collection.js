console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished){
  // new object with above properties
  let object = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,

  }//end Object
  collection.push(object);
  //return an object(title, artist, yearPublished)
  return object;
}
