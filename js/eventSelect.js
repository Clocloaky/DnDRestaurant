function clickedRow(){
    let table = document.getElementById('event-table');
    let cells = table.getElementsByTagName('td');

    for (let i=0; i < cells.length; i++){
        let cell = cells[i];
        cell.onclick = function (){
            console.log(`${cell} was clicked.`);
        }
    }
}

