const axios = require('axios')
const cheerio = require('cheerio')

 axios.get('https://www.varzesh3.com/livescore')
.then((res)=>{
const html = res.data
const $ = cheerio.load(html )
const today = $('div.today')
console.log(today.text()) 

})


