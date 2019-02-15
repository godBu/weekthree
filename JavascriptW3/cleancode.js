/*
    does a thing    
*/
function getShopStatus(day) {
if (day === "Sunday" || day === "Saturday") {
    return checkWeekendStatus;
} else {
    return checkWeekdayStatus;
}
}
function checkWeekendStatus(time) {
if (time > 8 && time < 18 || time > 8 && time < 20) {
    return "shop is open"
} else {
    return "shop is closed"
}
}
function checkWeekdayStatus(time) {
if (time > 6 && time < 20) {
return "shop is open"
} else {
return "shop is closed"
} 
}
console.log(checkWeekdayStatus(19, "Monday"));
console.log(checkWeekendStatus(19, "Sunday"));