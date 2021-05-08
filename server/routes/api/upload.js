const User = require('../../models/User');
const UserSession = require('../../models/UserSession');
const fileUpload = require('express-fileupload');


module.exportrs = (app) => {
    /*
        Uploading posts with images
    */
   app.post('/api/upload', (req, res) => { // Upload post request from front-end

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        let file = req.files.image;

        
   });
}