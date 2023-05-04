const classes = ["clap", "hithat","kick","openhat","boom","ride","snare","tom","tink"];
for (i = 0 ; i <= classes.length ; i++ ){
 
  if (document.querySelector(`.${classes[i]}`)){
    const playSound =() => {
  
      div.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
     console.log('Clap Div was clicked!');
    }   
    const removeTransition =() => {
    div.classList.remove('playing');
    console.log('transition ended');
    }
    const div = document.querySelector(`.${classes[i]}`);
    const audio = document.querySelector(`audio[class="${classes[i]}"]`); 
    div.addEventListener('click', playSound);
    div.addEventListener('transitionend', removeTransition);
  }
} 