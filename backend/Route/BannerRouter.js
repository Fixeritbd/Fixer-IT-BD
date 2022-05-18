import express from 'express'
import Banner from '../Model/Banner.js'

const bannerRouter = express.Router()

bannerRouter.post('/', async (req, res) => {
    let bannerData = await new Banner({
        subHeading: req.body.subHeading,
        heading: req.body.heading,
        button: req.body.button,
        img: req.body.img,
    })

    bannerData.save()
    res.status(200).send({
        message: "this is banner data"
    })
})
bannerRouter.get('/', async (req, res) => {
    const bannerData = await Banner.find({})
    res.send(bannerData)
})


export default bannerRouter