const options =[
    {id:"opt1",text:"Taylor Swift", votes:0},
    {id:"opt2",text:"Lana Del Ray", votes:0},
    {id:"opt3",text:"Ariana Grande", votes:0},
    {id:"opt4",text:"Olivia Rodrigo", votes:0},
]

function submit(){
    const selectedOpt = document.querySelector('input[name="poll"]:checked');
    console.log(selectedOpt.value);

    if(!selectedOpt){

        alert("please select an option!");
        return;
    }

    const optionId = selectedOpt.value;
    const selectedobj = options.find((option)=> option.id === optionId);
    console.log(selectedobj);
    if(selectedobj){
        selectedobj.votes++;
        displayResult();
    }

}

function displayResult(){
    const result = document.getElementById('result');
    result.innerHTML = "";

    options.forEach((option)=>{
        const percentage = ((option.votes/getTotalVotes())*100).toFixed(2)|| 0;
        const barWidth = percentage >0?  percentage+ "%" : "0%";

        const optionRes = document.createElement("div");
        optionRes.className= "option-result";
        optionRes.innerHTML = `
            <span class="option-text">${option.text}</span>
            <div class = "bar-container">
                <div class="bar" style="width: ${barWidth};"></div>
            </div>
            <span class="percentage">${percentage}</span>
        `;
        result.appendChild(optionRes);
    })


}
function getTotalVotes(){
    return options.reduce((total,option)=>total + option.votes,0);
}

displayResult();