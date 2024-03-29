const puppeteer = require('puppeteer');
const {url} = require('../texts/fortests');

async function testButton(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,}
    );


    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу index.html');
    await page.goto(url);


    console.log('Клик в кнопку "Retrowave?"');
    const searchButton = await page.$('.button[type=button]');
    await searchButton.click();
    await searchButton.click();
    
    const result = await page.evaluate(() => {
        
        let phrase = document.querySelector('.phrase').innerText;
        return {
            phrase
        }
     
      });
    console.log(result);
    if (result.phrase == 'это Kavinsky') {
        console.log('Ок')
    } else {
        console.log('Неок')
    };
   
    
    console.log('Закрытие браузера');
    await browser.close();
    console.log(result.price);
};

// testButton();

async function testCard(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,}
    );


    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу index.html');
    await page.goto(url);

    console.log('Клик по карточке');
    const card = await page.$('.card[type=button]');
    await card.click();

    console.log('Закрытие модалки');
    const buttonClose = await page.$('.btn-close');
    await buttonClose.click();
    
   
    await page.screenshot({ path: 'fullpage.png', fullPage: true });
    console.log('Скриншот');
    console.log('Закрытие браузера');
    await browser.close();
    
};

//testCard();

async function testBtnSend(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        defaultViewport: null}
    );


    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу index.html');
    await page.goto(url);

    console.log('Ввод текста в поля')
    await page.waitForSelector('input[name=name]');
    await page.waitForSelector('input[name=email]');
    await page.$eval('input[name=name]', el => el.value = 'Иван Смолин');
    await page.$eval('input[name=email]', el => el.value = 'example@test.ru');


    console.log('Клик по кнопке "Отправить"');
    const btnSnd = await page.$('.btnSnd');
    await btnSnd.click();

    const result = await page.evaluate(() => {
        
        let uname = document.querySelector('.mtitle').innerText;
        let email = document.querySelector('.minfo').innerText;
        return {
            uname,
            email
        }
     
      });
    console.log(result);
    if (result.uname === 'Иван Смолин' && result.email === 'Мы отправили подборку лучших произведений Retrowave/Synthwave на ваш электронный почтовый ящик "example@test.ru"') {
        console.log('Ок')
    } else {
        console.log('Неок')
    };


    console.log('Закрытие модалки');
    const buttonClose = await page.$('.btn-close');
    await buttonClose.click();
    
   
    await page.screenshot({ path: 'fullpage.png', fullPage: true });
    console.log('Скриншот');
    console.log('Закрытие браузера');
    await browser.close();
    
};

testBtnSend();