function SumarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function RestarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2;
    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function DividirNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').textContent = 'Error: División por cero no permitida.';
    } else {
        const result = num1 / num2;
        document.getElementById('result').textContent = `Resultado: ${result}`;
    }
}
    function MultiplicarNumeros() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const result = num1 * num2;
        document.getElementById('result').textContent = `Resultado: ${result}`;
    }
