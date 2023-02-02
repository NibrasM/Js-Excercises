function f1(number) {

    //for loop to split the number into digits and to use Math.sqrt for each digit after that concat the result to a string and at the end convert the string to integet using parseint and return thwe result 

    let i = 0;
    let numStr = "" + number;
    let digitStr = "";
    let digit = 0;
    let sqrt = 0;
    let result = "";
    let resultNum=0;

    // for (i = 0; i < numStr.length; i++) {
    //     digitStr = numStr.charAt(i);
    //     digit = parseInt(digitStr);
    //     sqrt = Math.pow(digit, 2);
    //     result += sqrt;
    // }

    const arr = numStr.split("");
    const a= arr.map((elemnt)=>{
        digit=parseInt(elemnt);
        sqrt= Math.pow(digit, 2); 
        return ""+sqrt;
    }); 

    const x= a.join("");
    console.log("test"+ x);


    resultNum= parseInt(result);

    return result;

}

console.log(f1(91));