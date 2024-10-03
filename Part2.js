// Sample CSV data
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to parse CSV data and store it as a 2D array
function parseCSVTo2DArray(csv) {
    const rows = csv.split('\n'); // Split the CSV data into rows
    const numberOfColumns = rows[0].split(',').length; // Calculate the number of columns from the first row
    
    let result = []; // Array to store the 2D array

    // Loop through each row and split it into an array of cells
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].split(','); // Split the row into individual cells by comma
        if (cells.length === numberOfColumns) {
            result.push(cells); // Add the row array to the result array
        } else {
            console.error(`Row ${i} does not have the expected number of columns.`);
        }
    }

    return result; // Return the 2D array
}

// Call the function and cache the result in a variable
const csv2DArray = parseCSVTo2DArray(csvData);
console.log(csv2DArray);
