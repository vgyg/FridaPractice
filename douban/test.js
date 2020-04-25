if (Java.available) {
    Java.perform(function () {
        var SQLiteDatabase = Java.use("com.tencent.wcdb.database.SQLiteDatabase");
        var ContentValues = Java.use("android.content.ContentValues");
        SQLiteDatabase.insert.implementation = function (a, b, c) {

            console.warn("Hook Start...");
            console.warn('arg0: ' + a);
            console.warn('arg1: ' + b);
            console.warn('arg2: ' + c);
             var m_contentCalues = Java.cast(obj,ContentValues)
            console.warn('type: ' + m_contentCalues.getAsInteger("type"));

            return this.insert(a, b, c);
        }
        SQLiteDatabase.getLabel.implementation=function () {
              console.warn('result: ' + this.getLable());
             return this.getLabel();
        }
    });
}




if (Java.available) {
    Java.perform(function () {
        var SQLiteDatabase = Java.use("com.tencent.wcdb.database.SQLiteDatabase");
        var ContentValues = Java.use("android.content.ContentValues");
        SQLiteDatabase.openDatabase.overload('java.lang.String','[B','com.tencent.wcdb.database.SQLiteCipherSpec','com.tencent.wcdb.database.SQLiteDatabase$CursorFactory','int', 'com.tencent.wcdb.DatabaseErrorHandler', 'int' ).implementation = function (a, b, c,d,e,f,g) {

            console.warn("Hook Start...");
            console.warn('arg0: ' + a);
            console.warn('arg1: ' + b);
            console.warn('arg2: ' + c);
            return this.insert(a, b, c,d,e,f,g);
        }
    });
}