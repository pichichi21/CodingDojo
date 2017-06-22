var anArray = [1, 2, 3, 4, 5, 6, 7];

console.log(anArray);

console.log(dupes(anArray));

function dupes(arr) {

    var dupedArray = [];
    var comp = arr[0];

    for (var i = 1; i < arr.length; i++) {

        if (comp === arr[i]) {

            myArray.push(comp);
            
        }

        else {

            for (var x = i; x < myArray.length; x++) {

                if (comp === arr[x]) { myArray.push(comp); }
            
            }
       
        }

    }

        else {


        }
        
        

    }

    return dupedArray;

}
