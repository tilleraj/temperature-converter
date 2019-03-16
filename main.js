console.log('setup is working');

const input = document.getElementById('tempInput');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

determineConverter = () => {
    if (document.getElementById('C').checked === true) {
        console.log(document.getElementById('tempInput').value);
        console.log('C');
        document.getElementById('tempOutput').value = document.getElementById('tempInput').value;
    } else if (document.getElementById('F').checked === true) {
        console.log(document.getElementById('tempInput').value);
        console.log('F');
        document.getElementById('tempOutput').value = document.getElementById('tempInput').value;
    }
}

const buttonClick = (e) => {
    const buttonId = e.target.id;
    if (buttonId === 'convertBtn') {
        determineConverter();
    }
}

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', buttonClick);
}

const init = () => {
    buttonEvents();
};

init();