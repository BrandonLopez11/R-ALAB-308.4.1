// Sample CSV data
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to parse CSV data into an array of objects
function parseCSV(csv) {
    const rows = csv.split('\n'); // Split by newlines to get each row
    const headers = rows[0].split(','); // The first row contains the headers (ID, Name, etc.)
    
    let result = []; // Array to store the parsed objects

    // Loop through the remaining rows (starting from index 1 to skip headers)
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(','); // Split each row into individual cells
        let rowObject = {}; // Create an object for each row

        // Loop through the headers to assign key-value pairs to the object
        headers.forEach((header, index) => {
            rowObject[header] = cells[index]; // Set the key as the header and value as the corresponding cell
        });

        result.push(rowObject); // Push the object into the result array
    }

    console.log(result); // Log the array of objects
    return result;
}

// Call the function with the CSV data
const parsedData = parseCSV(csvData);
