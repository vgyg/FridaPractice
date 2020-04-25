from selenium import webdriver
import time

options = webdriver.ChromeOptions()
options.add_argument('--save-page-as-mhtml')
# 设置chromedriver，并打开webdriver
driver = webdriver.Chrome(chrome_options=options)
get_html = "test.html"
# 打开文件，准备写入
f = open(get_html, 'wb')
url = 'https://meishi.meituan.com/i/certificate/foodsafety?mtId=96772281&f=android&token=owBCehCGJhqOWHy7FNUYDrDbOkAAAAAAQgoAAGKADLeGiP-GwlKooA-QA-v3JIr7I53-j-23hg8iPjYW0V58eCgWgK1Bg6kmUd4y9g&userid=290604810&lat=39.87494107082511&lng=116.68543279811433&utm_source=undefined&utm_medium=android&utm_term=1000060203&version_name=10.6.203&utm_content=862400048396856&utm_campaign=AgroupBgroupC0D200E243168466715547220197960310848290710313_a96772281_c5_e7734547612518489833Ghomepage_category2_1__a1__c-1024__gfood__hpoilist__i56&ci=1&msid=8624000483968561585628957294&uuid=000000000000090CAE6634A8D42948748FEBCC1557198A157954239667625851'  # 这里填你要保存的网页的网址
driver.get(url)
time.sleep(2)  # 保证浏览器响应成功后再进行下一步操作
# 写入文件
f.write(driver.page_source.encode("utf-8", "ignore"))  # 忽略非法字符
print('写入成功')
# 关闭文件
f.close()
