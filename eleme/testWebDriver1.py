from selenium import webdriver
import time
import win32api
import win32con
import os

list1 = open("bbb.txt", "r", encoding='UTF-8').readlines()

for i in range(0, len(list1)):
    list1[i] = list1[i].rstrip('\n')
    id = list1[i].split(",")[1]
    name = list1[i].split(",")[2]+"_"+list1[i].split(",")[0]+"_"+id
    url = "https://meishi.meituan.com/i/certificate/foodsafety?mtId="+id+"&f=android&token=owBCehCGJhqOWHy7FNUYDrDbOkAAAAAAQgoAAGKADLeGiP-GwlKooA-QA-v3JIr7I53-j-23hg8iPjYW0V58eCgWgK1Bg6kmUd4y9g&userid=290604810&lat=39.874913286072044&lng=116.68539728948531&utm_source=undefined&utm_medium=android&utm_term=1000060203&version_name=10.6.203&utm_content=862400048396856&utm_campaign=AgroupBgroupC0D200E243168466715547220197960310848290710313_a168853584_c1_e4320249642646189019Ghomepage_category2_1__a1__c-1024__gfood__hpoilist__i1&ci=1&msid=8624000483968561585628957294&uuid=000000000000090CAE6634A8D42948748FEBCC1557198A157954239667625851"
    print(url)

    # 打开另存为mhtml功能
    options = webdriver.ChromeOptions()
    options.add_argument('--save-page-as-mhtml')
    # 设置chromedriver，并打开webdriver
    driver = webdriver.Chrome(options=options)
    driver.get(url)    # 模拟键盘操作
    win32api.keybd_event(17, 0, 0, 0)  # 按下ctrl
    win32api.keybd_event(65, 0, 0, 0)  # 按下a
    win32api.keybd_event(65, 0, win32con.KEYEVENTF_KEYUP, 0)  # 释放a
    win32api.keybd_event(83, 0, 0, 0)  # 按下s
    win32api.keybd_event(83, 0, win32con.KEYEVENTF_KEYUP, 0)  # 释放s
    win32api.keybd_event(17, 0, win32con.KEYEVENTF_KEYUP, 0)  # 释放ctrl

    time.sleep(1)
    win32api.keybd_event(13, 0, 0, 0)  # 按下enter
    win32api.keybd_event(13, 0, win32con.KEYEVENTF_KEYUP, 0)  # 释放enter
    # 预估下载时间，后期根据实际网速调整
    time.sleep(3)
    # 关闭webdriver
    driver.close()

    path = 'C:/Users/11633/Downloads'
    file = "食品安全档案.mhtml"

    if file in os.listdir(path):
        os.rename(os.path.join(path, file), os.path.join(path, name + ".mhtml"))





