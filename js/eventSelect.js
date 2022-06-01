/*
function previewRow() {
    let table = document.getElementById('event-table');
    let rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        row.onmouseover = function () {
            document.getElementById('eventBlock').style.display = "inline";
            displayEvent(row);
        }
    }

}

function displayEvent(cell) {

    const title = document.querySelector("#event-title");
    const room = document.querySelector("#event-type");
    const time = document.querySelector("#event-time");
    const desc = document.querySelector("#event-description");
    title.textContent = cell.querySelector("td:nth-child(3)").innerHTML;
    time.textContent = cell.querySelector("td:nth-child(2)").innerHTML;
    room.textContent = `Room: ${cell.querySelector("th").innerHTML}`;
    desc.textContent = cell.querySelector("td:nth-child(4)").innerHTML;

}

function resetEvent() {
    document.getElementById('eventBlock').style.display = "none";
}

*/
const table = document.getElementById('event-table');
const closeEvent = document.getElementById('event-desc-btn');
let isClicked = false;

table.addEventListener("mouseover", function (event) {
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        row.onmouseover = function () {
            document.getElementById('eventBlock').style.display = "inline";
            const title = document.querySelector("#event-title");
            const room = document.querySelector("#event-type");
            const time = document.querySelector("#event-time");
            const desc = document.querySelector("#event-description");
            title.textContent = row.querySelector("td:nth-child(3)").innerHTML;
            time.textContent = row.querySelector("td:nth-child(2)").innerHTML;
            room.textContent = `Room: ${row.querySelector("th").innerHTML}`;
            desc.textContent = row.querySelector("td:nth-child(4)").innerHTML;
        }
    }
}, false);

table.addEventListener("mouseleave", function (event) {
    if (!isClicked) {
        document.getElementById('eventBlock').style.display = "none";
    }
})

table.addEventListener("click", function (event) {
    const showClose = document.querySelector("#event-desc-btn");
    showClose.style.display = "inline";
    isClicked = true;
    
})

closeEvent.addEventListener("click", function(event){
    isClicked=false;
    document.getElementById('eventBlock').style.display = "none";
    closeEvent.style.display = "none";
})
