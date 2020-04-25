if (Java.available) {
    Java.perform(function () {
        // var c = Java.use("com.sina.weibo.applicationInit.b.a.c");//com.sina.weibo.applicationInit.b.a.c.a
        // var PreferenceUtil = Java.use("com.sina.push.utils.PreferenceUtil");//com.sina.weibo.applicationInit.b.a.c.a
        // PreferenceUtil.getPushChannelType.implementation = function () {
        //     console.warn("Hook a...");
        //     console.warn('ret: ' + this.getPushChannelType());
        //     return this.getPushChannelType();
        // };


        var b = Java.use("com.sina.weibo.net.carrier.Strategy.b");//com.sina.weibo.applicationInit.b.a.c.a
        b.a.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
            console.warn("Hook isSupport ...");
            return this.a(a, b);
        };
        //  var ad = Java.use("com.sina.weibo.ad");
        // ad.a.overload('[B').implementation = function (c) {
        //     console.warn("Hook add...");
        //     console.warn("a: ",c);
        //     return this.a(c);
        // };
        var ms = Module.enumerateExports(
            {
                onMatch: function (exp) {
                    // if (exp.name === "libutility.so")
                    // console.warn("exp.name: ", exp.name);
                }
                ,
                onComplete: function () {
                }
            }
        );

        // console.warn("exp.name: ", ms[0].name);

        var baseAddr = Process.findModuleByName("libaccount.so");
        console.warn("baseAddr: ", baseAddr);
        baseAddr11 = Process.getModuleByAddress(0x25927);
        console.warn("baseAddr11: ", baseAddr11);

        // var baseAddr = Module.findBaseAddress('libaccount.so');
        // var baseAddr = Module.getExportByName
        // console.warn("baseAddr: ", baseAddr);
        // // var funcAddr = baseAddr.add(0x2400);
        // var nativeP = Module.getExportByName("libaccount.so", "Java_com_sina_weibo_statistic_LogFeedbackActivity_encryptData");
        // console.warn("nativeP", nativeP);
        // var sub_2400 = new NativePointer(Module.findBaseAddress("libaccount.so")).add(0x2400 + 1);
        // Interceptor.attach(sub_2400, {
        //     onEnter: function (args) {
        //         console.warn("a: ");
        //     },
        //     onLeave: function (retval) {
        //         console.warn("retval: ", retval);
        //     }
        //
        // });

    });
}


