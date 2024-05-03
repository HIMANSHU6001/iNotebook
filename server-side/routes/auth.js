require('dotenv').config()

const express = require('express')
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { body, validationResult } = require("express-validator")
const fetchuser = require("../middleware/fetchuser")


// Route1: Create a User using: POST "/api/auth/createuser"
router.post('/createuser', [

  //authenticating inputs
  body('email', "Enter a Valid Email.").isEmail(),
  body('name', "Min length is 3.").isLength({ min: 3 }),
  body('password', "Password must be 6 charecters long.").isLength({ min: 6 })
], async (req, res) => {

  // catching Errors
  try {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({success,  error: "Sorry, this email is already registred" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    success = true;
    return res.json({success, authToken });

  } catch (error) {
    return res.status(400).json({ error: "Internal Server Error" })
  }

})

// Route2: Authentication of user using: Post "/api/auth/login" - no login required
router.post('/login', [
  body('email', "Enter a Valid Email.").isEmail(),
  body('password', "Password cannot be blank.").exists()
], async (req, res) => {
  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  try {

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Access Denied" })
    }
    const passComp = await bcrypt.compare(password, user.password)
    if (!passComp) {
      return res.status(400).json({ error: "Access Denied" })
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    success = true;
    return res.json({success, authToken });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "Internal Server Error" })
  }
})

// Route 3: get loggedin user details using: POST "/api/auth/getuser" login Required
router.post("/getuser", fetchuser,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      return res.status(400).json({ error: "Internal Server Error" })
    }
  })

module.exports = router 