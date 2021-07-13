# Express Learning

In the package.json file there is a statement that says `"main": "server.js`, now what does that do?


Some express apps I see the bottom say `module.exports = app;` where the `http.createServer().listen()` would go. Why do they do that?

>The main field is a module ID that is the primary entry point to your program. That is, if your package is named foo, and a user installs it, and then does require("foo"), then your main module's exports object will be returned. This should be a module relative to the root of your package folder. For most modules, it makes the most sense to have a main script and often not much else.

>If main is not set it defaults to index.js in the packages root folder.

[Link](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)


What order do the "use" methods fire? 
``` js
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
//app.enable("view cache");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware(sassConfig));
app.use('/static', express.static(path.join(__dirname, "public/static")));
app.use("/", indexRouter);
```
### app.route()



You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. For more information about routes, see: Router() documentation.

Here is an example of chained route handlers that are defined by using app.route().
``` js 
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })
```

I am changing the order of these two methods? to one method.  I hope function 1 and function 2 fire sequentially.  Do I need `next()`?

``` js

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use("/users", auth(config));

app.use("/users", (req, res, next) => {
  res.locals.user = req.oidc.user;
  next();
}); // this "next()" seems to control flow. 
```

Then I took this example from (the docs)[https://expressjs.com/en/guide/routing.html]

``` js
app.get(
  "/example/d",
  [cb0, cb1],
  function (req, res, next) {
    console.log("the response will be sent by the next function ...");
    next();
  },
  function (req, res) {
    res.send("Hello from D!");
  }
);

```
The end result

``` js
app.use("/users", [auth(config), exposeUser], usersRouter);
```

This leads me to another question.  If I have overlapping routers like "/" and "/user" does it go through all the routes?  How do I word that?



``` js
app.use('/static', express.static(path.join(__dirname, "public/static")));
app.use("/", indexRouter);
app.use("/users", [auth(config), exposeUser], usersRouter);
```
Does the indexRouter go through it's stuff before the usersRouter?


I think I got authentication working.  The id_token is in the post req.body. 

How do I put that into my app? 


Trying to move the code for /users into seperate location.

``` js
app.use('/static', express.static(path.join(__dirname, "public/static")));
app.use("/", indexRouter);
app.use("/user", usersRouter);
```

*/routes/index*
``` js
router.post("/callback", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.redirect("/");
});
```




.