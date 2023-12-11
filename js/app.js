let ivestis = document.querySelector('.ivestis');
let mygtukas = document.querySelector('.mygtukas');

function tekstas(){
    if(ivestis.value.length < 3){
        rezultatas.textContent = ivestis.value.toUpperCase();
    }
    else{
        let simboliai = ivestis.value.split('')

        for(let i = 0; i < 3; i++){
            simboliai[i] = simboliai[i].toLowerCase()
        }
        rezultatas.textContent = simboliai.join('')
    }
   
}

mygtukas.addEventListener('click', tekstas)
  