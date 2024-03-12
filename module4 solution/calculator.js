function calculate() {
    // Get input values and operator
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
  
    
    var result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
  
    // Display the result
    document.getElementById('result').value = result;
  }
  
  // Reset result on input change
  document.getElementById('num1').addEventListener('change', function () {
    document.getElementById('result').value = '';
  });
  
  document.getElementById('num2').addEventListener('change', function () {
    document.getElementById('result').value = '';
  });
  
  document.getElementById('operator').addEventListener('change', function () {
    document.getElementById('result').value = '';
  });
  