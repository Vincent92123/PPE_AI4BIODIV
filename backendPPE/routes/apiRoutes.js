var express = require("express");
var router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/api/forums/', apiController.listForum);
router.post('/api/forums/', apiController.insertForum);
router.patch('/api/forums/:id', apiController.updateForum);
router.delete('/api/forums/:id', apiController.deleteForum);

module.exports = router;