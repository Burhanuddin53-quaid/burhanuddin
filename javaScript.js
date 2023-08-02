function grade() {
    const scoreInput = document.getElementById("input").value;
    const score = parseInt(scoreInput, 10);

    if (isNaN(score)) {
        document.getElementById("output").value = "Invalid Input";
    } else if (score < 40) {
        document.getElementById("output").value = "F";
    } else if (score < 50) {
        document.getElementById("output").value = "E";
    } else if (score < 60) {
        document.getElementById("output").value = "D";
    } else if (score < 70) {
        document.getElementById("output").value = "C";
    } else if (score < 80) {
        document.getElementById("output").value = "B";
    } else if (score <= 100) {
        document.getElementById("output").value = "A";
    } else {
        document.getElementById("output").value = "Invalid Response";
    }
}
