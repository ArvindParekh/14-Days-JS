const dateTime = new Date();
const todaysDate = dateTime.toDateString();
const currentMonthIndex = dateTime.getMonth();
const monthsValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const lastDayOfMonth = new Date(new Date().getFullYear(), currentMonthIndex + 1, 0).getDate();
const firstDayOfMonth = new Date(new Date().getFullYear(), currentMonthIndex, 1).getDay() - 1;

let daysArrayToInsert = "";

console.log(firstDayOfMonth, lastDayOfMonth);

$('p').text(todaysDate);
$('h1').text(monthsValues[currentMonthIndex]);

for(let i=firstDayOfMonth; i>0; i--){
    daysArrayToInsert = daysArrayToInsert + '<div class="empty"></div>';
}

for(let j=firstDayOfMonth; j<=lastDayOfMonth; j++){
    if(j === dateTime.getDate()) {
        daysArrayToInsert += `<div class="todaysDate">${j}</div>`;
      } else {
        daysArrayToInsert += `<div>${j}</div>`;
      }
}

$('.days').html(daysArrayToInsert);


$('.days div').on('click', function(e){
    console.log($(e.target));
})