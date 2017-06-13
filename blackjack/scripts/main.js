var hand = ["8", "7", "A", "A"];

function handValue(hand) {
  var total = 0;
  var currentValue;
  for (i = 0; i < hand.length; i++) {
    currentValue = hand[i];
    var intValue = 0;
    if (currentValue != "K" && currentValue != "Q" && currentValue != "J" && currentValue != "A") {
      intValue = parseInt(currentValue);
      total += intValue;
    }
    else if (currentValue != "A") {
      intValue = 10;
      total += intValue;
    }
    else {
      if (total < 8) {
        intValue = 11;
        total += intValue;
      }
      else {
        intValue = 1;
        total += intValue;
      }
    }
  }
  return total;
}
