const puppeteer = require('puppeteer');

async function testButton(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,}
    );


    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу index.html');
    await page.goto('file:///Q:/Git/Ivan_Project/html/index.html');


    console.log('Клик в кнопку "Retrowave?"');
    const searchButton = await page.$('.button[type=button]');
    await searchButton.click();
    await searchButton.click();
    
    const result = await page.evaluate(() => {
        
        let price = document.querySelector('.phrase').innerText;
        return{
            price
        }
     
      });
    console.log(result);
    if (result.price == 'это Kavinsky') {
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

    console.log('Переход на страницу inde.html');
    await page.goto('file:///Q:/Git/Ivan_Project/html/index.html');

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
        slowMo: 200,
        defaultViewport: null}
    );


    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу inde.html');
    await page.goto('file:///Q:/Git/Ivan_Project/html/index.html');

    console.log('Ввод текста в поля')
    await page.waitForSelector('input[name=name]');
    await page.waitForSelector('input[name=email]');
    await page.$eval('input[name=name]', el => el.value = 'Тимоха');
    await page.$eval('input[name=email]', el => el.value = 'Екараный бабай');


    console.log('Клик по кнопке "Отправить"');
    const btnSnd = await page.$('.btnSnd');
    await btnSnd.click();

    const result = await page.evaluate(() => {
        
        let uname = document.querySelector('.mtitle').innerText;
        let email = document.querySelector('.minfo').innerText;
        return{
            uname,
            email
        }
     
      });
    console.log(result);
    if (result.uname === 'Тимоха' && result.email == 'Екараный бабай') {
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