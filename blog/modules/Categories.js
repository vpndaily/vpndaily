const mongoose = require("mongoose")

const CategoriesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    posts:[{
        types:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }],
})

const CategoriesModel = mongoose.model('Categories', CategoriesSchema)

module.exports = CategoriesModel