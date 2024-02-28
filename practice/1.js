// 프로그래머스 - 달리기 시합
function solution(players, callings) {
    var tmp;
    for(let i = 0 ; i<callings.length ; i++)
    {
        let j = 0;
        while(j<players.length)
        {
            if(callings[i]==players[j])
            {
                players[j] = players[j-1];
                players[j-1] = callings[i];
                break;
            }
            else
            {
                j++;
            }
        }
    }
    var answer = [];
    answer = players;
    return answer;
}

testpl = ["mumu", "soe", "poe", "kai", "mine"];
testcal = ["kai", "kai", "mine", "mine"];

console.log(solution(testpl, testcal));