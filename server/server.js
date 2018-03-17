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
        let mathAddHist = x + ' + ' + y + ' = ' + addTotal;
        console.log(addTotal);
        console.log(mathAddHist);
        break;
        case 'Subtract':
        let subTotal = parseInt(x) - parseInt(y) // parseInt not needed...
        let mathSubHist = x + ' - ' + y + ' = ' + subTotal;
        console.log(subTotal);
        console.log(mathSubHist);
        break;
        case 'Multiply':
        let multTotal = parseInt(x) * parseInt(y) // parseInt not needed...
        let mathMultHist = x + ' * ' + y + ' = ' + multTotal;
        console.log(multTotal);
        console.log(mathMultHist);
        break;
        case 'Divide':
        let divTotal = parseInt(x) / parseInt(y) // parseInt not needed...
        let mathDivHist = x + ' / ' + y + ' = ' + divTotal;
        console.log(divTotal);
        console.log(mathDivHist);
        break;
    }
    res.sendStatus(200);
})