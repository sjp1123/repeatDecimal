var bunja = document.getElementById("bunja");
var bunmo = document.getElementById("bunmo");
var submit_b = document.getElementById("submit_b");
var answer_b = document.getElementById("answer");

submit_b.addEventListener("click", function (e) {
    // ˙
    e.preventDefault();
    var ja_num = bunja.value;
    var mo_num = bunmo.value;

    var namuzis_in = new Set([]);
    var namuzis = []
    var moxs = [];

    while (true) {
        var mox = Math.floor(ja_num / mo_num);
        var namuzi = ja_num % mo_num;

        moxs.push(mox);

        if (namuzi == 0) {
            break;
        }

        if (namuzis_in.has(namuzi)) {
            break
        }

        namuzis.push(namuzi);
        namuzis_in.add(namuzi);

        ja_num = namuzi * 10;
    }

    var namuzi_num = 0
    for (i = 0; i < namuzis.length; i++) {
        if (namuzis[i] == namuzi) {
            namuzi_num = i + 1;
            break
        }
    }

    var decimal = "";
    decimal += moxs[0].toString();

    if (moxs.length > 1) {
        decimal += ".";
    }

    for (i = 1; i < moxs.length; i++) {
        if (i == namuzi_num) {
            decimal += "˙";
        }
        decimal += moxs[i].toString();
    }

    if (namuzi_num) {
        decimal += "˙";
    }

    answer_b.textContent = decimal;
});
