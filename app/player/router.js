var express = require('express');
var router = express.Router();
const {index, landingPage, detailPage, actionStatus, category, checkout, history, dashboard, profile, editProfile, historyDetail} = require('./controller');
const {isLoginAdmin} = require('../middleware/auth')
const {isLoginPlayer} = require('../middleware/auth')
const multer = require('multer');
const os = require('os')

router.get('/landingpage', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);
router.post('/checkout', isLoginPlayer, checkout);
router.get('/history', isLoginPlayer, history);
router.get('/history/:id/detail', isLoginPlayer, historyDetail);
router.get('/dashboard', isLoginPlayer, dashboard);
router.get('/profile', isLoginPlayer, profile);
router.put('/profile', isLoginPlayer, multer({ dest: os.tmpdir()}).single('image'), editProfile);

router.use(isLoginAdmin)
router.get('/', index);
router.put('/status/:id', actionStatus);

module.exports = router;
