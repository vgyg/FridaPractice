if (Java.available) {
    Java.perform(function () {


        // var m0 = Java.use("h.a.a.m0");//com.sina.weibo.applicationInit.b.a.c.a
        // m0.a.overload('java.lang.String').implementation = function (a) {
        //     console.warn("------------ m0.a------------");
        //     console.warn(a, ",ret: ", this.a(a));
        //     return this.a(a);
        // };
        // var h = Java.use("h.a.x.h");//com.sina.weibo.applicationInit.b.a.c.a
        // h.a.implementation = function (a, b, c) {
        //     console.warn("------------h.a------------");
        //     console.warn(a, ",", b, ",", c);
        //     return this.a(a, b, c);
        // };
        // var Pair = Java.use("android.util.Pair");//com.sina.weibo.applicationInit.b.a.c.a
        // Pair.$init.implementation = function (a,b) {
        //     console.warn("------------Pair.$init------------");
        //     console.warn(a, ",", b);
        //     return this.$init(a,b);
        // };
        //2205057699d853d6fef4cf4b68b3f2ffcdfae9af5e
        //2205057689d89453942fa4df33d4b9ec0160352f0b
        // var JSONObject = Java.use("org.json.JSONObject");//com.sina.weibo.applicationInit.b.a.c.a
        // JSONObject.put.overload('java.lang.String', 'java.lang.Object').implementation = function (a, b) {
        //     console.warn("------------JSONObject.put------------");
        //     console.warn(a, ",", b);
        //     return this.put(a, b);
        // };
        var f = Java.use("com.kuaishou.android.security.f");//com.sina.weibo.applicationInit.b.a.c.a
        // f.a.overload('java.lang.String', 'boolean').implementation = function (a, b) {
        //     console.warn("------------f.a------------");
        //     console.warn(a, ",", b);
        //     console.warn("f.a_res:", this.a(a, b));
        //     return this.a(a, b);
        // };
        var KSecurity = Java.use("com.kuaishou.android.security.KSecurity");//com.sina.weibo.applicationInit.b.a.c.a
        // KSecurity.atlasSign.overload('java.lang.String').implementation = function (a) {
        //     console.warn("------------atlasSign------------");
        //     console.warn(a, ",", this.atlasSign(a));
        //     return this.atlasSign(a);
        // };
        KSecurity.isInitialize.implementation = function () {
            console.warn("------------isInitialize------------");
            console.warn(this.isInitialize());
            return true;
        };
// ----getWbKey---
// lD6We1E8i


        // i.j.overload().implementation = function () {
        //     console.warn("----i.j---");
        //     console.warn(this.j());
        //     return this.j();
        // };
        //contex:com.yxcorp.gifshow.App@4f3754e
        var security_i = Java.use("com.kuaishou.android.security.i");//com.sina.weibo.applicationInit.b.a.c.a
        // security_i.a.overload('android.content.Context').implementation = function (a) {
        //     console.warn("----security_i.a(Context)---");
        //     console.warn("a:", a);
        //     console.warn("a(Context)res:", this.a(a));
        //     return this.a(a);
        // };
        var mBase64 = Java.use("android.util.Base64");

        //a:MjIwNDYzMzg5OWQ4OWI2MGFkMmNlZGFkMGY3NzA5YWQ2MjEyMWY2ZGRk
        // var c_i = Java.use("com.kuaishou.android.security.kfree.c.i");//com.sina.weibo.applicationInit.b.a.c.a
        // c_i.c.overload('[B').implementation = function (a) {
        //     console.warn("----c_i.c---");
        //     var sids = mBase64.encodeToString(a, 0);
        //     console.warn("a:", sids);
        //     return this.c(a);
        // };


        // security_i.a.overload('java.lang.String').implementation = function (a) {
        //     console.warn("----security_i.a(String)---");
        //     console.warn("a:", a);
        //     // var f20565c = security_i.getDeclaredField("f20565c");
        //     // f20565c.setAccessible(true);
        //     console.warn("f20565c:", this.f20565c);
        //     console.warn("a(String)res:", this.a(a));
        //     return this.a(a);
        // };
        // security_i.$init.implementation = function (a) {
        //     console.warn("----security_i.$init---");
        //     console.warn("a:", a);
        //     console.warn(this.$init(a));
        //     return this.$init(a);
        // };
        // var b_a = Java.use("com.kuaishou.android.security.kfree.b.a");//com.sina.weibo.applicationInit.b.a.c.a
        // b_a.$init.overload('java.lang.String').implementation = function (a) {
        //     console.warn("----b.a$init---");
        //     console.warn("a:", a);
        //     console.warn("b.a$initres:", this.$init(a));
        //     return this.$init(a);
        // };
        // security_i.b.overload().implementation = function () {
        //     console.warn("----security_i.b---");
        //     console.warn(this.b());
        //     return this.b();
        // };
        // var KSecurityContext = Java.use("com.kuaishou.android.security.adapter.common.KSecurityContext");//com.sina.weibo.applicationInit.b.a.c.a
        // KSecurityContext.getWbKey.implementation = function () {
        //     console.warn("----getWbKey---");
        //     console.warn(this.getWbKey());
        //     return this.getWbKey();
        // };
        var Charset = Java.use("java.nio.charset.Charset");//com.sina.weibo.applicationInit.b.a.c.a
        var CPU = Java.use("com.yxcorp.gifshow.util.CPU");//com.sina.weibo.applicationInit.b.a.c.a
        var aa = Java.use("m0.a.b.a.b.a");//com.sina.weibo.applicationInit.b.a.c.a
        var clazz = Java.use("java.lang.Class");
        var mString = Java.use("java.lang.String");
        CPU.a.implementation = function (a, b, c) {
            console.warn("----CPU.a---");
            // var aIns = aa.$new.overload("java.nio.charset.Charset").call(aa,"");
             var sids = mBase64.encodeToString(b, 0);
            console.warn("b:", sids, "c:", c, "res:", this.a(a, b, c));


            var Charset_a = Java.cast(aa.class, clazz).getDeclaredField("a");
            Charset_a.setAccessible(true);
            // var  mchar = Charset_a.$new();
            // var forName = Java.cast(Charset.class, clazz).getDeclaredMethod("forName");
            // var forName = Charset.getDeclaredMethod("forName");
            // forName.setAccessible(true);
            // var  ch = forName.invoke(null,"UTF-8");
            // Charset.forName(null, "UTF-8");

            // var  aaa = Charset_a.get(aIns);

            var str = mString.$new.overload("[B","java.nio.charset.Charset").call(mString,b,Charset_a.get(Charset));

            console.warn("str:", str);
            return this.a(a, b, c);
        };


    });
}


