document.getElementById("bmiForm").addEventListener('submit',function(e){
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('he-f').value);
    const heightInches = parseInt(document.getElementById('he-i').value);
    const weight = parseInt(document.getElementById('W').value);

    if(gender && age && heightFeet && heightInches && weight){
        const heightInMeters = ((heightFeet * 12)+ heightInches) * 0.0254;
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById("res");
        
        let category = '';
        if(bmi < 18.5){
            category = 'Under Weight';
        }else if(bmi >= 18.5 && bmi <24.9){
            category = 'Normal Weight';
        }else if(bmi >=25 && bmi <= 29.9){
            category = 'Over Weight';
        }else{
            category = 'Obese'
        }

        let resMsg = 'Your Bmi:' + bmi.toFixed(2) + '<br>';
        resMsg += 'Category:' + category;

        resultElement.innerHTML = resMsg;
    }
});