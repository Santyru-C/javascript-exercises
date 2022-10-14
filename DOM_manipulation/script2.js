const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");});
  
btn.addEventListener('click', function (e) {
console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  
