var reformatDate = function(date) {
  let result = [];
  let months = {
      "Jan": '01',
      "Feb": '02',
      "Mar": '03',
      "Apr": '04',
      "May": '05',
      "Jun": '06',
      "Jul": '07',
      "Aug": '08',
      "Sep": '09',
      "Oct": '10',
      "Nov": '11',
      "Dec": '12',
  };
  
  let dateArr = date.split(' ');
  
  result.push(dateArr[2]+'-');
  
  result.push(months[dateArr[1]]+'-');
  
  let day = dateArr[0].replace(/[a-z]/g, '');
  day = parseInt(day) < 10 ? `0${day}` : day;
  
  result.push(day);
  
  return result.join('');
};