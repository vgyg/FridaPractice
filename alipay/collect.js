if (Java.available) {
    Java.perform(function () {
        var H5RpcUtil = Java.use("com.alipay.mobile.nebulaappproxy.api.rpc.H5RpcUtil");
        var H5Page = Java.use("com.alipay.mobile.h5container.api.H5Page");
        var JSONObject = Java.use("com.alibaba.fastjson.JSONObject");
        H5RpcUtil.rpcCall.overload('java.lang.String', 'java.lang.String',
            'java.lang.String', 'boolean', 'com.alibaba.fastjson.JSONObject',
            'java.lang.String', 'boolean', 'com.alipay.mobile.h5container.api.H5Page',
            'int', 'java.lang.String', 'boolean', 'int', 'java.lang.String').implementation = function (a,b,c,d,e,f,g,h,j,i,k,l,p) {
console.log("a"+a);
            // console.log("param :" + args[0] + "," + args[1] + "," + args[2] + "," + args[3] + "," + args[4] + "," +
            //     args[5] + "," + args[6] + "," + args[7] + "," +
            //     args[8] + "," + args[9] + "," + args[10] + "," +
            //     args[11]);
            // console.log("result :" + this.rpcCall(args));

            return this.rpcCall(a,b,c,d,e,f,g,h,j,i,k,l,p);
        }
    });

}