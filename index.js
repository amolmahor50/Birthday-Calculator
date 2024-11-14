

$(document).ready(function () {
    $('#submit').click(function () {

        var startDate = $('#start-date').val();
        var endDate = $('#end-date').val();

        if (startDate && endDate) {
            var start = new Date(startDate);
            var end = new Date(endDate);

            if (start > end) {
                var tempDate = start;
                var start = end;
                var end = tempDate;
            }

            var years = end.getFullYear() - start.getFullYear();
            var months = end.getMonth() - start.getMonth();
            var days = end.getDate() - start.getDate();

            console.log(years, months, days);

            if (days < 0) {
                months--;
                days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            var hour = days * 24;
            var min = days * 24 * 60;
            var sec = days * 24 * 60 * 60;

            // Display the result in the respective span elements
            $("#years").text(years);
            $("#months").text(months);
            $("#days").text(days);

            $("#hour").text(hour);
            $("#min").text(min);
            $("#sec").text(sec);

        }

    })
})









