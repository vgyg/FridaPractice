import sys
import frida

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

device = frida.get_usb_device()
print(device)
# packageName = "com.wm.dmall"
# packageName = "com.aigz.cloudgame"
packageName = "com.next.netcraft.aligamet"
pid = device.spawn(packageName)
session =device.attach(pid)


js=open("unpack.js","r").read()
script = session.create_script(js)
script.on("message" , on_message)
script.load()
device.resume(pid)
sys.stdin.read()


