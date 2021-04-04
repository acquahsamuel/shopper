const path = require('path');
const express = require("express");
const app = express();


//Importing files
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//@Middlewares
app.use(shopRoutes);
app.use("admin", adminRoutes);


//@des Serving Static files
app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views" , "404.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is listening on ${port} `);
});

