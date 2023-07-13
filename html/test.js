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

    // console.log('Ввод текста "Автоматизация тестирования" в поисковую строку');
   /*  const searchField = await page.$('#text');
    await searchField.type('Автоматизация тестирования'); */

    console.log('Клик в кнопку "Retrowave?"');
    const searchButton = await page.$('.button[type=button]');
    await searchButton.click();
    
    const result = await page.evaluate(() => {
        
        let price = document.querySelector('.phrase').innerText;
        return{
            price
        }
     
      });
    console.log(result);
    if (result.price == 'Изменение текста') {
        console.log('Ок')
    } else {
        console.log('Неок')
    };
   
    
    console.log('Закрытие браузера');
    await browser.close();
    console.log(result.price);
};

//testButton();

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

testCard();