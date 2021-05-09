const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
    /*
        Uploading posts with images
    */

    // let imgurClient = new ImgurClient({ accessToken: process.env.ACCESS_TOKEN });

    app.post('/api/upload', (req, res) => { // Upload post request from front-end

        if (!req.files || Object.keys(req.files).length === 0) { // Check if there is any file to upload
            return res.status(400).send('No files were uploaded.');
        }

        let imageTempPath = req.files.uploadImage.tempFilePath; // 'uploadImage' image temporary path
    });
}