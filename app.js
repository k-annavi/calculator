

document.getElementById("mybtn").addEventListener("click", () => {

    var num1 = document.getElementById('num1').value;
    
    var num2 = document.getElementById('num2').value;
    
    var result = parseFloat(num1) + parseFloat(num2);
    
    document.getElementById('result').value = result;
    
    })
    
    document.getElementById("mybtn2").addEventListener("click", () => {
    
    var num1 = document.getElementById('num1').value;
    
    var num2 = document.getElementById('num2').value;
    
    var result = parseFloat(num1) - parseFloat(num2);
    
    document.getElementById('result').value = result;
    
    })
    
    document.getElementById("mybtn3").addEventListener("click", () => {
    
    var num1 = document.getElementById('num1').value;
    
    var num2 = document.getElementById('num2').value;
    
    var result = parseFloat(num1) * parseFloat(num2);
    
    document.getElementById('result').value = result;
    
    })
    
    document.getElementById("mybtn4").addEventListener("click", () => {
    
    var num1 = document.getElementById('num1').value;
    
    var num2 = document.getElementById('num2').value;
    
    var result = parseFloat(num1) / parseFloat(num2);
    
    document.getElementById('result').value = result;
    
    })
    
    document.getElementById("mybtn5").addEventListener("click", () => {
    
    var num1 = document.getElementById('num1').value;
    
    var num2 = document.getElementById('num2').value;
    
    var result = parseFloat(num1) % parseFloat(num2);
    
    document.getElementById('result').value = result;
    
    })