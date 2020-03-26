let tombol = document.querySelector(".container-tombol");
let layar = document.querySelector("#layar");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");


tombol.addEventListener("click",function(e) {
    let btnClick = e.target;
    let num = btnClick.innerText;
    if(num != 'C' && num != 'Del'){
        layar.value = layar.value + num;
    }
});

clear.addEventListener("click",function(e){
    layar.value = "";
})

del.addEventListener("click",function(e){
    layar.value = layar.value.slice(0,-1);
})