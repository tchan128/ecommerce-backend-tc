const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{ model: Product}]
  })
  .then((category) => {
  res.json(category);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findAll({
    where: {
      id: req.params.id
    }, 
    include: [{ model: Product}]
  })
  .then((category) => {
    res.json(category);
    });
  });

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then((category) => {
    res.json(category);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((category) => {
    res.json(category);
    });
});

module.exports = router;
