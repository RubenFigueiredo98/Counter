    let minutesText = document.getElementById('minutes_1');
    let minutesText2 = document.getElementById('minutes_2');
    let secondsText = document.getElementById('seconds_1');
    let secondsText2 = document.getElementById('seconds_2');

    //Criar um intervalo a cada segundo
    setInterval(counter, 1000);

    // variaveis
    let seconds = 0;
    let seconds_2 = 0;
    let minutes = 0;
    let minutes_2 = 0;


    //função do contador
    function counter() { 

        // Começar o contador
        seconds++;

        //Logica para incrementar por 1 minutos e segundos
        if(seconds == 10) {
        seconds = 0;
        seconds_2 ++  
        };

        if(seconds_2 == 6) {
            seconds_2 = 0;
            minutes_2 ++
        };

        if(minutes_2 == 10) {
            minutes_2 = 0;
            minutes ++  
        };

        if(minutes == 6) {
            minutes = 0
        };

        changeNumbers() 
    };

        //Função para alterar texto do ecra de acordo com os segundos e minutos.
    function changeNumbers() {
        secondsText.innerHTML = seconds;
        secondsText2.innerHTML = seconds_2;
        minutesText2.innerHTML = minutes_2;
        minutesText.innerHTML = minutes;
    };