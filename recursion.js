var nums = [1,2,3,4];
function loadPage() {
  
   document.getElementById("btnRun").addEventListener("click", run);
}

function run() {

    alert(Factorial(6));
    alert("result of recursion adding all elements of array " + nums + " is: " + addArrayElements(nums.length - 1));


}

function Factorial(num) {

  if (num == 1)
  {
    return num;
  }
  return num * Factorial(num-1);
  
}

function addArrayElements(num) {
  if (num == 0)
  {
    return nums[num];
  }
  return nums[num] + addArrayElements(--num);
  
}