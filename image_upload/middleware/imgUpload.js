const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'uploads/',

    filename: function (req, file, cb) {
        // creates unique suffix for the file to be stored on the file system
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000); 

        // extracts the file extension from the original filename using the path.extname() 
        const ext = path.extname(file.originalname);

        // unqiue filename vaeiable 
        const filename = file.originalname + '-' + uniqueSuffix + ext;

        // storing the file using the filename variable
        cb(null, filename);
    }
});

// creating multer middleware for file upload
const upload = multer({
    // determines how files should be stored on the disk
    storage: storage,
    // specifies a file size limit of 5 MB
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

module.exports = {
    upload,
}

/*

1. const storage = multer.diskStorage({ ... }); 
    - Creating a storage object using multer.diskStorage(). This object defines how files should be stored on the disk. 

    a. destination: 'uploads/'
        - Specifies the destination directory where the uploaded files will be stored. In this case, the files will be stored in the "uploads" directory.

    b. filename: function (req, file, cb) { ... } 
        - Defines a function that determines the filename of the uploaded file.

*/