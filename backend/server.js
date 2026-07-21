import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import pool from "./db.js";

// =====================================
// DOTENV
// =====================================

dotenv.config();


// =====================================
// CREATE EXPRESS APP
// =====================================

const app = express();


// =====================================
// MIDDLEWARE
// =====================================

app.use(cors());

app.use(express.json());


// =====================================
// SERVE UPLOADS FOLDER
// =====================================

// Browser se uploaded image access karne ke liye
// Example:
// http://localhost:5000/uploads/photo.jpg

app.use(
  "/uploads",
  express.static("uploads")
);


// =====================================
// MULTER CONFIGURATION
// =====================================

const storage = multer.diskStorage({

  // Photo uploads folder mein save hogi
  destination: (req, file, cb) => {

    cb(null, "uploads/");

  },


  // Unique filename create hoga
  filename: (req, file, cb) => {

    const uniqueName =
      Date.now() + "-" + file.originalname;

    cb(null, uniqueName);

  },

});


// Create multer upload
const upload = multer({
  storage: storage,
});


// =====================================
// SIGNUP API
// =====================================

app.post(
  "/api/signup",
  upload.single("photo"),
  async (req, res) => {

    try {

      // =================================
      // GET FORM DATA
      // =================================

      const {
        name,
        email,
        password
      } = req.body;


      // =================================
      // GET PHOTO PATH
      // =================================

      let photo = null;

      if (req.file) {

        photo =
          `/uploads/${req.file.filename}`;

      }


      // =================================
      // CHECK EXISTING EMAIL
      // =================================

      const existingUser =
        await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email]
        );


      // Email already exists
      if (
        existingUser.rows.length > 0
      ) {

        return res.status(400).json({

          message:
            "Email already exists",

        });

      }


      // =================================
      // HASH PASSWORD
      // =================================

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );


      // =================================
      // INSERT USER
      // =================================

      await pool.query(

        `INSERT INTO users
        (name, email, password, photo)
        VALUES ($1, $2, $3, $4)`,

        [
          name,
          email,
          hashedPassword,
          photo
        ]

      );


      // =================================
      // RESPONSE
      // =================================

      res.status(201).json({

        message:
          "Signup Successful",

      });


    } catch (error) {

      console.error(
        "Signup Error:",
        error
      );


      res.status(500).json({

        message:
          "Server Error",

      });

    }

  }
);


// =====================================
// LOGIN API
// =====================================

app.post(
  "/api/login",
  async (req, res) => {

    try {

      // =================================
      // GET LOGIN DATA
      // =================================

      const {
        email,
        password
      } = req.body;


      // =================================
      // FIND USER
      // =================================

      const result =
        await pool.query(

          "SELECT * FROM users WHERE email = $1",

          [email]

        );


      // =================================
      // USER NOT FOUND
      // =================================

      if (
        result.rows.length === 0
      ) {

        return res.status(404).json({

          message:
            "User not found",

        });

      }


      // Get user
      const user =
        result.rows[0];


      // =================================
      // CHECK PASSWORD
      // =================================

      const isMatch =
        await bcrypt.compare(

          password,

          user.password

        );


      // Invalid password
      if (!isMatch) {

        return res.status(401).json({

          message:
            "Invalid Password",

        });

      }


      // =================================
      // LOGIN SUCCESSFUL
      // =================================

      res.status(200).json({

        message:
          "Login Successful",


        user: {

          id:
            user.id,

          name:
            user.name,

          email:
            user.email,

          photo:
            user.photo,

        },

      });


    } catch (error) {

      console.error(
        "Login Error:",
        error
      );


      res.status(500).json({

        message:
          "Server Error",

      });

    }

  }
);


// =====================================
// START SERVER
// =====================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});