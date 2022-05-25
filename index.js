window.onload = async () => {
  console.log('hello world');
  let res = await fetch ('https://swapi.dev/api/species', {
    method: 'GET',
  });
  let data = await res.json();
  console.log(data);
  document.querySelectorAll('.feedback-type').forEach((element) => element.addEventListener('click', toggleMenuItem));
};

const toggleMenuItem =  ({ target }) => {
  let elementClass = target.getAttribute('class').split(' ');
  if (elementClass.indexOf('active') < 0) {
    const activeElement = document.querySelector('.active')
    activeElement.classList.remove('active');
    target.classList.add('active');
  }
}