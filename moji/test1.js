if (Java.available) {
    Java.perform(function () {

        var b = Java.use("com.baidu.lbsapi.auth.b");
        var HashMap = Java.use("java.util.HashMap");
        var LBSAuthManager = Java.use("com.baidu.lbsapi.auth.LBSAuthManager");
        var auth_a = Java.use("com.baidu.lbsapi.auth.a");
        LBSAuthManager.a.overload('android.content.Context').implementation = function (a1) {
            console.warn("Hook reportWithUrl...");
            console.warn("a: ", a1);
            console.warn("mcode: ", b.a(a1));
             // 57:A7:05:06:77:DA:E0:7F:22:1A:DD:60:9F:0F:12:77:97:55:A8:7D;com.soufun.app
            //原版签名 3A:11:BC:F4:25:97:BB:A2:F6:26:0B:58:1B:4E:0D:E8:C7:F7:95:3A;com.soufun.app
            return this.a(a1);
        };
        // HashMap.put.implementation = function (a1,b1) {
        //     console.warn("Hook put...");
        //     console.warn("a: ", a1);
        //     console.warn("b1: ", b1);
        //     return this.put(a1,b1);
        // };

        LBSAuthManager.a.overload('boolean', 'java.lang.String', 'java.util.Hashtable', 'java.lang.String').implementation = function (a, b, c, d) {
            console.warn("Hook a2...");
            console.warn("a: ", a);
            // console.warn("ret: ", this.a(a));

            return this.a(a, b, c, d);
        };
        auth_a.a.overload('java.lang.String').implementation = function (a) {
            console.warn("Hook a3...");
            console.warn("a: ", a);

            return this.a(a);
        };
    });
}


