import sys
import frida
#
def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)
# packageName = "me.ele"
packageName = "com.smile.gifmaker"
process = frida.get_usb_device(1).attach(packageName)
print('[*] process')
js=open("test1.js","r", encoding='UTF-8').read()
script = process.create_script(js)
script.on("message",on_message)
script.load()
sys.stdin.read()






