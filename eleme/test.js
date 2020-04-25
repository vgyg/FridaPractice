if (Java.available) {
    Java.perform(function () {
        // var QualificationViewHolder = Java.use("me.ele.shopping.ui.shop.info.ShopInfoViewHolder$QualificationViewHolder");//com.sina.weibo.applicationInit.b.a.c.a
        // QualificationViewHolder.a.implementation = function (a1) {
        //     console.warn("Hook a ...");
        //     return this.a(a1);
        // };
        var h = Java.use("me.ele.shopping.biz.model.co$h");//com.sina.weibo.applicationInit.b.a.c.a
        h.a.implementation = function () {
            console.warn("h_b :", this.a());
            return this.a();
        };
        var h = Java.use("me.ele.shopping.biz.model.co$h");//com.sina.weibo.applicationInit.b.a.c.a
        h.b.implementation = function () {
            console.warn("h_b :", this.b());
            return this.b();
        };
        var WVApiPlugin = Java.use("android.taobao.windvane.jsbridge.WVApiPlugin");//com.sina.weibo.applicationInit.b.a.c.a
        WVApiPlugin.executeSafe.implementation = function (a, b, c) {
            console.warn("executeSafe :", a);
            console.warn("executeSafe :", b);
            console.warn("executeSafe :", this.executeSafe(a, b, c));
            return this.executeSafe(a, b, c);
        };
        var TaoLog = Java.use("android.taobao.windvane.util.TaoLog");//com.sina.weibo.applicationInit.b.a.c.a
        TaoLog.i.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
            console.warn("TaoLog.i :", a);
            console.warn("TaoLog.i :", b);
            return this.i(a, b);
        };
        TaoLog.v.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
            console.warn("TaoLog.v :", a);
            console.warn("TaoLog.v :", b);
            return this.v(a, b);
        };
        TaoLog.e.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
            console.warn("TaoLog.e :", a);
            console.warn("TaoLog.e :", b);
            return this.e(a, b);
        };
        TaoLog.d.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
            console.warn("TaoLog.d :", a);
            console.warn("TaoLog.d :", b);
            return this.d(a, b);
        };
        // var ag = Java.use("com.uc.sdk_glue.ag");//com.sina.weibo.applicationInit.b.a.c.a
        // ag.b.implementation = function (a) {
        //     console.warn("ag.b :", a);
        //     console.warn("ag.b :", this.b(a));
        //     return this.b(a);
        // };
        // var ErisEntry = Java.use("me.ele.uis.eris.ErisEntry");//com.sina.weibo.applicationInit.b.a.c.a
        // ErisEntry.sneer.implementation = function (a,b,c,d) {
        //     console.warn("sneer a:",a);
        //     console.warn("sneer b:",b);
        //     console.warn("sneer c:",c);
        //     console.warn("sneer d:",d);
        //     console.warn("sneer res:",this.sneer(a,b,c,d));
        //     return this.sneer(a,b,c,d);
        // };
        var PasswordLoginView = Java.use("com.alipay.user.mobile.login.view.PasswordLoginView");//com.sina.weibo.applicationInit.b.a.c.a
        PasswordLoginView.trustLoginWithExtLoginParam.implementation = function () {
            console.warn("trustLoginWithExtLoginParam res:", this.trustLoginWithExtLoginParam());
            return this.trustLoginWithExtLoginParam();
        };
        var h = Java.use("me.ele.android.enet.h");//com.sina.weibo.applicationInit.b.a.c.a
        var h_a = Java.use("me.ele.android.enet.h$a");//com.sina.weibo.applicationInit.b.a.c.a
        h.$init.implementation = function (a) {
            // console.warn(" b:", b);
            var ha = Java.cast(a, h_a);
            console.warn(" b:", ha.b);
            console.warn(" c:", ha.c);
            console.warn(" d:", ha.d);
            console.warn(" f3128a:", ha.f3128a);
            console.warn(" g:", ha.g);
            console.warn(" h:", ha.h);
            console.warn(" i:", ha.i);
            console.warn(" j:", ha.j);
            return this.$init(a);
        };

    });
}


