import sys
import frida


# def on_message(message, data):
#     base = message['payload']['base']
#     size = int(message['payload']['size'])
#     print(hex(base),size)
#     # print session
#     # dex_bytes = session.read_bytes(base, size)
#     # f = open("1.dex","wb")
#     # f.write(dex_bytes)
#     # f.close()
def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

device = frida.get_usb_device()
print(device)
packageName = "com.wm.dmall"
pid = device.spawn(packageName)
session =device.attach(pid)


js="""
Interceptor.attach(Module.findExportByName("libart.so", "_ZN3art7DexFile10OpenMemoryEPKhjRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEjPNS_6MemMapEPKNS_10OatDexFileEPS9_"), {
    onEnter: function (args) {
        var begin = args[1]
        console.log("magic : " + Memory.readUtf8String(begin))
        console.log("args[1] : " + args[1])
        console.log("args[2] : " + args[2])
        console.log("args[3] : " + args[3])
        console.log("args[4] : " + args[4])
        console.log("args[5] : " + args[5])
        console.log("args[6] : " + args[6])
        console.log("args[7] : " + args[7])
        var address = parseInt(begin,16) + 0x20
        var dex_size = Memory.readInt(ptr(address))
        console.log("dex_size :" + dex_size)
      
    },
    onLeave: function (retval) {
        if (retval.toInt32() > 0) {
        }
    }
});
"""
script = session.create_script(js)
script.on("message" , on_message)
script.load()
device.resume(pid)
sys.stdin.read()

# // dump
# dex
# 到 / data / data / pkg / 目录下
# var
# packageName = "com.wm.dmall"
# var
# file = new
# File("/sdcard/DCIM/dexdump/" + packageName + dex_size + ".dex", "wb+")
# file.write(Memory.readByteArray(begin, dex_size))
# file.flush()
# file.close()
# console.log("dex finish!!")