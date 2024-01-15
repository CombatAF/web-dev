const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn')

// const generatejokes = () => {
//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// jokeBtn.addEventListener('click', generatejokes);
// generatejokes();

// Now using async await 
const generatejokes = async () => {
    // try is used to catch errors 
    try{
        
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
    
       const res = await  fetch('https://icanhazdadjoke.com', setHeader)
       const data = await res.json();
       jokes.innerHTML = data.joke
    }catch(err){
        console.log(`The error is ${err}`);
    }
        
   
   

}

jokeBtn.addEventListener('click', generatejokes);
generatejokes();