function clickedRow() {
    let table = document.getElementById('event-table');
    let rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        // console.log(rows[i]);
        row.onclick = function () {
            displayEvent(row);
        }
    }
}

function displayEvent(cell) {
    document.getElementById('eventBlock').style.display = "inline";
    console.log(cell);


}
