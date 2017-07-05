function loadPage() {
  
   document.getElementById("btnRun").addEventListener("click", run);
}

function run() {

    alert(Factorial(6));

}

function Factorial(num) {

  if (num == 1)
  {
    return num;
  }
  return num * Factorial(num-1);
  
}
