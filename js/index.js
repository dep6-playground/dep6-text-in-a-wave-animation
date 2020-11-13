
var timerId=-1;

document.querySelector("#btn-start").addEventListener('click',function (){
    timerId=setInterval(show,500);
});

document.querySelector("#btn-end").addEventListener('click',function (){
    clearInterval(timerId);
});

var xd=0;
var yd=0;
function show(){
    var inputText = document.getElementById('input-text').value;
    var stageElement = document.getElementById('stage');
    stageElement.innerText="";
    console.log(inputText);
    var radius = 250;
    var angleIncrement = 2 * Math.PI / inputText.length;
    var displacementIncrement = 1000/inputText.length;
    var angle = 0;
    var displacement = 0;
    var offset = 250;

    for (var i = 0; i < inputText.length; i++) {
        var spanElement = document.createElement('span');
        spanElement.className = 'char';
        spanElement.innerText = inputText.charAt(i);
        stageElement.append(spanElement);

        var y =  radius * Math.sin(angle+yd);
        var x =xd+ displacement;

        spanElement.style.left = x + "px";
        spanElement.style.bottom = offset+ y + "px";

        angle += angleIncrement;
        displacement += displacementIncrement;
    }
    stageElement.style.color="black";
    xd += displacementIncrement;
    yd +=angleIncrement;
}