var Date = require('./DateUtils');
var Wording = {
    weekMessage : getWeekMessage()
};


function getWeekMessage(){
//    var daysPrefix = '$B:#F|$O(B';
//    var daysSufix = '$B$G$9!#(B'; 
    return Date.jpDate + ' ' + Date.weekName; 
}

module.exports = Wording;
