import frida,sys

jscode = """

if (Java.available) {
    Java.perform(function () {
        var SQLiteDatabase = Java.use("com.tencent.wcdb.database.SQLiteDatabase");
        var ContentValues = Java.use("android.content.ContentValues");
        SQLiteDatabase.insert.implementation = function (a, b, c) {

            console.warn("Hook Start...");
            console.warn('arg0: ' + a);
            console.warn('arg1: ' + b);
            console.warn('arg2: ' + c);
             var m_contentCalues = Java.cast(c,ContentValues)
            console.warn('type: ' + m_contentCalues.getAsString("cre_name"));
            console.warn('content: ' + m_contentCalues.getAsString("content"));

            return this.insert(a, b, c);
        }
          SQLiteDatabase.getLabel.implementation=function () {
              console.warn('result: ' + this.getLable());
             return this.getLabel();
        }
    });
}

"""
process = frida.get_usb_device().attach('com.tencent.mm')
print('[*] process')
script = process.create_script(jscode)
def on_message(message,data):
	print (message)
script.on("message",on_message)
script.load()
sys.stdin.read()