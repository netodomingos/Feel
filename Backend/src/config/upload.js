const md5 = require('md5')
const multer = require('multer')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname)

            const name = path.basename(md5(file.originalname), ext)
            
            cb(null, `${name}-${Date.now()}${ext}`)
        },
    })
}