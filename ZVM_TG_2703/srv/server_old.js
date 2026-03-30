const express = require("express");
const app = express();
app.use(express.json());

let vendors = [
  { id: 1, name: "ABC Traders", email: "abc@vendor.com", rating: 5 },
  { id: 2, name: "XYZ Supplies", email: "xyz@vendor.com", rating: 4 }
];

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Vendor Management API. Use /vendors to see data.");
});

// Vendors route
app.get("/vendors", (req, res) => res.json(vendors));

// Start server
const port = process.env.PORT || 4004;
app.listen(port, () => console.log(`Server running on port ${port}`));
