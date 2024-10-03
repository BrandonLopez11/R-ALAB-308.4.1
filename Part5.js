// The current array of objects
const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Brandon", occupation: "None", age: "111" }
  ];
  
  // Function to convert data back to CSV format
  function convertToCSV(dataArray) {
      if (dataArray.length === 0) {
          return ""; // If the array is empty, return an empty string
      }
  
      // Step 1: Extract the headers (keys of the first object)
      const headers = Object.keys(dataArray[0]).join(","); // Join the keys with commas to form the header row
  
      // Step 2: Extract the values from each object and join them with commas
      const rows = dataArray.map(row => Object.values(row).join(",")).join("\n");
  
      // Step 3: Combine the header and the rows with a newline character
      const csv = headers + "\n" + rows;
  
      return csv;
  }
  
  // Convert the array of objects back into CSV format
  const csvData = convertToCSV(data);
  console.log(csvData);
  