from selenium import webdriver
import time
import win32api
import win32con
import os
offset = 0
# print(url)
for i in range(0, 10):
    print(offset)
    url = "https://apimeishi.meituan.com/meishi/filter/v7/deal/select?wifi-name=Xiaomi_675D%08lsy0622%08401%08gehua01141610190072869%08&offset="+str(offset)+"&is_preload=1&ci=1&wifi-strength=-30%08-73%08-75%08-77%08&cityId=1&sort=solds&wifi-cur=0&isLocal=1&mypos=39.874932657330994%2C116.68540589919716&wifi-mac=34%3Ace%3A00%3A04%3A67%3A5e%0854%3Aa7%3A03%3A17%3Aab%3Afb%08d0%3Ac7%3Ac0%3A1b%3A7a%3Aae%08bc%3A14%3Aef%3Ac4%3Ad7%3A71%08&areaId=1472&cateId=1&hasGroup=true&metrics_start_time=162281963&newStyle=e&lat=39.874932657330994&lng=116.68540589919716"
    offset=offset+25
    driver = webdriver.Chrome()
    driver.get(url)  # 模拟键盘操作
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
    file = "select.json"
    #
    if file in os.listdir(path):
        os.rename(os.path.join(path, file), os.path.join(path, "望京" + str(i) + ".json"))




