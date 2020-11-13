document.getElementById('btn-show').onclick=function (){
    var inputText = document.getElementById('input-text').value;
    var stageElement = document.getElementById('stage');
    stageElement.style.color='black';
    stageElement.innerText=inputText;

}