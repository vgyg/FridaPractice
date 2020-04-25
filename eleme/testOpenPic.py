from selenium import webdriver
import time
import win32api
import win32con
import os

list1 = open("bbb.csv", "r", encoding='UTF-8').readlines()

for i in range(0, len(list1)):
    url = list1[i]
    print(url)
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
    time.sleep(2)
    # 关闭webdriver
    driver.close()
