const express = require('express');
const router = express.Router();

const Register = require('../models/registers');

router.get('/registers', (req, res, next)=>{
    Register.find(function(err,registers){
        res.json(registers);
    })
});

router.post('/register',(req, res, next)=>{
    let newRegister = new Register({
        name: req.body.name,
		mobile: req.body.mobile,
		email: req.body.email,
		password: req.body.password
    });

    newRegister.save((err,Register)=>{
        if(err)
        {
            res.json({msg: 'failed to Register'});
        }
        else{
            res.json({msg: 'registered successfully'});;
        }
    });
});

router.delete('/register/:id',(req, res, next)=>{
    Register.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports = router;