// if (Java.available) {
//     Java.perform(function () {
//         var c = Java.use("com.sina.weibo.applicationInit.b.a.c");//com.sina.weibo.applicationInit.b.a.c.a
//         c.l.implementation = function (a) {
//             console.warn("Hook ...");
//             console.warn('a: ' + a);
//             console.warn('ret: ' + this.l(a));
//             return this.l(a);
//         };
//
//     });
    if(Java.available){
    Java.perform(function () {
        var PatchProxy = Java.use("com.meituan.robust.PatchProxy");//com.sina.weibo.applicationInit.b.a.c.a
        PatchProxy.isSupport.implementation = function (a) {
            console.warn("Hook isSupport ...");
            return this.isSupport(a);
        };

    });
}
//
//
// var odule = Module.ensureInitialized("libutility.so");
// var name = Module.getExportByName(null, "getDecryptionString");
// Interceptor.attach(name, {
//     onEnter: function (args) {
//         console.log("arg[0]: ", args[0]);
//
//     },
//     onLeave: function (retval) {
//         console.log("retval: ", retval);
//     }
// });