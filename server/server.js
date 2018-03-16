let express = require('express');
let app = express();
const PORT = process.env.PORT || 4001;
let bodyparser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server is running on', PORT);
});