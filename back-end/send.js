const http = require("http");
const express = require("express");
const accountSid = "AC29c8565011e5c5d28415d09c5e16c54d";
const authToken = "1ea7d6e9816ed487518c3e9470136a02";
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(express.json())

app.post('/sms', async (req,res) => {

    console.log(req.body)


    const {message,phone} = req.body

    client.messages
    .create({
    body: message,
    from: '+16066127560',
    to: phone
    })
    .then(message => console.log(message.sid));

    res.send({data:"SMS Sent!!!"})
})

http.createServer(app).listen(5500, () => {
    console.log("Server Started...");
})