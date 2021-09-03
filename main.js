function start_classification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sVxiG3bM-/model.json', modelready);
}
function modelready(){
classifier.classify(gotresult);
}
function gotresult(error,results){
console.log('gotresult');
}
