// renderer.js

const input = document.getElementById('input');
const output = document.getElementById('output');
const toast = document.getElementById('toast');

function submitInput() {
    let inputData = input.value;
    const inputJSON = JSON.parse(inputData);
    const compactInputData = JSON.stringify(inputJSON, null, 0);
    const outputData = { "data": compactInputData };
    output.value = JSON.stringify(outputData);
}

async function copyOutput() {
    try {
        await navigator.clipboard.writeText(output.value);
        showToast();
    } catch (err) {
        console.error('Failed to copy output: ', err);
    }
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 1000);
}
