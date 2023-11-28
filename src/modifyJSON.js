const fs = require("fs");

// Read the existing monsters.json file
fs.readFile("monsters1.json", "utf8", (err, data) => {
  if (err) throw err;

  // Parse the JSON data
  let monsters = JSON.parse(data);

  // Add an ID property to each monster object
  for (let i = 0; i < monsters.length; i++) {
    monsters[i].id = i + 1;
  }

  // Stringify the modified data
  let jsonData = JSON.stringify(monsters);

  // Write the modified data back to the file
  fs.writeFile("monsters1.json", jsonData, "utf8", (err) => {
    if (err) throw err;
    console.log("IDs added to monsters1.json");
  });
});
