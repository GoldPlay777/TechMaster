const search=document.getElementById('search');
const cards=document.querySelectorAll('.card');
search.addEventListener('keyup',()=>{
let value=search.value.toLowerCase();
cards.forEach(card=>{
card.style.display=card.innerText.toLowerCase().includes(value)?'block':'none';
});
});