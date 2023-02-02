function siblings(){
let numSiblings= prompt("How many siblings do you have?");

if(numSiblings==1){
    console.log("! sibling");

}
else if (numSiblings>1){
    console.log("more than 1 sibling");
}
else {
    console.log("no sibling");
}
}

siblings();