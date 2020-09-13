const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 1300;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, token,username,password"
  );
  next();
});
const Goods_Details = require("./models/goodsDetails");
const User_Account = require("./models/userAccount");

router.get("/goodsDetails", async (req, res) => {
  const rawData = await Goods_Details.findAll({});
  const data = rawData.map((e) => e.get()).filter((e) => e.active);
  return res.status(200).json({ data });
});

router.get("/goodsDetails/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Goods_Details.findOne({
    where: {
      id,
    },
  });
  if (data == null) {
    return res.status(404).json({ error: "Item ID is not found." });
  }
  return res.status(200).json({ data });
});

router.post("/updateGoods/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, price, stock, active, img } = req.body;
  if (
    title == null ||
    description == null ||
    price == null ||
    stock == null ||
    active == null ||
    img == null
  ) {
    return res.status(400).json({ error: "Required body is missing" });
  }
  try {
    const data = await Goods_Details.update(
      {
        title,
        description,
        price,
        stock,
        active,
        img,
      },
      {
        where: {
          id,
        },
      }
    );
    if (data[0] === 0) {
      return res.status(404).json({ error: "Item ID is not found." });
    }
    return res.status(200).json("SUCCESS");
  } catch (error) {
    return res.status(error.status).json({ error });
  }
});

router.get("/userSignin", async (req, res) => {
  const { username = null, password = null } = req.headers;
  if (username == null || password == null) {
    return res
      .status(400)
      .send("Username and password are required for this endpoint!");
  }
  const isAuthenticated = await User_Account.findOne({
    where: {
      username,
      password,
    },
  });
  if (!isAuthenticated)
    return res
      .status(404)
      .send({ error: "Please fill in the correct login credential!" });

  return res.status(200).json("SUCCESS");
});

app.use(router);
app.listen(port);
console.log("Magic happens on port " + port);
