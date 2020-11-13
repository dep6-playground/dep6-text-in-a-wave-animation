document.getElementById('btn-show').onclick=function (){
    var inputText = document.getElementById('input-text').value;
    var stageElement = document.getElementById('stage');
    console.log(inputText);
    var radius = 250;
    var angleIncrement = 2 * Math.PI / inputText.length;
    var displacementIncrement = 1000/inputText.length;
    var angle = 0;
    var displacement=0;
    var offset = 250;

    for (var i = 0; i < inputText.length; i++) {
        var spanElement = document.createElement('span');
        spanElement.className = 'char';
        spanElement.innerText = inputText.charAt(i);
        stageElement.append(spanElement);

        var y = radius * Math.sin(angle);
        var x = displacement;

        spanElement.style.left = x + "px";
        spanElement.style.bottom = offset+ y + "px";

        angle += angleIncrement;
        displacement += displacementIncrement;
    }




}