const getReadableExpression = (expression) => {
  if (!expression) return [null];
  let expArray = expression.split(" ").filter((i) => i);
  let time, month;
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
  if (expArray[0] === "*" && expArray[1] === "*") time = "every minute  ";
  else if (expArray[0] === "*") time = "every minute past hour " + expArray[1];
  else if (expArray[1] === "*")
    time = "minute " + (expArray[0] < "10" ? "0" + expArray[0] : expArray[0]);
  else
    time =
      "" +
      (expArray[1] < "10" ? "0" + expArray[1] : expArray[1]) +
      ":" +
      (expArray[0] < "10" ? "0" + expArray[0] : expArray[0]);

  if (expArray[2] === "*") month = "";
  else month = " on day-of-month " + expArray[2];
  if (expArray[4] === "*");
  else month += " and on day " + days[expArray[4].toUpperCase()];
  if (expArray[3] === "*");
  else month += " in " + months[expArray[3].toUpperCase()];
  return [time, month];
};
const checkForMatch = (exp) => {
  //minute hour date month day(week)
  let minute_digits = "[1-5]?[\\d]";
  let minute_regex = new RegExp(
    `^((${minute_digits})|(\\*)|(\\*\\/${minute_digits})|(${minute_digits}\\/${minute_digits})|(${minute_digits}-${minute_digits}))$`,
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
  let day_regex = new RegExp(`^([0-6]|(SUN|MON|TUE|WED|THUR|FRI|SAT|\\*)|([0-6]-[0-6])|(\\*\\/[0-6])|([0-6]\\/[0-6]))$`, "i");
  let regex = [
    minute_regex,
    hour_regex,
    date_regex,
    month_regex,
    day_regex,
  ];
  let arr = exp.split(" ").filter((i) => i);
  let result = [false, false, false, false, false];
  let matchCount = 0;
  arr.map((e, i) => {
    let evalV = e.match(regex[i]);
    if (i > 5) {
      matchCount = 0;
    }
    if (evalV) {
      if (i === 0 && evalV[4]) {
      }
      result[i] = true;
      matchCount += 1;
    } else {
      result[i] = false;
    }
  });
  return [result, matchCount];
};
exports.checkForMatch = checkForMatch;
exports.getReadableExpression = getReadableExpression;
