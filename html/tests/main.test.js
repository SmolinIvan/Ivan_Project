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
      let cardContentTitle = document.querySelector('h3').textContent;
      let cardTitle1 = document.querySelector('.card[type=card1]').innerText;
      let cardTitle2 = document.querySelector('.card[type=card2]').innerText;
      let cardTitle3 = document.querySelector('.card[type=card3]').innerText;
      let cardTitle4 = document.querySelector('.card[type=card4]').innerText;
      return {
          title,
          cardContentTitle,
          cardTitle1,
          cardTitle2,
          cardTitle3,
          cardTitle4
      };
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

    test("Заголовок страницы", async () => {  
      expect(maintext.title).toBe("New Retro Wave");
    });
  
    test("Заголовок контента", async () => {  
      expect(maintext.cardContentTitle).toBe(" Известные представители жанра ");
    });

    test("Проверка названия карточки Kavinsky", async () => {
      expect(maintext.cardTitle1).toBe("Kavinsky");
    });
    
    test("Проверка названия карточки Orax", async () => {
      expect(maintext.cardTitle2).toBe("Orax");
    });

    test("Проверка названия карточки Dance With The Dead", async () => {
      expect(maintext.cardTitle3).toBe("Dance with the Dead");
    });

    test("Проверка названия карточки 3FORCE", async () => {
      expect(maintext.cardTitle4).toBe("3FORCE");
    });

  
});
  