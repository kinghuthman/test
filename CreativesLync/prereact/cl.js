const welcomeS = document.querySelector('.welc');

welcomeS.addEventListener('mouseover', (event)=> {
    alert('we have awoken');
});

const button = document.querySelector('.buttons .box1');

button.addEventListener('mouseover', event => {
    
    event.target.style.height = '60px'
});
    button.addEventListener('mouseleave', event => {
        
        event.target.style.height = '40px';
               
      });

      const buttonTwo = document.querySelector('.buttons .box2');

buttonTwo.addEventListener('mouseover', event => {
    
    event.target.style.height = '60px'
});
    buttonTwo.addEventListener('mouseleave', event => {
        
        event.target.style.height = '40px';
        event.stopPropagation();         
      });

      const buttonThree = document.querySelector('.buttons .box3');

      buttonThree.addEventListener('mouseover', event => {
          
          event.target.style.height = '60px'
      });
          buttonThree.addEventListener('mouseleave', event => {
              
              event.target.style.height = '40px';
              event.stopPropagation();         
            });
      