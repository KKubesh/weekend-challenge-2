let express = require('express');
let app = express();
const PORT = process.env.PORT || 4001;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server is running on', PORT);
});

app.post('/calc', (req,res) => {
    let valsCalc = req.body;
    console.log(valsCalc);
    let operator = valsCalc.math;
    let x = valsCalc.xValue;
    let y = valsCalc.yValue;
    console.log(operator, x, y);
    switch(operator){
        case 'Add':
        let addTotal = parseInt(x) + parseInt(y)
        console.log(addTotal);
        break;
        case 'Subtract':
        let subTotal = parseInt(x) - parseInt(y) // parseInt not needed...
        console.log(subTotal);
        break;
        case 'Multiply':
        let multTotal = parseInt(x) * parseInt(y) // parseInt not needed...
        console.log(multTotal);
        break;
        case 'Divide':
        let divTotal = parseInt(x) + parseInt(y) // parseInt not needed...
        console.log(divTotal);
        break;
    }
    res.sendStatus(200);
})