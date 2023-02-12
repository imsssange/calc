let a = ''; //first number
let b = ''; //second number
let c = '';
let sign = ''; // znak operation
let finish = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%'];

// monitor
const out = document.querySelector('.calc-screen p');

function clearAl () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}


document.querySelector('.ac').onclick = clearAl;
 
document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка клірол
    if(event.target.classList.contains('ac')) return;


    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;

    // якщо нажата клавіша 0-9
    if (digits.includes(key)) {
        if ( b ==='' && sign === ''){
        a += key;
        out.textContent = a;
    }
    else if (a !== '' && b !== '' && finish){
        b= key;
        finish = false;
        out.textContent = b;

    }
    else{
        b+=key;
        out.textContent = b;
    }
    console.table(a,b, sign);
    return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a,b, sign);
        return;
    }

    // finsh onclick
    if (key === '=') {
        if(b==='') b = a;
        switch(sign){
            case"+":
                a = (+a) + (+b);
                break;
            case"-":
                a = a - b;
                break;
            case"X":
                a = a * b;
                break;
            case"/":
            if (b === '0'){
                out.textContent = 'Error'
                a = '';
                b = '';
                sign = '';
                return;
            }
                a = a / b;
                break;
            case"%":
                a = (a * b) /100;
                break;    
        }
        finish = true;
        out.textContent = a;
        console.table(a,b, sign)
    }
}