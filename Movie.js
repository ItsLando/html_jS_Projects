// Database for movies and if I have or have not seen it and it's raiting.

var movies = [{
    title: "Braveheart",
    hasWatched: true,
    raiting: 5
  },
{
    title: "Django Unchained",
    hasWatched: false,
    raiting: 5
  },
{
    title: "Kill Bill",
    hasWatched: true,
    raiting: 4.5
 },
{
    title: "Magnificient 7",
    hasWatched: false,
    raiting: 3.7
 }
]

// forEach function to individualy check data in the array to see if I have or
// have not seen it, in addition to the movies raiting.

movies.forEach(function(movies){
  var result = "You have ";
  if (movies.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movies.title + "\" - ";
  result += movies.raiting + " stars.";
  console.log(result);
})
