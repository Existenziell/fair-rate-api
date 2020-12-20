const router = require('express').Router();
const Form = require('../models/form.model');

router.post("/", async (req, res, next) => {
  try {
    const newForm = await new Form(req.body);
    newForm.save()
      .then(() => res.json(newForm))
      .catch(err => res.status(400).json('Error: ' + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  Form.find()

    .then(forms => res.json(forms))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
