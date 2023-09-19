const path = require('path');
const multer = require('multer');
const BadRequestError = require('../error/errors');

// Set Up How File Are stored 

const storage = multer.diskStorage({
    destination(req, file, callback) {
        let dir = process.cwd();
        // Set Destination For File Types
        const imageFormats = ['.jpeg', '.png', '.jpg'];
        const videoFormats = ['.webm', '.mp4', '.wmv', '.mpeg'];
        const documentFormats = ['.doc', '.docx', '.pdf'];
        
        if (imageFormats.includes(path.extname(file.originalname))) {
            dir = '/upload/images';
        } else if (videoFormats.includes(path.extname(file.originalname))) {
            dir = '/upload/videos';
        } else if (documentFormats.includes(path.extname(file.originalname))) {
            dir = '/upload/documents';
        } else {
            dir = '/upload/otherfiles';
        }
        fs.mkdir(dir, { recursive: true }, (err) => callback(err, dir));
    },
    
    // Set File Name
    filename(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`);
    },
});

// Set File Filter( Validate Files)
const fileFilter = function (req, file, callback) {
  // Check file format, if it doesnt contains the array below, throw error
  const fileFormats = ['.jpeg', '.png', '.jpg', '.webm', '.mp4', '.wmv', '.mpeg', '.doc', '.docx', '.pdf'];
  const fileCheck = fileFormats.includes(path.extname(file.originalname));

  if (!fileCheck && file.originalname !== 'blob') {
    callback(new BadRequestError('File Upload Failed, format supported are .jpeg', '.png', '.jpg', '.webm', '.mp4', '.wmv', '.mpeg', '.doc', '.docx', '.pdf'), false);
  } else {
    callback(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter,
});
module.exports = upload;
