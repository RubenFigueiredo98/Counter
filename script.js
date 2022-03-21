    let minutesText = document.getElementById('minutes_1');
    
    let secondsText = document.getElementById('seconds_1');
    

    //Criar um intervalo a cada segundo
    setInterval(counter, 1000);

    // variaveis
    let seconds = 00;
    
    let minutes = 00;




    function counter() {    
    // stuff you want to do every second
    seconds++;
    console.log(seconds)
    if(seconds == 60) {
    return seconds = 0; 
   
    }
     changeNumbers() 
}

  function changeNumbers() {
        secondsText.innerHTML = seconds;
    }