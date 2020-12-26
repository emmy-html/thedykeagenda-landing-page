// set the date of launch
var launchDate = new Date("Jan 1, 2021 00:10:00").getTime();
// update the countdown every 1 second
var x = setInterval(function() {
    // get today's date & time
    var now = new Date().getTime();
    // find the distance between now and the launch date
    var distance = launchDate - now;
    // time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // display the result in the launchdate element
    document.getElementById("countdown-container").innerHTML = days + " days " + hours + " hrs " + minutes + " mins " + seconds + "s ";
    // display when the countdown is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Enter";
    }
}, 1000);