import puppeteer from 'puppeteer'

;(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto('https://s3.kingtime.jp/independent/recorder/personal/')
  await page.waitFor(5000)

  await page.type('#id', '5yw3000103')
  await page.type('#password', 'reimutaisa71505')
  await page.click('.btn-control-message')

  const wait_time =
    [ 1000 * 60 // 1 min
    , 1000 * 120
    , 1000 * 180
    , 1000 * 240
    , 1000 * 300
    , 1000 * 360
    , 1000 * 420 // 7 min
    ]
  await page.waitFor(wait_time[Math.floor(Math.random() * wait_time.length)]) // randomに取り出す
  await page.click('div.record-btn-inner.record-clock-in')
  await page.waitFor(10000)

  await browser.close()
})()