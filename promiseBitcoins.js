const axios = require('axios');
const fs = require('fs').promises;

async function getBitcoins() {
    try{
const response = await axios('https://api.coindesk.com/v1/bpi/currentprice.json');
const data = await response;
let BitcoinList = "";

data.forEach(bitcoin=>{
    BitcoinList += `${bitcoin['time']}, ${bitcoin['chartName']}, ${bitcoin['updated']}\n`;
});
//crear archivo
fs.writeFile('bitcoinprice.txt',BitcoinList, (error)=>{
  if(error){
      return;
  }
  console.log('se ha creado un archivo'); 
})
}catch(error){
    console.log(error)
}
}

getBitcoins();

/*axios.get(url, data)
.then((response) => {
    console.log(response.data);
    response.data.foreach(bitcoin=>{
        BitcoinPrice +=`${bitcoin['time']}, ${bitcoin['updated']}\n`;
    });
})
/*.then(()=>{
    console.log('Tu lista bitcoins ha sido guardada como promiseBitcoins.csv')
})*/