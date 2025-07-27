function rollDice() {
    const diceNum = document.getElementById("diceNum").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");

    if (!diceNum) {
        result.textContent = "Enter the number of dice first!!";
        images.innerHTML = "";
        return;
    }

    const numArr = [];
    const imagesArr = [];

    for (let i = 0; i < diceNum; i++) {
        let n = Math.floor(Math.random() * 6) + 1;
        numArr.push(n);
        imagesArr.push(`<img src="dice-images/${n}.png" alt="dice-${n}">`);
    }

    result.textContent = diceNum==1?`1 die rolled: ${numArr[0]}`:`${diceNum} dice rolled: ${numArr.join(", ")}`;
    images.innerHTML = imagesArr.join("");
}