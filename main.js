const input = document.getElementById('tempInput');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (finalTemp, unit) => {
    let domString = '';
    let tempColor = ''
    if (unit === 'C') {
        if (finalTemp > 32) {
            tempColor = 'hot'
        } else if (finalTemp < 0) {
            tempColor = 'cold'
        } else {
            tempColor = 'goldilocks'
        }
    } else if (unit === 'F') {
        if (finalTemp > 90) {
            tempColor = 'hot'
        } else if (finalTemp < 32) {
            tempColor = 'cold'
        } else {
            tempColor = 'goldilocks'
        }
    }
    domString = `<h2 class=${tempColor}>${finalTemp}° ${unit}</h2>`;
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

const determineConverter = () => {
    if (document.getElementById('C').checked === true) {
        toC(document.getElementById('tempInput').value);
    } else if (document.getElementById('F').checked === true) {
        toF(document.getElementById('tempInput').value);
    }
}

const clear = () => {
    input.value = '';
    document.getElementById('tempOutput').innerHTML = '';
}

const buttonClick = (e) => {
    const buttonId = e.target.id;
    if (buttonId === 'convertBtn') {
        determineConverter();
    } else if (buttonId === 'clearBtn') {
        clear();
    }
}

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', buttonClick);
    document.getElementById('clearBtn').addEventListener('click', buttonClick);
}

const addKeydownConvert = (elementID) => {
    document.getElementById(elementID).addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            determineConverter();
        }
    });
}

const keydownEvents = () => {
    addKeydownConvert('tempInput');
    addKeydownConvert('C');
    addKeydownConvert('F');
    addKeydownConvert('convertBtn');
}

const init = () => {
    buttonEvents();
    keydownEvents();
};

init();