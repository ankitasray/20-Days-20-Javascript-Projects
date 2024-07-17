const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const result = document.getElementById('result');
const worldTitle = document.getElementById('wordTitle');
const wordDesc = document.getElementById('wordDesc');
const audioButton = document.getElementById('audioButton');

searchButton.addEventListener("click",()=>{
    search();
});

searchInput.addEventListener("keyup",(event)=>{
    if(event.key === "Enter"){
        search();
    }
});

function search(){
    const searchTerm = searchInput.value.trim();
    if(searchTerm === ''){
        alert('Please Enter a word to search..');
        return;
    }

    fetchDictionaryData(searchTerm);
}

async function fetchDictionaryData(searchTerm){
    try{
        const response =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        if(!response.ok){
            throw new Error('Failed to fetch the Data');
        }

        const data = await response.json();
        displayResult(data);

    }catch(error){
        console.log(error);
        alert('An error occured.');
    }
}

function displayResult(data){
    result.style.display = 'block';

    const worddata = data[0];
    worldTitle.textContent = worddata.word;
    wordDesc.innerHTML = `
    <ul>
    ${worddata.meanings.map(meaning=>`
        <li>
            <p><strong>Part of Speech: </strong>${meaning.partOfSpeech}</p>
            <p><strong>Definition: </strong> ${meaning.definitions[0].definition}</p>
        </li>

    `).join('\n')}
    </ul>
    `;
}

audioButton.addEventListener("click",()=>{
    const searchTerm = searchInput.value.trim();
    if(searchTerm === ''){
        alert("please enter a word to search");
        return;
    }
    speak(searchTerm);
});

function speak(word){
    const speech = new SpeechSynthesisUtterance(word);
    speechSynthesis.lang = 'en-US';
    speechSynthesis.volume = 2;
    speechSynthesis.rate = 1;
    speechSynthesis.pitch = 1;
    window.speechSynthesis.speak(speech);
}