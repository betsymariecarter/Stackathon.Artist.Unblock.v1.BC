const path = require("path");
const http = require("http");
const express = require("express");
const morgan = require("morgan");
const formidable = require("formidable");
const { fstat } = require("fs");
const app = express();
module.exports = app;

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// app.get('/', (req, res) => {
//   res.send(`
//   <form action="/api/upload" enctype="multipart/form-data" method="post">
//   <div>Upload: <input type="file" name="expressFiles"/>
//   <input type="submit" value"Upload/>
//   </div>
//   </form>`)
// })

// app.post('/api/upload', (req, res, next) => {
//   const form = formidable({});

//   form.parse(req, (err, fields, files) => {
//     if (err){
//       next(err);
//       return;
//     }
//     res.json({fields, files})
//   })
// })

http.createServer(function (req, res) {
  if (req.url == "/fileupload") {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let tempFilePath = files.filetoupload.filepath;
      let projectFilePath =
        __dirname + ".." + "public" + "/art" + files.filetoupload.originalFilename;
      fs.rename(tempFilePath, projectFilePath, function (err) {
        if (err) throw err;
        res.write('File has been successfully uploaded.');
        res.end();
      });
    });
  }
  else {
    res.writeHead(200, {'Content-Type': 'image/jpeg' || 'image/png'});
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write(`<input type="file" name="filetoupload"><br>`);
    res.write(`<input type="submit">`)
    res.write(`</form>`)
  }
});

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
