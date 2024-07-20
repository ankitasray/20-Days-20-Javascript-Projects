function cal(){
    const p = parseFloat(document.getElementById('pa').value);
    const i = parseFloat(document.getElementById('ir').value);
    const te = parseFloat(document.getElementById('t').value);

    const ma = p + (p* i * te)/100;

    document.getElementById('res').innerText = `Maturity Amount: ${ma.toFixed(2)}`;


}

document.getElementById('btn').addEventListener('click',cal);