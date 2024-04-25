import mongoose from "mongoose";

const URI =
  "mongodb+srv://sergeyuos:Sergeyuos12@cluster0.h3u6lpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(URI)
  .then(() => {
    console.log("conected");
  })
  .catch((e) => {
    console.error(e);
  });
