import frida,sys

jscode = """

if(Java.available){
   Java.perform(function () {
       var a = Java.use("com.baidu.netdisk.account.io._.a");
       a._.implementation=function (a,b) {
          console.log("Hook Start...");
        send('arg0: '+ a);
        send('arg1: '+ b);
         send('result: '+ this._(a,b));
         return 2;
       }
   });
}

"""
process = frida.get_usb_device().attach('com.baidu.netdisk')
print('[*] process')
script = process.create_script(jscode)
def on_message(message,data):
	print (message)
script.on("message",on_message)

script.load()
sys.stdin.read()