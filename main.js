
function checkOddEven() {
    let numberInput = document.getElementById("oddeven").value; 
    let number = parseInt(numberInput); 
    if (isNaN(number)) {
      alert("Please enter a valid number!");
      return;
    }
    if (number % 2 === 0) {
      alert(number + " is an even number.");
    } else {
      alert(number + " is an odd number.");
    }
  }
  