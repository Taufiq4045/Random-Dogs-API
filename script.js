let dog = document.getElementById('dog');
let btn_dog = document.getElementById('btn_dog');

btn_dog.addEventListener('click', get_random_dog);

async function get_random_dog() {
  let response = await fetch('https://random.dog/woof.json');
  let data = await response.json();
  let alt = 'DOG';
  dog.innerHTML = `
  <img src = "${data.url}" alt=${alt}>
  `;
}