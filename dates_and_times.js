/**
 * Verminder de gegeven datum met 3 maanden. Een maand aftrekken van een datum is gedefineerd als dezelfde dag, maar
 * een maand eerder. Een maand eerder dan een maand met dag 31 moet de laatste dag van die maand zijn.
 */
var subtractMonthsFromDate = function (date, aantalMaanden) {
    var newDate = new Date(date);
    var year = newDate.getFullYear();
    var month = newDate.getMonth();
    var day = newDate.getDate();
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var seconds = newDate.getSeconds();
    var milliseconds = newDate.getMilliseconds();

    var newMonths = month - aantalMaanden;

    // jaarovergang
    if (newMonths <= 0) {
        year = newDate.getFullYear() - 1;
    }
    var resultingDate = new Date(year, newMonths, day, hours, minutes, seconds, milliseconds);

    // Door het rollover effect moet in sommige gevallen de dag op 0 worden gezet, dat betekent de laatste dag van de maand.
    if (resultingDate.getDate() < day) {
        resultingDate.setDate(0);
    }

    return resultingDate;
};

var peildatumMinDrieMaanden1 = subtractMonthsFromDate(new Date("2018-05-29"), 3); // expected: new Date("2018-02-28")
var peildatumMinDrieMaanden2 = subtractMonthsFromDate(new Date("2018-01-01"), 3); // expected: new Date("2017-10-01")
var peildatumMinDrieMaanden3 = subtractMonthsFromDate(new Date("2016-10-31"), 1); // expected: new Date("2016-09-30")
