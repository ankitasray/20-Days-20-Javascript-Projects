document.getElementById('calculateBtn').addEventListener("click",calculateTip);

function calculateTip(){
    // const billAmountInput = document.getElementById('billAmount');
    // const serviceRatingSelect = document.getElementById('serviceRating');
    // const splitCountInput = document.getElementById('splitCount');
    // const mealTypeInput = document.getElementById('mealType');
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const serviceRating = parseFloat(document.getElementById('serviceRating').value);
    const splitCount =parseInt(document.getElementById('splitCount').value);
    const mealType = (document.getElementById('mealType').value);

    const tipamountop = document.getElementById('tipAmount');
    const totalamountop = document.getElementById('totalAmount');
    const amountPerPersonop = document.getElementById('amountPerPerson');

    // const billAmount = parseFloat(billAmountInput.valu)
    if(isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)){
        tipamountop.textContent = "Please enter valid number";
        totalamountop.textContent="";
        amountPerPersonop.textContent="";
        return;
    }
    let tip;
    switch(serviceRating){
        case 1:
            tip = billAmount  * 0.05;
            break;
        case 2:
            tip = billAmount* 0.10;
            break;
        case 3:
            tip = billAmount * 0.15;
            break;
        case 4:
            tip = billAmount * 0.20;
            break;
        
    }
    let totalAmount = billAmount + tip;
    let amountPerPerson = totalAmount/splitCount;

    if(mealType === "dinner"){
        tip +=5;
        totalAmount +=5;
        amountPerPerson +=5;
    }

    tipamountop.textContent = `Tip : $${tip.toFixed(2)}`;
    totalamountop.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    amountPerPersonop.textContent = `Amount Per Person : $${amountPerPerson.toFixed(2)}`;
}