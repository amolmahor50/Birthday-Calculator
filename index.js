
// declaration and initilization variable
let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", ()=>{
    // create date objetct inpute value 
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);
    let span = document.querySelectorAll("span");

    console.log(date1);
    
    //check if the input dates are valid if valid calculate the different..
    if(date1.getTime() && date2.getTime()){
        let timeDifferent = date2.getTime()- date1.getTime();
        let dayDifferent = timeDifferent / (1000 * 3600 * 24);

        span[0].innerHTML = dayDifferent;
        span[1].innerHTML = dayDifferent*24;
        span[2].innerHTML = dayDifferent*24*60;
        span[3].innerHTML = dayDifferent*24*60*60;

    }

})




