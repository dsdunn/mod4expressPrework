const button = document.querySelector('#button');
const header = document.querySelector('h1');


button.addEventListener('click', () => {
  header.innerHTML = "bwaaahahahaha!";
  console.log('change');
});