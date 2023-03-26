var first = document.getElementById("first");
var repeat = document.getElementById("repeat");
var submit_s = document.getElementById("submit_s");
var answer_s = document.getElementById("answer_");

submit_s.addEventListener("click", function (e) {
    e.preventDefault();

    let first_num = String(first.value);
    let repeat_num = String(repeat.value);

    // first num, repeat num 처리
    let dotPosition = first_num.indexOf(".");
    let lenOfFN = first_num.length - 1;
    let gob = lenOfFN - dotPosition;

    if (dotPosition === -1) {
        // 점이 없다면
        lenOfFN += 1;
        gob = 0;
    }

    first_num = parseFloat(first_num);

    let lenOfRP = repeat_num.length;
    repeat_num = parseInt(repeat_num);

    // 분자 분모 계산산
    let bunja =
        first_num * 10 ** (lenOfRP + gob) + repeat_num - first_num * 10 ** gob;
    let bunmo = 10 ** (gob + lenOfRP) - 10 ** gob;

    let buns = YakBun(bunja, bunmo); // 약분

    let answer_str = buns[0] + "/" + buns[1];

    if (buns[1] == 1) {
        // 분모가 1이라면
        answer_str = buns[0].toString(); // 분모 없애기
    }

    answer_s.textContent = answer_str; // 텍스트 업데이트
});

function YakBun(bunja, bunmo) {
    // 약분 함수
    let gcd = 1;

    for (let i = 2; i <= Math.min(bunja, bunmo); i++) {
        if (bunja % i === 0 && bunmo % i === 0) {
            gcd = i;
        }
    }

    bunja /= gcd;
    bunmo /= gcd;

    return [bunja, bunmo];
}
