function tellDate(){
    const date = new Date();

    var weekday = date.toLocaleString("default", { weekday: "long" });
    let day = date.getDate();
    var month = date.toLocaleString("default", { month: "long" });
    let year = date.getFullYear();

    let currentDate = `Today is ${weekday} the ${day}th of ${month} ${year}`;
    console.log(currentDate); 

}

tellDate();