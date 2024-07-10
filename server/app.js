const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
const qrCodesFilePath = './qr-codes.json';

app.post('/save-qr-code', upload.single('image'), (req, res) => {
  try {
    const caption = req.body.caption;
    const imagePath = req.file.path;

    const qrCodeData = {
      image: imagePath,
      caption: caption
    };

    let qrCodes = [];
    if (fs.existsSync(qrCodesFilePath)) {
      const rawData = fs.readFileSync(qrCodesFilePath);
      qrCodes = JSON.parse(rawData);
    }

    qrCodes.push(qrCodeData);
    fs.writeFileSync(qrCodesFilePath, JSON.stringify(qrCodes, null, 2));
    res.status(201).send(qrCodeData);
  } catch (error) {
    console.error('Error saving QR code:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/get-qr-codes', (req, res) => {
  try {
    if (fs.existsSync(qrCodesFilePath)) {
      const rawData = fs.readFileSync(qrCodesFilePath);
      const qrCodes = JSON.parse(rawData);
      res.status(200).send(qrCodes);
    } else {
      res.status(200).send([]);
    }
  } catch (error) {
    console.error('Error retrieving QR codes:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
