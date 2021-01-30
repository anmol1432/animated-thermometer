// the call back hell 
function thermoFunc() {
    let temp = document.querySelector('#temp');
    temp.innerHTML = '&#xf2cb';
    temp.style.color = 'lime';
    setTimeout(() => {
        temp.innerHTML = '&#xf2ca';
        setTimeout(() => {
            temp.innerHTML = '&#xf2c9';
            temp.style.color = 'orange';
            setTimeout(() => {
                temp.innerHTML = '&#xf2c8';
                temp.style.color = '#f8410beb';
                setTimeout(() => {
                    temp.innerHTML = '&#xf2c7';
                    temp.style.color = 'red';
                }, 1000);
            }, 1000)
        }, 1000);
    }, 1000);
};

setInterval(() => {
    thermoFunc();
},5000);