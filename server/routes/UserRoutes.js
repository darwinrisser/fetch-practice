const express = require("express");
const router = express.Router();
const {list} =require("../controllers/UserController");

router.get("/api/users", list);
module.exports =  router;