

var myArray = [4,5,6,7,8,9];
console.log(myArray);

function reverseArray(arr) {

    var j = arr.length - 1;
    var i = 0;

    while (i <= j) {

        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;

    }

    console.log(myArray);

}

reverseArray(myArray);





