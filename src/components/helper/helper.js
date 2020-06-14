let opers = ["minute", "hour","day-of-month",""];
let suffix = {0:"th",1:"st",2:"nd",3:"rd",4:"th",5:"th",6:"th",7:"th",8:"th",9:"th"};  
let op_values = ["59","23","31",""];
const add_suffix=(num)=>{
  let last = parseInt(num)%10;
  return num+suffix[last];

}
const dash = (exp, num) => {
  let arr = exp.split("-");
  let one = arr[0];
  let two = arr[1];
  return " every " + opers[num] + " from " + one + " through " + two+" ";
};
const backslash = (one, two, num) => {
  return " every " + add_suffix(two) + " " + opers[num] + " from " + one + " through "+op_values[num]+" ";
};
  const getReadableExpression = (expression) => {
  if (!expression) return [null];
  let expArray = expression.split(" ").filter((i) => i);
  let month;
  let days = {
    SUN: "Sunday",
    MON: "Monday",
    TUE: "Tuesday",
    WED: "Wednesday",
    THU: "Thursday",
    FRI: "Friday",
    SAT: "Saturday",
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
  };
  let months = {
    JAN: "January",
    FEB: "February",
    MAR: "March",
    APR: "April",
    MAY: "May",
    JUN: "June",
    JUL: "July",
    AUG: "August",
    SEP: "September",
    OCT: "October",
    NOV: "November",
    DEC: "December",
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  let m,
    h,
    d,
    mon,
    dy,
    mh_flag = 0;
  // minute
  if (expArray[0] === "*") {
    m = " every minute ";
  } else if (expArray[0].match(/-/)) {
    m = dash(expArray[0], 0);
  } else if (expArray[0].match(/\//)) {
    let arr = expArray[0].split("/");
    if (arr[0] === "*") {
      m = " every " + add_suffix(arr[1]) + " minute ";
    } else m = backslash(arr[0], arr[1], 0);
  } else {
    if (expArray[1].match(/^[^*\/-]+$/)) {
      m = parseInt(expArray[0]) < 10 ? "0" + expArray[0] : expArray[0];
    } else {
      m = " minute " + expArray[0]+" ";
    }
  }
  // hour
  if (expArray[1] === "*") {
    h = "";
  } else if (expArray[1].match(/\-/)) {
    h = dash(expArray[1], 1);
    h = " past " + h;
  } else if (expArray[1].match(/\//)) {
    let arr = expArray[1].split("/");
    if (arr[0] === "*") {
      h = " past every " + add_suffix(arr[1]) + " hour ";
    } else h = " past " +backslash(arr[0], arr[1], 1);
  } else {
    if (expArray[0].match(/^[^*\/-]+$/)) {
      h = parseInt(expArray[1]) < 10 ? "0" + expArray[1] : expArray[1];
      h = " "+ h + ":";
      mh_flag = 1;
    } else h = "past hour " + expArray[1];
  }
  // date 
  if(expArray[2]==="*"){
    d = ""
  }
  else if(expArray[2].match(/\-/)){
    d = dash(expArray[2],2);
  }
  else if(expArray[2].match(/\//)){
    let arr = expArray[2].split("/");
    if(arr[0]==="*"){
        d = " on every "+add_suffix(arr[1])+" day-of-month ";
    } 
     else d = " " +backslash(arr[0], arr[1], 2);
  }
  else{
    d = " on day-of-month "+ expArray[2]+" ";
  }
// month 
  if(expArray[3]==="*"){
    mon = ""
  }
  else if(expArray[3].match(/-/)){
    let arr = expArray[3].split("-");
    mon = " in every month from "+ months[arr[0].toUpperCase()]+ " through "+ months[arr[1].toUpperCase()]+" ";
  }
  else if(expArray[3].match(/\//)){
    let arr = expArray[3].split("/");
    if(arr[0]==="*"){
      mon = " in every "+ add_suffix(arr[1]) +" month ";
    }
    else mon = " in every "+ add_suffix(arr[1])+" month from "+ months[arr[0].toUpperCase()]+ " through December ";
  }
  else{
    mon = " in "+ months[expArray[3].toUpperCase()]+" ";
  }
  //day 
  if(expArray[4]==="*"){
    dy = ""
  }
  else if(expArray[4].match(/-/)){
    let arr = expArray[4].split("-");

    dy = " on every day-of-week from "+ days[arr[0].toUpperCase()] +" through "+ days[arr[1].toUpperCase()];
  }
  else if(expArray[4].match(/\//)){
    let arr = expArray[4].split("/");
    if(arr[0]==="*"){
      dy = " on every "+ add_suffix(arr[1])+ " day-of-week ";
    }
    else dy = " on every "+ add_suffix(arr[1])+" day-of-week from "+ days[arr[0].toUpperCase()] + " through Sunday ";
  }
  else {
    dy = " on "+ days[expArray[4].toUpperCase()]+" ";
  }

  if (mh_flag) {
    return [h , m, d,mon,dy,1];
  }
  return [m , h, d,mon,dy,0];
};
const checkForMatch = (exp) => {
  //minute hour date month day(week)
  let minute_digits = "[1-5]?[\\d]";
  let minute_regex = new RegExp(
    `^((${minute_digits})|(\\*)|(\\*\\/${minute_digits}|${minute_digits}\\/${minute_digits})|(${minute_digits}-${minute_digits}))$`,
    "i"
  );
  let hour_digits = "([2][0-3])|([1]?[\\d])";
  let hour_regex = new RegExp(
    `^((${hour_digits})|(\\*)|(\\*\\/(${hour_digits}))|((${hour_digits})\\/(${hour_digits}))|((${hour_digits})-(${hour_digits}))|((${hour_digits})))$`,
    "i"
  );
  let date_digits = "((3[0-1])|([1-2]?[1-9]))";
  let date_regex = new RegExp(
    `^(${date_digits}|(\\*)|(\\*\\/${date_digits})|(${date_digits}\\/${date_digits})|(${date_digits}-${date_digits}))$`,
    "i"
  );
  let month_digits = "((1[0-2])|[1-9])";
  let month_regex = new RegExp(
    `^(${month_digits}|(${month_digits}\\/${month_digits})|(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC|\\*)|(\\*\\/${month_digits})|(${month_digits}-${month_digits}))$`,
    "i"
  );
  let day_regex = new RegExp(
    `^([0-6]|(SUN|MON|TUE|WED|THUR|FRI|SAT|\\*)|([0-6]-[0-6])|(\\*\\/[0-6])|([0-6]\\/[0-6]))$`,
    "i"
  );
  let regex = [minute_regex, hour_regex, date_regex, month_regex, day_regex];
  let arr = exp.split(" ").filter((i) => i);
  let result = [false, false, false, false, false];
  let matchCount = 0;
  arr.map((e, i) => {
    let evalV = e.match(regex[i]);
    if (i > 5) {
      matchCount = 0;
      result[i] = false;
    }
    if (evalV) {
      if (evalV[0].match(/-/)) {
        let a = evalV[0].split("-");
        if (parseInt(a[0]) <= parseInt(a[1])) {
          result[i] = true;
          matchCount += 1;
        }
      } else {
        result[i] = true;
        matchCount += 1;
      }
    }
  });
  return [result, matchCount];
};
exports.checkForMatch = checkForMatch;
exports.getReadableExpression = getReadableExpression;
