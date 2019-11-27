// setImmediate(function() {
//     console.log("[*]  Native Starting script");
//     var nativePointer = Module.findExportByName("libnative-lib.so","Java_ese_xposedtest_MainActivity_stringFromJNI");
//     send("nativePointer--->"+nativePointer);
//     Interceptor.attach(nativePointer,{
//         onEnter:function(args){
//             console.log("ok");
//             send("Sart arg-->"+args[0]+"  "+args[1]);
//         },
//         onLeave:function(retval){
//             send("return value:"+retval);
//         }
//     });
// })

setImmediate(function () {
    console.log("start...");
    var nativeso = Module.load()

})
