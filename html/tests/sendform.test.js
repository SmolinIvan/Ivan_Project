 const puppeteer = require('puppeteer');
 const {url} = require('../texts/fortests');
//  jest.setTimeout(20000);

 let page;
 let browser;
//  const width = 1920;
//  const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: "new",
        // slowMo: 50,
        // args: [`--winodw-size=${width},${height}`]
    });
    page = await browser.newPage();
    // await page.setViewport({ width, height });
    await page.goto(url);
});
afterAll(() => {
  browser.close();
});

describe("Проверка полей для ввода и модального окна при отправке данных", () => {
    test("Клик по кнопке при корректно заполненных полях", async () => {
        await page.type( '.input[name="name"]',"Ivan Smolin");
        await page.type( '.input[name="email"]',"ivansmolin9667@yandex.ru");
        await page.click(".btnSnd");
        const modalText = await page.evaluate(() => {
            const title = document.querySelector(".mtitle").textContent;
            const info = document.querySelector(".minfo").textContent;
            return {
                title,
                info,
            };
        });
        await page.click('.btn-close');
        expect(modalText.title).toBe("Ivan Smolin");
        expect(modalText.info).toBe('Мы отправили подборку лучших произведений Retrowave/Synthwave на ваш электронный почтовый ящик "ivansmolin9667@yandex.ru"');   
        });
        
    test("Клик по кнопке при пустом поле Имя", async () => {
        await page.focus('.input[name="name"]');
        
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');   
           
        await page.click(".btnSnd");
        let error = await page.evaluate(() => {
            let text = document.querySelectorAll('.label')[1].innerText;
            return {
                text
            };
        });
        expect(error.text).toBe("Введите имя");
        })

    test("Клик по кнопке при пустом поле Email", async () => {
        await page.evaluate( () => document.getElementById("name").value = "Ivan Smolin")
        await page.evaluate( () => document.getElementById("email").value = "")
        await page.click(".btnSnd");
        let error = await page.evaluate(() => {
            let text = document.querySelectorAll('.label')[3].innerText;
            return {
                text
            };
        });
        expect(error.text).toBe("Введите email");
        })
    });
