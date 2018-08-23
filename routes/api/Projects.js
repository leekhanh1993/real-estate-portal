const express = require('express')
const router = express.Router();

//Project Model
const Project = require('../../models/Project')

//@route GET api/projects
//@route GET All projects
//@route Public
router.get('/', (req, res)=>{
    Project.find()
    .then(projects => res.json(projects))
})

//@route POST

module.exports = router;