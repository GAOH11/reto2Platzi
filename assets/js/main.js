document.getElementById("share").addEventListener("click", function(){
    document.getElementById('social__tooltip').classList.toggle('mostrar');
});

document.querySelector("#social__tooltip").addEventListener("click", function(){
    document.getElementById('social__tooltip').classList.remove('mostrar');
});