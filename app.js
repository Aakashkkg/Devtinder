const express = require("express");
const app = express();
let port = 7777

// app.use() is used to define middleware that executes on every request , regardless of the HTTP method (GET, POST, PUT, DELETE, etc.).
// app.use() to bind *application-level middleware to an instance of the app object which is instantiated on the creation of the Express server
// usefull examples of app.use()
//if our app doess not any find route handler then it give eoor of (Cannot GET /REQROUTE)
// code execution order matters very much
// if we doess not res.send() our rounter handler goes on infite loop and does not give any response
// app.use handle all the http request also becoz it is middleware over all the routes


app.use("/hello", (req, res) => {
    res.send("it handle all the request and respose after the  /hello and after /hello ex /hello/2 path of the route")
})

app.use("/user", (req, res) => {
    // console.log(req.params)
    // console.log(req.query)
    // user?id="aakash"&raju="ajay"
    res.send("with this we can handle the multiple querys over a single router")
    // res.send({user:"aakash",raju:"aaa"})
})

app.use("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)
    res.send("after /user path we can get the req parms like this")
})

app.use("/ab?c?d", (req, res) => {
    res.send("/ab?c means we can handle route request with b or without b ex: - /abc or /ac ? means make the word optional")
})

app.use("/ab+c", (req, res) => {
    res.send("/ab+c means we can handle route request ex 'abc' or 'abbbbbc' we can add as much b alphabet with + sign in the route")
})

app.use("/ab*c", (req, res) => {
    res.send("/ab*c This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.")
})


app.use('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e  This route path will match /abe and /abcde ')
})

app.use("/a/", (req, res) => {
    res.send('/a/ This route path will match anything with an “a” in it.')
})




// app.use("/", (req, res) => {
//     res.send("it handle all the request and respose after the  / path of the route")
// })


// express routes handling techniques
app.use("/getuser", (req, res, next) => {
    console.log("handle route getuser route 1")
    // in express we can mutiple route handlers in particular route and we sift our
    //  req to next rounte handler using next funtion third parametre of route handler
    // res.send("get all user done")
    next()
}, (req, res, next) => {
    console.log("handle  getuser route 2")
    res.send("2nd response !!")
})

app.listen(port, () => {
    console.log("server start on this localhost port" + " " + port)
})