let numbers = [4, 5, 1, 8, 9, 2];
console.log("Linked!");
// create function that puts these in order by repeatedly comparing pairs:

function bubbleSort(list){
  var done = false;
  while (done === false) {
    done = true;

    for (i = 0; i <= list.length -1; i++) {
      if (list[i] > list[i+1]) {
        var b = list[i+1];
        list[i+1] = list[i];
        list[i] = b;
        done = false;
      };
    };
  };
    return list;
};

bubbleSort(numbers);


// to turn var numbers in to a sorted array.
//
