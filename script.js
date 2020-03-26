let tombol = document.querySelector(".container-tombol");
let layar = document.querySelector("#layar");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");
let temp = '';
let operator = '';
let count = false;
let reset = false;


tombol.addEventListener("click",function(e) {
    let btnClick = e.target;
    let num = btnClick.innerText;

    if (num == '=') {
        layar.value = eval(temp + operator + layar.value)
    }

    else if(num == 'C'){
        layar.value = "";
    }

    else if(num == 'Del'){
        layar.value = layar.value.slice(0,-1);
    }

    else if(btnClick.classList.contains('operator')){
        if(count == true){
            layar.value = eval(temp + operator + layar.value)
            count = false;
        }
        temp = layar.value;
        operator = num; 
        reset = true;
    }

    else{
        if(reset == true){
            layar.value = num;
            reset = false;
            count = true;
        }
        else{
            layar.value = layar.value + num;
        }
    }

});

clear.addEventListener("click",function(e){
    layar.value = "";
})

del.addEventListener("click",function(e){
    layar.value = layar.value.slice(0,-1);
})