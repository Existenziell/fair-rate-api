const { Schema, model } = require('mongoose');

const formSchema = new Schema({
  form: {
    type: Object, required: true,
  }
});

const Form = model('Form', formSchema);

module.exports = Form;
