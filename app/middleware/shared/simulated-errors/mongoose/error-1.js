module.exports = { generate: () => { const error = new Error('Mongoose could not convert a value to the type defined in the schema path. May be in a `ValidationError` class `errors` property.'); error.category = 'mongoose'; error.statusCode = 500; return error; } };