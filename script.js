const counter=document.querySelector('.counter');
const loadingBarFront=document.querySelector('.loadingBarFront');
const loadingText=document.querySelector('.loadingText');
const confirmLogo=document.querySelector('.confirmLogo');

let number = 0;


updateNumber();

function updateNumber(){
    
    counter.textContent = number + '%';
    loadingBarFront.style.width = number +'%';
    
    number++;   
    if(number < 101 )
    {
        setTimeout(updateNumber,15);
    }
    if(number == 100)
    {
        loadingText.textContent = 'Page loading is completed successfully';
        confirmLogo.style.display = 'block';
    }
}

