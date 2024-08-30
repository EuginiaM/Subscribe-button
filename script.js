
const subscribeButton = document.querySelector('.subscribe-button');


subscribeButton.addEventListener('click', ()=>{
  if(subscribeButton.innerHTML === 'Subscribe'){
    subscribeButton.innerHTML = 'Subscribed';
  }else{
    subscribeButton.innerHTML ='Subscribe';
  }
})