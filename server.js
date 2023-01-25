//
const express = require("express");
const ShortUrl = require("./models/shortUrls");
const app = express();
const port = 3000;
//
app.set("view engine", "ejs");
app.set("views", "src");
app.use(express.urlencoded({ extended: false }));
//
app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl();
  res.render("index");
});
//
app.get("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});
//
//
//
//
app.listen(port, () => {
  console.log(`server rodando na porta ${3000}`);
});
//
