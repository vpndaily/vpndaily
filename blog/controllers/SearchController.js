const Post = require("../modules/Post")

exports.getSearchByPostName = (req, res, next)=>{
    const search = req.params.search
   Post.find({title: new RegExp(search, "i")})
   .then(search=>{
       console.log(search)
       res.status(200).json(search)
   })
   .catch(err=>{
       console.log(err)
   })
}



// exports.getSearchByPostName = (req, res, next)=>{
//     Post.find({title: new RegExp(req.body.search, "i")})
//     .then(search=>{
//         console.log(search)
//         res.status(200).json(search)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
//  }