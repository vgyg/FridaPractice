if (Java.available) {
    Java.perform(function () {
        var H5RpcUtil = Java.use("com.alipay.mobile.nebulaappproxy.api.rpc.H5RpcUtil");
        var H5Page = Java.use("com.alipay.mobile.h5container.api.H5Page");
        var JSONObject = Java.use("com.alibaba.fastjson.JSONObject");
        var H5Response = Java.use("com.alipay.mobile.nebulaappproxy.api.rpc.H5Response");
        //rpcCall(String str, String str2, String str3, boolean z, JSONObject jSONObject,
        // String str4, boolean z2, H5Page h5Page, int i, String str5, boolean z3, int i2, String str6)
        H5RpcUtil.rpcCall.overload('java.lang.String', 'java.lang.String',
            'java.lang.String', 'boolean', 'com.alibaba.fastjson.JSONObject',
            'java.lang.String', 'boolean', 'com.alipay.mobile.h5container.api.H5Page',
            'int', 'java.lang.String', 'boolean', 'int', 'java.lang.String').implementation = function (str, str2, str3, z, jSONObject,
                                                                                                        str4, z2, h5Page, i, str5, z3, i2, str6) {
            console.log("============");
            console.log("1: " + str);
            console.log("2: " + str2);
            console.log("3: " + str3);
            console.log("4: " + z);
            console.log("5: " + jSONObject.toString());
            console.log("6: " + str4);
            console.log("7: " + z2);
            console.log("9: " + i);
            console.log("10: " + str5);
            console.log("11: " + z3);
            console.log("12: " + i2);
            console.log("13: " + str6);
            var result = this.rpcCall(str, str2, str3, z, jSONObject, str4, z2, h5Page, i, str5, z3, i2, str6).toString();
            Java.cast(result,H5Response);
            console.log("result->a: " +result.a );
            // if(a.toString()==="alipay.antmember.forest.h5.queryNextAction"){
            //     console.log("enter = ",a);
            // }

            return this.rpcCall(str, str2, str3, z, jSONObject, str4, z2, h5Page, i, str5, z3, i2, str6);
        }
    });

}