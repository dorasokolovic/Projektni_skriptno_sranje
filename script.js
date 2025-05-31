function provjeri() {
    alert("fucking nigger");
    const R1 = document.getElementsByName("P1");
    R1.forEach((radio) => {
        if (radio.value === "T1" && radio.checked) {
            radio.style.accentColor = "#00aa00";
        } else if (radio.checked) {
            radio.style.accentColor = "#cc0000";
        }
    });

    let sb = document.getElementById("P2").value;
    if (sb == "B35038")
        event.target.style.background = "#00aa00";
    else
        event.target.style.background = "#cc0000";

    
}