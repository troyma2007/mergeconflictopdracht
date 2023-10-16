const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
<<<<<<< HEAD
    return ["Toward those short trees","We saw a batman descending","In the hour of Summer"]
=======
    return ["Toward those short trees","We saw planet descending","In the hour of Summer"]
>>>>>>> feature
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()