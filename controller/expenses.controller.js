const mongoose = require('mongoose');
const passport = require('passport');
const _= require('lodash')
const Expense = mongoose.model('Expense')

module.exports.expenses = (req,res,next) =>{
    var expense = new Expense()
   expense.superVisorName= req.body.superVisorName;
   expense.month = req.body.month;
   expense.year = req.body.year;
   expense.totalAmount = req.body.totalAmount;
   expense.date = req.body.date;
   expense.siteName = req.body.siteName;
   expense.location = req.body.location;
   expense.expenses = req.body.expenses;
     expense.save((err,doc)=>{
        if(!err)
        res.send(doc);
         else{
                return next(err);
            }
   })
}

module.exports.getExpenses = (req,res,next)=>{
  Expense.find(function (err, expenses) {
    if (err) {
    console.log(err);
    }
    else {
    res.json( expenses);
    }
    });
 }

 module.exports.getExpensesById = (req,res,next)=>{
  let id = req.params.id;
  Expense.findOne({_id:id},
    (err,user)=>{
        if(!user)
        return res.status(404).json({
            status:false,message:"User not found"
        })
      else
        return res.status(200).json({
            status:true,user: user
        })
    }
    )

 }

 module.exports.updateExpenses = (req,res,next)=>{
  Expense.findById(req.params.id, function (err, expense) {
    if (! expense)
    return next(new Error('Unable To Find Expenses With This Id'));
    else {
      expense.superVisorName= req.body.superVisorName;
      expense.month = req.body.month;
      expense.year = req.body.year;
      expense.totalAmount = req.body.totalAmount;
      expense.date = req.body.date;
      expense.siteName = req.body.siteName;
      expense.location = req.body.location;
      expense.expenses = req.body.expenses;
      expense.save().then(emp => {
    res.json('Expenses Updated Successfully');
    })
    .catch(err => {
    res.status(400).send("Unable To Update Expenses");
    });
    }
    });
 } 
    module.exports.deleteExpenses = (req,res,next)=>{
      let id = req.params.id;
        Expense.findByIdAndRemove({ _id: req.params.id }, function (err,expense) {
        if (err) res.json(err);
        else res.json('Expenses Deleted Successfully');
        });
      }
 
