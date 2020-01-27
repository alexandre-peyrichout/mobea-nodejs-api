const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const connection = require("./src/config");
const api = require("./routes");
app.use("/api", api);

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Dans index.js ajouter config CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// -----------------------------------------------------------ROUTES DE TESTS ----------------------------------------------------------------------------

app.get("/api/products", (req, res) => {
  connection.query("SELECT * from product", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.get("/api/productspic", (req, res) => {
  connection.query(
    "SELECT p.*, pc.* FROM product AS p JOIN picture AS pc ON p.identifier = pc.product_id",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving products with their pictures");
      } else {
        res.json(results);
      }
    },
  );
});

// -----------------------------------------------------------ROUTES VERS LES CATÉGORIES ET SS-CAT --------------------------------------------------------------

app.get("/api/categories", (req, res) => {
  connection.query("SELECT * FROM categorie LIMIT 5", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving decoration categories");
    } else {
      res.json(results);
    }
  });
});

app.get("/api/category/decoration", (req, res) => {
  connection.query(
    "SELECT * FROM categorie where parent_id = 6",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving decoration categories");
      } else {
        res.json(results);
      }
    },
  );
});

// -----------------------------------------------------------ROUTES VERS LES PRODUITS DES CATÉGORIES ------------------------------------------------------

app.get("/api/category/novelty", (req, res) => {
  connection.query(
    "SELECT * FROM product AS p JOIN picture AS pc ON pc.Product_id = p.identifier where p.nouveaute = 1",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving verrerie products");
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/api/category/verrerie", (req, res) => {
  connection.query(
    "SELECT * FROM product AS p JOIN picture AS pc ON pc.Product_id = p.identifier where categorie_id = 3",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving verrerie products");
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/api/category/vannerie", (req, res) => {
  connection.query(
    "SELECT * FROM product AS p JOIN picture AS pc ON pc.Product_id = p.identifier where categorie_id = 4",

    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving vannerie product");
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/api/category/temporary", (req, res) => {
  connection.query(
    "SELECT * FROM product where categorie_id = 5",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving verrerie products");
      } else {
        res.json(results);
      }
    },
  );
});

// -----------------------------------------------------------ROUTES VERS LES PRODUITS DES SS-CATÉGORIES ------------------------------------------------------

app.get("/api/category/decoration/boismetal", (req, res) => {
  connection.query(
    "SELECT * FROM product where categorie_id = 4",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving wood et metal");
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/api/category/decoration/textile", (req, res) => {
  connection.query(
    "SELECT * FROM product where categorie_id = 5",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving textil products");
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/api/category/decoration/terrecuite", (req, res) => {
  connection.query(
    "SELECT * FROM product where categorie_id = 7",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving terre-cuite products");
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/api/category/decoration/luminaire", (req, res) => {
  connection.query(
    "SELECT * FROM product where categorie_id = 6",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving products");
      } else {
        res.json(results);
      }
    },
  );
});

app.listen(PORT, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${PORT}`);
});
