const express = require('express');
const router = express.Router();
const { User, Blogpost, Comment } = require("../models");
const withAuth = require("../utils/auth");

module.exports = router;