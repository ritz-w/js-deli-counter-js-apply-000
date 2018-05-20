var katzDeliLine = [];

function takeANumber(arrayName, customerName) {
  arrayName.push(customerName);
  var linePosition = arrayName.indexOf(customerName) + 1;
  return "Welcome " + customerName + ", you are number " + linePosition + " in line."
}


function currentLine(arrayName) {
  var newStringArray = [];
  for (i=0; i<arrayName.length; i++) {
    newStringArray.push(i + 1 + ".");
    newStringArray.push(arrayName[i]);
  }
  return newStringArray;
}

