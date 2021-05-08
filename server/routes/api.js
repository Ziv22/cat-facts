const express = require("express");
const router = express.Router();
const Fact = require("../model/Fact");
const axios = require("axios");

router.get("/allFacts", async (req, res) => {
  try {
    const url = "https://cat-fact.herokuapp.com/facts";
    const facts = await axios.get(url);
    const formattedFacts = facts.data.map((fact) => ({
      _id: fact._id,
      text: fact.text,
      added: fact.added ? true : false,
    }));
    res.send(formattedFacts);
  } catch (err) {
    console.log(err);
  }
});
router.get("/myFacts", async (req, res) => {
  try {
    const facts = await Fact.find();
    res.send(facts);
  } catch (err) {
    console.log(err);
  }
});
router.post("/myFact", async (req, res) => {
  try {
    const fact = await new Fact(req.body);
    await fact.save();
    res.send(fact);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/myFact/:id", async (req, res) => {
  try {
    await Fact.findByIdAndDelete(req.params.id);
    res.send();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
