console.log('setup is working');

const input = document.getElementById('tempInput');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (finalTemp, unit) => {
    let domString = '';
    domString = `<h2>${finalTemp}° ${unit}</h2>`;
    printToDom('tempOutput', domString);
}

const toC = (temp) => {
    let oldTemp = temp;
    let newTemp = (temp - 32) * 5 / 9;
    domStringBuilder(newTemp, 'C');
}

const toF = (temp) => {
    let oldTemp = temp;
    let newTemp = (temp * 9 / 5) + 32;
    domStringBuilder(newTemp, 'F');
}

determineConverter = () => {
    if (document.getElementById('C').checked === true) {
        console.log(document.getElementById('tempInput').value);
        console.log('C');
        // document.getElementById('tempOutput').value = document.getElementById('tempInput').value;
        toC(document.getElementById('tempInput').value);
    } else if (document.getElementById('F').checked === true) {
        console.log(document.getElementById('tempInput').value);
        console.log('F');
        // document.getElementById('tempOutput').value = document.getElementById('tempInput').value;
        toF(document.getElementById('tempInput').value);
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