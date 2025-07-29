import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const FULL_NAME = "shoib_khan";       
const DOB = "20032005";               
const EMAIL = "shoib2337.be22@chitkara.edu.in";       
const ROLL_NUMBER = "2210992337";   

const isAlpha = (ch) => /^[A-Za-z]$/.test(ch);
const isNumeric = (ch) => /^[0-9]+$/.test(ch);
const isSpecialChar = (ch) => /[^A-Za-z0-9]/.test(ch);

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    if (!Array.isArray(data)) {
      throw new Error("Input 'data' must be an array");
    }

    const numbers = data.filter(item => isNumeric(item.toString()));
    const even_numbers = numbers.filter(n => parseInt(n) % 2 === 0);
    const odd_numbers = numbers.filter(n => parseInt(n) % 2 !== 0);

    const alphabets = data.filter(item => isAlpha(item.toString())).map(ch => ch.toUpperCase());

    const special_characters = data.filter(item => isSpecialChar(item.toString()));

    const sum = numbers.reduce((acc, val) => acc + parseInt(val), 0).toString();

    const concatArray = data.filter(item => isAlpha(item.toString())).reverse();

    const concat_string = concatArray
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join("");

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum,
      concat_string
    };

    res.status(200).json(response);

  } catch (error) {
    res.status(400).json({
      is_success: false,
      user_id: `${FULL_NAME}_${DOB}`,
      message: error.message
    });
  }
});

app.get("/", (req, res) => {
  res.send("API is running. Please use POST /bfhl with JSON data.");
});

app.use((req, res) => {
  res.status(404).json({
    is_success: false,
    message: "Route not found"
  });
});

export default app;
