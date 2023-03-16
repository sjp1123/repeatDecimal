var bunja = document.getElementById("bunja");
var bunmo = document.getElementById("bunmo");
var submit = document.getElementById("submit_b");
var answer = document.getElementById("answer");

submit.addEventListener("click", function (e) {
    // ˙
    e.preventDefault();
    var ja_num = bunja.value;
    var mo_num = bunmo.value;

    var namuzis = [];
    var moxs = [];

    var is_repeating = true;

    namuzi_num = 0;
    while (true) {
        var mox = parseInt(ja_num / mo_num);
        var namuzi = ja_num % mo_num;

        moxs.push(mox);

        if (namuzi == 0) {
            is_repeating = false;
            break;
        }

        var break_true = false;

        for (i = 0; i < namuzis.length; i++) {
            if (namuzis[i] == namuzi) {
                var namuzi_num = i + 1;
                break_true = true;
            }
        }

        if (break_true) {
            break;
        }

        namuzis.push(namuzi);

        ja_num = namuzi * 10;
    }

    var decimal = "";
    decimal += moxs[0].toString();

    if (moxs.length > 1) {
        decimal += ".";
    }

    for (i = 1; i < moxs.length; i++) {
        if (i == namuzi_num && is_repeating) {
            decimal += "˙";
        }
        decimal += moxs[i].toString();
    }
    if (is_repeating) {
        decimal += "˙";
    }

    answer.textContent = decimal;
});
