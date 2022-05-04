const axios = require('axios');
const fs = require('fs');

async function getBitcoins() {
    try {
        const response = await axios('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response;
        let BitcoinList = "";
       
        //console.log(data.data.chartName);
            dd = data.data;

            Object.entries(dd.bpi).forEach(bitcoin => {
            BitcoinList += `${bitcoin[1].code}, ${bitcoin[1].rate}\n`;
           //console.log(bitcoin);
        });
        //console.log(BitcoinList)
        //crear archivo
        fs.writeFile('bitcoinprice.csv', BitcoinList, (error) => {
            if (error) {
                console.log(response);
                return;
            }
            console.log('se ha creado un archivo');
        })
    } catch (error) {
        console.log(error)
    }
}

getBitcoins();