import sys
import frida

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

device = frida.get_remote_device()
print(device)
packageName = "com.ldzs.zhangxin"
# packageName = "com.baidu.wenku"
# packageName = "com.tuan800.tao800"
# packageName = "com.wm.dmall"
pid = device.spawn(packageName)
session =device.attach(pid)
js=open("dump_dex_3.js","r", encoding='UTF-8').read()
script = session.create_script(js)
script.on("message", on_message)
script.load()
device.resume(pid)
sys.stdin.read()


