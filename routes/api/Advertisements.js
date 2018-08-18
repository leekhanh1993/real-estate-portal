const express = require('express')
const router = express.Router();

//Advertisement Model
const Advertisement = require('../../models/Advertisement')

//@route GET api/advertisements
//@desc GET All advertisements
//@access Public
router.get('/', (req, res)=>{
    Advertisement.find()
    .then(advertisements => res.json(advertisements))
})

//@route POST api/advertisements
//@desc Create an advertisements
//@access Public
router.post('/', (req, res)=>{
    const newAdvertisement = new Advertisement({
        title: req.body.title,
        price: req.body.price,
        area: req.body.area,
        numbedrooms: req.body.numbedrooms,
        numfloors: req.body.numfloors,
        direction: req.body.direction,
        contactInfo: req.body.contactInfo,
        address: req.body.address,
        expiredDate: req.body.expiredDate,
        idUser: req.body.idUser,
        idProject: req.body.idProject
    })
    newAdvertisement.save().then(item => res.json(item))
})

//@route DELETE api/advertisements
//@desc Delete an advertisements
//@access Public
router.delete('/:id', (req, res)=>{
    Advertisement.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})


module.exports = router;