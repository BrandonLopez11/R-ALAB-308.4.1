// The array of objects from Part 3
let data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
  ];
  
  // Task 1: Remove the last element from the array
  data.pop();
  
  // Task 2: Insert a new object at index 1
  data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
  
  // Task 3: Add a new object to the end of the array
  data.push({ id: "7", name: "Brandon", occupation: "None", age: "23" });
  
  // Log the current state of the array (should match the expected output so far)
  console.log(data);
  
  // Task 4: Calculate the average age of the group
  let totalAge = 0;
  for (let i = 0; i < data.length; i++) {
    totalAge += parseInt(data[i].age); // Add each age to the total (converting age to a number)
  }
  let averageAge = totalAge / data.length; // Calculate the average by dividing the total by the number of entries
  
  console.log("Average Age:", averageAge);
  