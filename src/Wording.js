var Date = require('./DateUtils');
var Wording = {
    weekMessage : getWeekMessage()
};


function getWeekMessage(){
//    var daysPrefix = '今日は';
//    var daysSufix = 'です。'; 
    return Date.jpDate + ' ' + Date.weekName; 
}

module.exports = Wording;
