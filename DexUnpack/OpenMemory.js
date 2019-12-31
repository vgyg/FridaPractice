'use strict';
var liba =Module.findBaseAddress('libart.so');
Interceptor.attach(Module.findExportByName("libart.so", "_ZN3art7DexFile10OpenMemoryEPKhjRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEjPNS_6MemMapEPKNS_10OatDexFileEPS9_"), {
    onEnter: function (args) {
        var begin = args[1]
        console.log("magic : " + Memory.readUtf8String(begin))
        var address = parseInt(begin, 16) + 0x20
        console.log("address : " + address)
        var dex_size = Memory.readInt(ptr(address))
        console.log("dex_size :" + dex_size)
        // console.log(hexdump(liba, {
        //     offset: address,
        //     length: 16,
        //     header: false,
        //     ansi: false
        // }));
        // hexdump dex to /data/data/pkg/dir
        var packageName = "com.aigz.cloudgame"
        var file = new File("/data/data/com.aigz.cloudgame/" + dex_size + ".dex", "wb+")
        file.write(Memory.readByteArray(begin, dex_size))
        console.log("finish !!")
        file.flush()
        file.close()
    },
    onLeave: function (retval) {
        if (retval.toInt32() > 0) {
            /* do something */
        }
    }
});