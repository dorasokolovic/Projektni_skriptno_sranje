function provjeri(event) {
    const R1 = document.getElementsByName("P1");
    R1.forEach((radio) => {
        if (radio.value === "T1" && radio.checked) {
            radio.style.accentColor = "#00aa00";
        } else if (radio.checked) {
            radio.style.accentColor = "#cc0000";
        }
    });

    let sbb = document.getElementById("P2").value;
    let sb = document.getElementById("P2");
    if (sbb.toLowerCase() == "b35038")
        sb.style.backgroundColor = "#00aa00";
    else
        sb.style.backgroundColor = "#cc0000";

    const T3_1 = document.getElementById("T3_1");
    const T3_2 = document.getElementById("T3_2");
    const K3_1 = document.getElementById("K3_1");
    const K3_2 = document.getElementById("K3_2");
    if (T3_1.checked || T3_2.checked) {
        if (T3_1.checked) T3_1.style.accentColor = "#0033ff";
        if (T3_2.checked) T3_2.style.accentColor = "#0033ff";
    }
    if (T3_1.checked && T3_2.checked) {
        T3_1.style.accentColor = "#00aa00";
        T3_2.style.accentColor = "#00aa00";
    }
    if (K3_1.checked) K3_1.style.accentColor = "#cc0000";
    if (K3_2.checked) K3_2.style.accentColor = "#cc0000";

    let dr = document.getElementById("P4").value;
    let drr = document.getElementById("P4");
    if (dr == "27.4.") {
        drr.style.background = "#00aa00";
    }
    else {
        drr.style.background = "#cc0000";
    }

    let pg = document.getElementById("P5").value;
    let pgg = document.getElementById("P5");
    if (pg.toLowerCase() == "bass") {
        pgg.style.background = "#00aa00";
    }
    else {
        pgg.style.background = "#cc0000";
    }

    const R6 = document.getElementsByName("P6");
    R6.forEach((radio) => {
        if (radio.value === "T6" && radio.checked) {
            radio.style.accentColor = "#00aa00";
        } else if (radio.checked) {
            radio.style.accentColor = "#cc0000";
        }
    });

    let gbb = document.getElementById("P7").value;
    let gb = document.getElementById("P7");
    if (gbb.toLowerCase() == "cliff burton")
        gb.style.backgroundColor = "#00aa00";
    else
        gb.style.backgroundColor = "#cc0000";

    const T8_1 = document.getElementById("T8_1");
    const T8_2 = document.getElementById("T8_2");
    const K8 = document.getElementById("K8");
    if (T8_1.checked || T8_2.checked) {
        if (T8_1.checked) T8_1.style.accentColor = "#0033ff";
        if (T8_2.checked) T8_2.style.accentColor = "#0033ff";
    }
    if (T8_1.checked && T8_2.checked) {
        T8_1.style.accentColor = "#00aa00";
        T8_2.style.accentColor = "#00aa00";
    }
    if (K8.checked) K8.style.accentColor = "#cc0000";

    let nr = document.getElementById("P9").value;
    let nrr = document.getElementById("P9");
    if (nr == "536") {
        nrr.style.background = "#00aa00";
    }
    else {
        nrr.style.background = "#cc0000";
    }

    let gv = document.getElementById("P10").value;
    let gvv = document.getElementById("P10");
    if (gv.toLowerCase() == "da") {
        gvv.style.background = "#00aa00";
    }
    else {
        gvv.style.background = "#cc0000";
    }
}