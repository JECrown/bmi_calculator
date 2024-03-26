const calculateBtn = document.querySelector('#calculateBmi');
const bmiResults = document.querySelector('#bmiResult');
const form = document.querySelector('form');

calculateBtn.addEventListener('click', (e) => {

    const weight = document.querySelector('#weightField').value;
    const height = document.querySelector('#heightField').value;

    const result = weight / ( height**2 );

    let bmiMsg;
    let msgColor = "text-danger";

    if(result < 18.5){
        bmiMsg = "underweight";
    } else if( result >= 18.5 && result <= 25 ){
        bmiMsg = "Normal";
        msgColor = "text-success";
    } else if( result > 25 && result <= 30 ){
        bmiMsg = "Overweight";
    } else if( result > 30 ){
        bmiMsg = "Obese";
    }

    bmiResults.innerHTML = `<p id="bmiResult"> BMI = <b>${Math.round(result * 100) / 100}</b> (<span class=${msgColor}> <b>${bmiMsg}</b> </span>) </p>`

});

form.addEventListener('submit', e => {
    e.preventDefault();
});