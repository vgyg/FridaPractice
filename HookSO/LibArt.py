import sys
import frida
#
def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)
#
# # device = frida.get_remote_device()
# # print(device)
# # packageName = "com.sina.weibo"
# # pid = device.spawn(packageName)
# # print(pid)
# # session =device.attach(pid)
# # js=open("test.js","r", encoding='UTF-8').read()
# # script = session.create_script(js)
# # script.on("message", on_message)
# # script.load()
# # # device.resume(pid)
# # sys.stdin.read()
# # #
# # #
#
packageName = "com.sina.weibo"
process = frida.get_remote_device().attach(packageName)
print('[*] process')
js=open("test.js","r", encoding='UTF-8').read()
script = process.create_script(js)
# def on_message(message,data):
#     print (message)
script.on("message",on_message)
script.load()
sys.stdin.read()






