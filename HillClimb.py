import frida,sys

# gem lock 1,000,000
jscode="""
if(Java.available){
   Java.perform(function () {
       var InAppPurchaseStore = Java.use("com.fingersoft.game.InAppPurchaseStore");
       InAppPurchaseStore.getGems.implementation=function (a) {
           console.log("Hook Start..."); 
            console.log("gem: "+InAppPurchaseStore.getGems(a)); 
           return 1000000;
       }
   });
}
"""

process = frida.get_usb_device().attach('com.fingersoft.hillclimb')
print('[*] process')
script = process.create_script(jscode)
def on_message(message,data):
	print (message)
script.on("message",on_message)

script.load()
sys.stdin.read()







