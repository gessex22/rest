const {Router } = require('express')
const { userGet, userPut, userPost, userDel, userPatch } = require('../controllers/userController')

const router = Router()

router.get('/', userGet)

router.put('/:userId',userPut)
router.post('/', userPost)
router.patch ('/', userPatch)


router.delete('/', userDel)






module.exports = router

