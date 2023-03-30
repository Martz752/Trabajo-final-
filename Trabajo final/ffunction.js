
document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "- Formación: Técnico en sistemas, Universidad de Buenos Aires. // Experiencias: Operador de depósito (2020-2022)";

});



document.getElementById('boton_ocultar').addEventListener('click', function(){
    document.getElementById('demo').style.display = 'none';
});


