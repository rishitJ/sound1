function startclassifier()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/NzK3AaJxE/model.json', modelready)
}
function modelready()
{
    classifier.classify(gotResults)
}
function gotResults(error, results)
{
    if (error) 
    {
     console.log(error)
    } 
    else 
    }
        console.log(results)
        label = results[0].label
    {    
}