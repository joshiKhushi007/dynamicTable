var inputValue;

function onSubmitHandler() {
    var element = document.getElementById("tables");
    element.classList.remove("invisible");
    element.classList.add("visible");
    document.getElementById('tableId').innerHTML = "";
    inputValue = document.getElementById('inputNo').value;
    document.getElementById('digit1').innerHTML = inputValue;
    document.getElementById('digit2').innerHTML = inputValue;
    console.log("inputValue", inputValue);
    muliplier= document.getElementById('multiplier').value;
    for (i = 1; i <= muliplier; i++) {
        if (i <= muliplier) {
            document.getElementById('tableId').innerHTML += "<tr><td></td><td>" + inputValue + "</td> <td>X</td> <td>" + i + "</td> <td>=</td><td>" + inputValue * i + "</td></tr>";
        }
    }

}
