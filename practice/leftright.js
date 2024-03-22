//var str_list = ["u", "u", "l", "r"];
//var str_list = ["r", "u", "d"];
var str_list = ["r", "u", "d", "u", "u", "l"];
function solution(str_list) {
  var i = 0;
  var answer = [];
  while (i < str_list.length) {
    if (str_list[i] == "l") {
      i--;
      while (i >= 0) {
        answer.push(str_list[i]);
        i--;
      }
      break;
    } else if (str_list[i] == "r") {
      i++;
      while (i < str_list.length) {
        answer.push(str_list[i]);
        i++;
      }
      break;
    }
    i++;
  }

  return answer;
}

console.log(solution(str_list));
