var myRoman = "CIII";

console.log(romans(myRoman));

function romans(myNum) {

    var sum = 0;

    for (var i = 0; i < myNum.length; i++) {

        if (myNum[i] === 'M') {

        sum += 1000;
    
        }

        else if (myNum[i] === 'C') {

            sum += 100;

        }

        else if (myNum[1] === 'L') {

            sum += 50;

        }

        else if (myNum[i] === 'I' && myNum[i+1] !== 'I') {

            sum--;

        }

        else if (myNum[i] === 'I') {

            sum ++;

        }

        else {

            console.log("type a roman number");
        
        }
    
    }

    return sum;

}