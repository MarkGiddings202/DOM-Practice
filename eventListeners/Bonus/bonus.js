/*
    There is an argument that gets passed to our
    even handler function by default.

    1. What is it and what types of properties 
       does it have?

    2. Does it change depending on the event type?

    HINT* Look this up on MDN/Google
*/

let btn = document.querySelector("button")


btn.onclick = (e)=>{
    console.log('click')
    console.log(e)
}

// btn.addEventListener('click' , (e)=>{
//     console.log(e)
// })
