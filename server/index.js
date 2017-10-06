const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.route('*')
  .get((req, res) => {
    res.json(db.reverse()); // Reverse order to show the newest on top
  })

app.listen(port, () => console.log(`Server is running on port ${port}!`));
