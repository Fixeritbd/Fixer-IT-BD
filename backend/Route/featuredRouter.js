import express from "express";
import Featured from '../Model/Featured.js'


const featuredRouter = express.Router()

featuredRouter.post('/', async (req, res) => {
    let featuredData = await new Featured({
        subHeading: req.body.subHeading,
        heading: req.body.heading,
        para1: req.body.para1,
        para2: req.body.para2,
        button: req.body.button,
        img: req.body.img,
    })
    featuredData.save()
    res.status(200).send({
        message: "featured data sent Successfull"
    })

})

featuredRouter.get('/', async (req, res) => {
    const featuredData = await Featured.find({})
    res.send(featuredData)
})

export default featuredRouter
