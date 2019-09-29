sec.addEventListener('click', function(e){
  bl.classList.toggle('open');
  let arr = document.getElementsByClassName('hidden');

  more.addEventListener('click', function(){
    
    for(let i = 0; i< arr.length; i++){
      arr[i].style.display = 'block';
    }
    more.style.display= 'none';
  })

  for(let i = 0; i<arr.length; i++){
    arr[i].style.display = '';
  }
  more.style.display= '';

})
 bl.addEventListener('wheel', function(e){
  let arr = document.getElementsByClassName('hidden');
  if(fig.scrollHeight > 0){ 
    more.style.display= 'none';
    for(let i = 0; i< arr.length; i++){
      arr[i].style.display = 'block';
    }
  }
  else if(fig.scrollHeight){
    for(let i = 0; i<arr.length; i++){
      arr[i].style.display = 'none';
    }
    more.style.display= 'block';
  }
  
})

