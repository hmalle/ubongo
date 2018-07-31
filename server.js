
//requirements
const bodyparser  = require("body-parser");
const cors        = require("cors");
const express     = require("express");
const morgan      = require("morgan");
const passport    = require("passport");
const session     = require("express-session");

const PORT = process.env.PORT || 3001 ;
const app = express();

//cors to test network error issue
app.use(cors()); //seems to have fixed the network error issue

//passport 
app.use(session({secret:"aaipouikllahuyvscvzxlnm.,lad",resave:true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

//body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());
app.use(bodyparser.json({type:"application/vnd.api+json"}));

//To be able to server static images instead of storing images in the backend
app.use(express.static("./images/"));

app.use(express.static("./client/src/home/"));

//use morgan for log
app.use(morgan("dev"));

//database
const db = require("./models");

//routes
require("./routes/userRoutes")(app);
require("./routes/sessionRoutes")(app);

//start the server listening on the port
db.sequelize.sync({force:false}).then( ()=>{
  app.listen(PORT, ()=>{
    console.log("App listening on port " +PORT );
  });
});

