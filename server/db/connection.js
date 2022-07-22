const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://Premkumaralkunte:Premkumar@cluster0.eafboe0.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },
(data) => {
    console.log("successfully connected to db");
  },
  (err) => {
    console.log(err);
  }
);