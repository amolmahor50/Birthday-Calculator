

$(document).ready(function() {
    $('#submit').click(function() {

        var startDate = $('#start-date').val();
        var endDate = $('#end-date').val();

        // checked i both are date selected 
        if(!startDate || !endDate) {
            alert("Please Checked and both date");
            return;
        }   

        // Check if the end date is earlier than the start date
        var start = new Date(startDate);
        var end = new Date(endDate);

        // Check if the end date is earlier than the start date
        if(end < start) {
            alert("End date cannot be earlier than start date.");
            return;
        }

        //calculate the date different to milisecond
        var differentTime = end - start;

        // convert the time 
        var milisecondInDay = 1000* 60 * 60 * 24;
        var milisecondInMonth = milisecondInDay * 30;
        var millisecondsInYear = milisecondInDay * 365.25;

        var totalDays = Math.floor(differentTime / milisecondInDay);
        var years = Math.floor(differentTime / millisecondsInYear);
        var months = Math.floor(differentTime / milisecondInMonth) - years * 12;
        var days = totalDays - (years * 365) - (months * 30);
        var hour = totalDays * 24;
        var min = totalDays * 24 * 60;
        var sec = totalDays * 24 * 60 * 60;

        console.log(totalDays)

        // Display the result in the respective span elements
        $("#years").text(years);
        $("#months").text(months);
        $("#days").text(days);

        $("#totalDay").text(totalDays);
        $("#hour").text(hour);
        $("#min").text(min);
        $("#sec").text(sec);

    })
})








