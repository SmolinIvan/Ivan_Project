const puppeteer = require('puppeteer');
const {url} = require('../texts/fortests');

let page;
let browser;
const width = 1920;
const height = 1080;
let maintext;

beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.goto(`${url}`);
    await page.setViewport({ width, height });
    maintext = await page.evaluate( async () => {
      let title = document.querySelector('title').textContent;
      let cardContentTitle = document.querySelector('h3').textContent
      return {
          title,
          cardContentTitle
      }
  });
  });
  afterAll(() => {
    browser.close();
  });
  

  describe("Проверка содержания главной страницы", () => {
    test("При двух кликах выводится текст 'Retrowave - это Kavinsky'", async () => {
      const Button = await page.$('.button[type=button]');
      await Button.click();
      await Button.click();
      let result = await page.evaluate(() => {
        let advice = document.querySelector('.advice1').innerText;
        let phrase = document.querySelector('.phrase').innerText;
        return {
          advice,
          phrase
        }
      });
      expect(result.advice).toBe("Retrowave - ");
      expect(result.phrase).toBe("это Kavinsky");
    });

    test("Проверка заголовка страницы", async () => {  
      expect(maintext.title).toBe("New Retro Wave");
    });
  
    test("Проверка заголовка страницы", async () => {  
      expect(maintext.cardContentTitle).toBe(" Известные представители жанра ");
    });
  

  
});
  