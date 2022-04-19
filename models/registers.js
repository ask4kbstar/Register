const mongoose = require('mongoose');


const RegisterSchema = mongoose.Schema({
    name: {
		type: String,
		required: true
	},
	mobile: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: false
	},
	password: {
		type: String,
		required: true
	}
});

const Register = module.exports = mongoose.model('Register', RegisterSchema);