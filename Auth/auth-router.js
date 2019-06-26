//authentication workflow using JSON Web Tokens

const router = require("express").Router();
const bcrypt = require("bcryptjs"); //verify passwords
const jwt = require("jsonwebtoken"); // verify token

const Users = require("../Users/usersModel");
const secrets = require("../Config/secrets");

// for endpoints beginning with /api/auth
router.post("/register", (req, res) => {
  let user = req.body; //sending all user info
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n //making pw secure (random assortment - 10x)
  user.password = hash; //changing user password into the hash - new coded password- final encryption

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // grabbing the hash (encrypted password) and un-encrypting it to check against the encrypted
        const token = generateToken(user); // <<<<<<<<<<<<<<<<<<<<<<<<<

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//test

router.get("/", (req, res) => {
  res.status(200).json('Hello.');
});

function generateToken(user) {
  const payload = {
    subject: user.id, // standard claim = sub
    username: user.username,
    roles: ["student"]
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
