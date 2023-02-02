function percentageOfWorld1(population){
    let percentage= (population/7900)*100;
return percentage;
}


const percentageOfWorld2= function (population){
    return (population/7900)*100;
}

//China
console.log(percentageOfWorld1(1441).toFixed(1)+"%");
//Syria
console.log(percentageOfWorld1(20).toFixed(1)+"%");
//Jordan
console.log(percentageOfWorld1(30).toFixed(1)+"%");
//Eygpt
console.log(percentageOfWorld1(80).toFixed(1)+"%");


//China
console.log(percentageOfWorld2(1441).toFixed(1)+"%");
//Syria
console.log(percentageOfWorld2(20).toFixed(1)+"%");
//Jordan
console.log(percentageOfWorld2(30).toFixed(1)+"%");
//Eygpt
console.log(percentageOfWorld2(80).toFixed(1)+"%");

