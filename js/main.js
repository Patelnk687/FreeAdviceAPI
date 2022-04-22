//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.adviceslip.com/advice/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.slip.advice)
       
        document.querySelector('h2').innerText = data.slip.advice
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

