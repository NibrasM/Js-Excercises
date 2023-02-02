function circleArea(radius){
   
    let area= Math.PI* Math.pow(radius,2);
    return area;
}

console.log(circleArea(2));

console.log(parseFloat(circleArea(2).toFixed(2)));
