var sum = 0;
var count = 0;
function add(x)
{
  sum = sum + x;
  count++;
  print();
}
function print()
{
  document.getElementById("numSum").innerHTML = "<hr> Sum : " + sum;
  document.getElementById("numCount").innerHTML = "Count is : " + count;
}
function clearIt()
{
  document.getElementById("numSum").innerHTML = "";
  document.getElementById("numCount").innerHTML = "";
  count = 0;
  sum = 0;
}
