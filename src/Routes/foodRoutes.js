const foodRoutes = require ("express").Router();
const foodControllers = require("../Controllers/foodController");

foodRoutes.get("/",foodControllers.getAllFoods)
foodRoutes.post("/", foodControllers.postFoods);
foodRoutes.get("/:id", foodControllers.getDataById);
foodRoutes.put("/:id", foodControllers.updateFoods);
foodRoutes.delete("/:id",foodControllers.deleteFood);

module.exports = foodRoutes;