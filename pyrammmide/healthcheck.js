const express = require("express");
const app = express();
app.get('/health', (req, res) => {
 return res.sendStatus(200);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

