/* <span class="loading">Awsome joke is loading......</span>

          <div class="main-joke"></div>

          <button id="btn">Next-Joke</button> */
//   https://icanhazdadjoke.com/

// Fetching data from api by Promises

let loading = document.querySelector('.loading');
let joke = document.querySelector('.main-joke');
let btn = document.getElementById('btn');

// const getJoke = () => {
//   const setHeader = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     })
//     .error(console.error());
// };

// By async-await method

const getJoke = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: 'application/json',
      },
    };

    const res = await fetch('https://icanhazdadjoke.com', setHeader);
    const data = await res.json();
    joke.innerHTML = data.joke;
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener('click', getJoke);

//   console.log('HI');
getJoke();
