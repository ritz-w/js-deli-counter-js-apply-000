var katzDeliLine = [];

function takeANumber(arrayName, customerName) {
  arrayName.push(customerName);
  var linePosition = arrayName.indexOf(customerName) + 1;
  return "Welcome, " + customerName + ", you are number " + linePosition + " in line."
}


function currentLine(arrayName) {
  var newStringArray = [];
  if (arrayName.length > 0) {
    for (var i=0; i<arrayName.length; i++) {
      newStringArray.push(i + 1 + ".");
      newStringArray.push(arrayName[i] + ",");
    }
    return "The current line is: " + newStringArray.join(" ");
    } else {
    return "The line is currently empty."
    }
  }


function nowServing(arrayName) {
  if (arrayName.length > 0) {
  return "Currently serving " + arrayName.shift() + ".";
} else {
  return "There is nobody waiting to be served!"
  }
}
