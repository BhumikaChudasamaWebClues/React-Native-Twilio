const http = require("http");
const express = require("express");
const accountSid = "AC09f4d977bb57d390271ecfdb3d494244";
const authToken = "0ab7ce99dda317607a9abe8d00157e0c";
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(express.json())

app.post('/sms', async (req,res) => {

    console.log(req.body)


    const {payload,phone} = req.body

    client.messages
    .create({
    body: payload,
    from: '+19894364257',
    to: phone
    })
    .then(message => console.log(message.sid));

    res.send({data:"SMS Sent!!!"})
})

http.createServer(app).listen(5500, () => {
    console.log("Server Started...");
})