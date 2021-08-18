function getPin() {
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }else{
        console.log('got 3 digit and calling Again');
        return getPin();
        
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    console.log(pin);
}

document.getElementById('key-pad').addEventListener('click',function (event) {
   const number = event.target.innerText;
   const calcInput = document.getElementById('type-numbers');
   if (isNaN(number)) {
       if (number == 'C') {
           calcInput.value = '';
       }
   }else{
   
    const previousNum = calcInput.value;
    const newNum = previousNum + number
    calcInput.value = newNum;
   }
   
});

function varifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('type-numbers').value;
    const passBtn = document.getElementById('notify-pass');
    const failBtn = document.getElementById('notify-fail');
    if (pin == typeNumbers) { 
        passBtn.style.display = 'block';
        failBtn.style.display = 'none';
    }else{
        
        passBtn.style.display = 'none';
        failBtn.style.display = 'block';
    }
}