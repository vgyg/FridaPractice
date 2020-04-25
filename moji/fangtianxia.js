if (Java.available) {
    Java.perform(function () {
        var av = Java.use("com.eguan.monitor.av");//com.sina.weibo.applicationInit.b.a.c.a
        var am = Java.use("com.eguan.monitor.am");//com.sina.weibo.applicationInit.b.a.c.a
        var mJSONObject = Java.use("org.json.JSONObject");//com.sina.weibo.applicationInit.b.a.c.a
        // av.a.overload('[B', 'java.lang.String').implementation = function (a, b) {
        //     console.warn("Hook [B', 'java.lang.String' ...");
        //     console.warn("a: ",a);
        //     console.warn("b: ",b);
        //     console.warn("res: ",this.a(a,b));
        //     return this.a(a,b);
        // };
        //  var mArray = Java.use("java.lang.reflect.Array");
        // av.a.overload('[B').implementation = function (a) {
        //     console.warn("Hook [B ...");
        //     console.warn("a: ",mArray.get(a));
        //     console.warn("res: ",this.a(a));
        //     return this.a(a);
        // };
        var mBase64 = Java.use("android.util.Base64");
        var mSignature = Java.use("android.content.pm.Signature");
        var mArray = Java.use("java.lang.reflect.Array");
        var DeviceConfig = Java.use("com.umeng.commonsdk.statistics.common.DeviceConfig");
        // DeviceConfig.getAppHashKey.implementation = function (a) {
        //     console.warn("Hook getAppHashKey ...");
        //     console.warn("a: ", a);
        //     console.warn("res: ", this.getAppHashKey(a));
        //     return this.getAppHashKey(a);
        // };
        // DeviceConfig.getAppSHA1Key.implementation = function (a) {
        //     console.warn("Hook getAppSHA1Key ...");
        //     console.warn("a: ", a);
        //     console.warn("res: ", this.getAppSHA1Key(a));
        //     return this.getAppSHA1Key(a);
        // };
        // DeviceConfig.getAppMD5Signature.implementation = function (a) {
        //     console.warn("Hook getAppMD5Signature ...");
        //     console.warn("a: ", a);
        //     console.warn("res: ", this.getAppMD5Signature(a));
        //     return this.getAppMD5Signature(a);
        // };

        var CommonUtil = Java.use("cn.com.mma.mobile.tracking.util.CommonUtil");
        var Countly_4 = Java.use("cn.com.mma.mobile.tracking.api.Countly$4");

        CommonUtil.getSignature.implementation = function (a, b, c, d) {
            console.warn("Hook getSignature ...");
            console.warn("a: ", a);
            console.warn("b: ", b);
            console.warn("c: ", c);
            console.warn("d: ", d);
            console.warn("res: ", this.getSignature(a, b, c, d));
            return this.getSignature(a, b, c, d);
        };
        Countly_4.onEventPresent.implementation = function (a) {
            console.warn("Hook getSignature ...");
            console.warn("a: ", a);
            console.warn("res: ", this.onEventPresent(a));
            return this.onEventPresent(a);
        };
        var utils_e = Java.use("com.bytedance.sdk.openadsdk.utils.e");

        utils_e.a.overload('android.content.Context').implementation = function (a) {
            console.warn("Hook utils_e.a ...");
            console.warn("a: ", a);
            console.warn("res: ", this.a(a));
            return this.a(a);
        };
        var Process = Java.use("android.os.Process");

        Process.killProcess.implementation = function (a) {
            console.warn("Hook killProcess...");
            console.warn("a: ", a);
            console.warn("res: ", this.killProcess(a));
            return this.killProcess(a);
        };


        // am.a.overload('android.content.Context').implementation = function (a) {
        //     console.warn("Hook aContext ...");
        //     console.warn("a: ", a);
        //     // var aaa = Java.cast(this.a(a), mJSONObject);
        //     // console.warn("res: ", aaa.toString());
        //     var sig = a.getPackageManager().getPackageInfo(a.getPackageName(), 64);
        //     console.warn('sig: ' + sig);
        //     var signatures = sig.class.getDeclaredField("signatures");
        //     signatures.setAccessible(true);
        //     var value = signatures.get(sig);
        //     var abc = value.getClass().isArray();
        //     console.warn('abc: ' + abc);
        //     console.warn('value: ' + value);
        //     console.warn('value1: ' + mArray.get(value, 0));
        //     var sid = Java.cast(mArray.get(value, 0), mSignature);
        //     console.warn('value2: ' + sid.toByteArray());
        //     var sids = mBase64.encodeToString(sid.toByteArray(), 0);
        //
        //     console.warn('sids: ' + sids);
        //     return this.a(a);
        // };


        var aa = Java.use("com.pgl.sys.ces.a");
        var ces_c = Java.use("com.pgl.sys.ces.c");
        var mString = Java.use("java.lang.String");
        var a_d = Java.use("com.sijla.i.a.d");

        // aa.njss.overload('int', 'java.lang.Object').implementation = function (a, b) {
        //     console.warn("Hook njss ...");
        //     console.warn("a: ", a);
        //     console.warn("b: ", b);
        //     // console.warn("res: ", this.njss(137, b).toString());
        //     return this.njss(a, b);
        // };
        // a_d.a.overload('java.lang.String').implementation = function (a) {
        //     console.warn("Hook E ...");
        //     console.warn("a: ", a);
        //     console.warn("res: ", this.a(a));
        //     return this.a(a);
        // };
        // ces_c.a.overload('java.lang.String').implementation = function (a) {
        //     console.warn("Hook ces_c2 ...");
        //     console.warn("a: ", a);
        //     // var aaa= Java.cast(this.njss(a.b),mString);
        //     console.warn("res2: ", this.a(a));
        //     return this.a(a);
        // };
        // ces_c.a.overload().implementation = function () {
        //     console.warn("Hook ces_c1 ...");
        //     // var aaa= Java.cast(this.njss(a.b),mString);
        //     console.warn("res1: ", this.a());
        //     return this.a();
        // };
    });
}


