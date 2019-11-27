import frida,sys


jscode="""
 
"""



process = frida.get_usb_device().attach('com.fingersoft.hillclimb')
print('[*] process')
script = process.create_script(jscode)
def on_message(message,data):
	print (message)
script.on("message",on_message)
script.load()
sys.stdin.read()




