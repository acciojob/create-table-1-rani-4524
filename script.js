function insert_Row() {
    let table = document.getElementById("sampleTable");

    // Insert a new row at top (index 0)
    let newRow = table.insertRow(0);

    // Insert two cells in the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Add text to cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
