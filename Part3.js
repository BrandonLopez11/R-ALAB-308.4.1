// Sample CSV data
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Part 2: Parse CSV into a 2D array
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

// Part 3: Transform the 2D array into an array of objects
function transformToObjects(array2D) {
    const headers = array2D[0]; // The first row contains the headers
    let result = []; // Array to store the transformed objects

    // Loop through each row starting from the second row (skip the headers)
    for (let i = 1; i < array2D.length; i++) {
        let rowObject = {}; // Create an empty object for each row

        // Loop through each cell and map it to the corresponding header (converted to lowercase)
        for (let j = 0; j < array2D[i].length; j++) {
            const key = headers[j].toLowerCase(); // Convert header to lowercase
            rowObject[key] = array2D[i][j]; // Set the key-value pair
        }

        result.push(rowObject); // Add the row object to the result array
    }

    return result; // Return the array of objects
}

// Call the function from Part 2 to get the 2D array
const csv2DArray = parseCSVTo2DArray(csvData);

// Call the function from Part 3 to transform the 2D array into an array of objects
const transformedData = transformToObjects(csv2DArray);
console.log(transformedData);

