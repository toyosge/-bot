var time = Date.now();
var nowTime = new Date(time);
var nowMonth = nowTime.getMonth()+1;
var nowDate  = nowTime.getDate();
var nowWeek  = nowTime.getDay();

var ToDay = {
   month : nowMonth,
   date  : nowDate,
   week  : nowWeek,
   jpDate : getJpDateString(),
   jpTime : getJpTimeString(),
   weekName : getWeekName()
};

function getJpDateString(){
  return nowMonth + '月' + nowDate + '日';
}

function getWeekName(){
  return getJpMonth(nowWeek);
}

function getJpTimeString(){
  var hour = nowTime.getHours();
  var min = nowTime.getMinutes();
  return hour + '時' + min + '分';
}

function getJpMonth(weekNum){
  switch(weekNum){
   case 0:
       return '日曜日';
   case 1:
       return  '月曜日';
   case 2:
       return  '火曜日';
   case 3:
       return  '水曜日';
   case 4:
       return  '木曜日';
   case 5:
       return  '金曜日';
   case 6:
       return  '土曜日';
  }
}

module.exports = ToDay;

