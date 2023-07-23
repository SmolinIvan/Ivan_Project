const puppeteer = require('puppeteer');
const {url} = require('../texts/fortests');
const {mtitle} = require('../texts/fortests');
const {minfo} = require('../texts/fortests');

let page;
let browser;
// const width = 1920;
// const height = 1080;


beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: "new"
    // slowMo: 50,
    // args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.goto(url);
  // await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe("Проверка содержимого страниц", () => {
  test("Проверка cодержимого карточки Kavinsky", async () => {
    const card1 = await page.$('.card[type=card1]');
    const btnClose = await page.$('.btn-close');
    await card1.click();

    let result = await page.evaluate( () => {
      let mtitle = document.querySelector('.mtitle').innerText;
      let minfo = document.querySelector('.minfo').innerText;
      return {
        mtitle,
        minfo
        };
    });
    
    btnClose.click();
    expect(result.mtitle).toBe(mtitle[0]);
    expect(result.minfo).toBe(minfo[0]);
  });

  test("Проверка cодержимого карточки Orax", async () => {      
    const card2 = await page.$('.card[type=card2]');
    await card2.click();
    const btnClose = await page.$('.btn-close');

    let result = await page.evaluate( () => {
      let mtitle1 = document.querySelector('.mtitle').innerText;
      let minfo1 = document.querySelector('.minfo').innerText;
      return {
        mtitle1,
        minfo1
      };
    });
    btnClose.click() 
    expect(result.mtitle1).toBe(mtitle[1]);
    expect(result.minfo1).toBe(minfo[1]); 
        
  });

  test("Проверка cодержимого карточки Dance With The Dead", async () => {
    const card3 = await page.$('.card[type=card3]');
    await card3.click();
    const btnClose = await page.$('.btn-close');

    let result = await page.evaluate( () => {
      let mtitle2 = document.querySelector('.mtitle').innerText;
      let minfo2 = document.querySelector('.minfo').innerText;
      return {
        mtitle2,
        minfo2
      };
    });
    btnClose.click(); 
    expect(result.mtitle2).toBe(mtitle[2]);
    expect(result.minfo2).toBe(minfo[2]);     
  });

  test("Проверка cодержимого карточки 3FORCE", async () => {
    const card4 = await page.$('.card[type=card4]');
    await card4.click();
    const btnClose = await page.$('.btn-close');

    let result = await page.evaluate( () => {
      let mtitle3 = document.querySelector('.mtitle').innerText;
      let minfo3 = document.querySelector('.minfo').innerText;
      return {
        mtitle3,
        minfo3
      };
    });
    btnClose.click(); 
    expect(result.mtitle3).toBe(mtitle[3]);
    expect(result.minfo3).toBe(minfo[3]);    
  });
});
