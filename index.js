const btnAdvice = document.querySelector(".btn-generator-advice");
const adviceMessage = document.querySelector(".advice-random");
const id = document.querySelector(".advice-number");




btnAdvice.addEventListener('click', () => {
    const url = 'https://api.adviceslip.com/advice';

    fetch(url).then((response)=>
    response.json().then((data)=> 
    
    {
        adviceMessage.innerHTML =  `${data.slip.advice}`
        id.innerHTML = `Advice #${data.slip.id}`
    }

    ));

})