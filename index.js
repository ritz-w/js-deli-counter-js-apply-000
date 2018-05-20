var katzDeliLine = [];

function takeANumber(arrayName, customerName) {
  arrayName.push(customerName);
  var linePosition = arrayName.indexOf(customerName) + 1;
  return "Welcome " + customerName + ", you are number " + linePosition + " in line."
}