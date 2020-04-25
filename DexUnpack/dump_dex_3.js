//frida -U -f com.min.app.sample -l ./src/script/hook.js --no-pause

// var packageName = 'com.min.app.sample';
var packageName = 'com.ldzs.zhangxin';


var DEX_MAGIC = 0x0A786564;
var placeHolderArray;
var dexrec = [];

// Interceptor.attach(Module.findExportByName('libart.so', '_ZN3art7DexFile10OpenMemoryEPKhjRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEjPNS_6MemMapEPKNS_10OatDexFileEPS9_'), {
Interceptor.attach(Module.findExportByName('libart.so', '_ZN3art7DexFile10OpenMemoryEPKhjRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEjPNS_6MemMapEPKNS_7OatFileEPS9_'), {
  onEnter: function(args) {
    if (Memory.readU32(args[1]) === DEX_MAGIC) {
      dexrec.push(args[1]);
    }
  },
  onLeave: function(retval) {}
});

Java.performNow(function() {
  var Application = Java.use("android.app.Application");
  Application.onCreate.implementation = function() {
    this.onCreate();
    console.log('find application : ' + this);
    if (this.toString().indexOf(packageName) < 0) { //防止加壳后的app，两次调用到onCreate
      return;
    }
    var classloader = this.getClassLoader(); // 获取classloader
    Java.classFactory.loader = classloader; //替换classloader
    loadAllClass();
    dumpDex();
  }
});

function loadAllClass() {
  placeHolderArray = Java.array("java.lang.Object", []);

  var classLoaderObj = Java.classFactory.loader;
  var pathListObj = getPathListObj(classLoaderObj);
  var JavaArray = Java.use("java.lang.reflect.Array");
  var dexElementsObj = getDexElementsObj(pathListObj);

  for (var i = 0; i < JavaArray.getLength(dexElementsObj); i++) {
    var dexElement = JavaArray.get(dexElementsObj, i);
    var dexFileObj = getDexFileObj(dexElement);
    console.log('handle dexFile : ' + dexFileObj);

    var enumerations = getMethod("dalvik.system.DexFile", "entries").invoke(dexFileObj, placeHolderArray);
    var hasMoreElementsMethod = getMethod("java.util.Enumeration", "hasMoreElements");
    while (true) {
      var flag = hasMoreElementsMethod.invoke(enumerations, placeHolderArray);
      if (flag.toString() === 'false') {
        break;
      }
      var nextElementMethod = getMethod("java.util.Enumeration", "nextElement");
      var clazzName = nextElementMethod.invoke(enumerations, placeHolderArray).toString();
      if (startWith(clazzName, "android.") || startWith(clazzName, "androidx.") || startWith(clazzName, "dalvik.")) {
        continue;
      }
      try {
        console.log("load " + Java.classFactory.loader.loadClass(clazzName));
      } catch (e) {
        console.log(e);
      }
    }
  }
}

function dumpDex() {
  for (var i = 0; i < dexrec.length; i++) {
    if (Memory.readU32(dexrec[i]) === DEX_MAGIC) {
      var beginPtr = dexrec[i];
      var dexLengthPtr = beginPtr.add(0x20);
      var dexLength = Memory.readInt(dexLengthPtr);
      console.log("\nfind dex ,beginAddress = " + beginPtr + " , dexLength = " + dexLength);
      dump(beginPtr, 64);

      console.log("start dump dex ....");
      var filePath = "/data/data/" + packageName + "/" + dexLength + ".dex";
      var file = new File(filePath, "wb");
      file.write(Memory.readByteArray(beginPtr, dexLength));
      file.flush();
      file.close();
      console.log("end dump dex ...." + filePath+"\n");
    }
  }
}

function getMethod(className, methodName) {
  var method = Java.use(className).class.getDeclaredMethod(methodName, placeHolderArray);
  return method;
}

function getPathListObj(obj) {
  var field = Java.use("dalvik.system.BaseDexClassLoader").class.getDeclaredField("pathList");
  field.setAccessible(true);
  return field.get(obj);
}

function getDexElementsObj(obj) {
  var field = Java.use("dalvik.system.DexPathList").class.getDeclaredField("dexElements");
  field.setAccessible(true);
  return field.get(obj);
}

function getDexFileObj(obj) {
  var field = Java.use("dalvik.system.DexPathList$Element").class.getDeclaredField("dexFile");
  field.setAccessible(true);
  return field.get(obj);
}

function startWith(str, prefix) {
  return str.slice(0, prefix.length) === prefix;
}

function dump(pointer, len) {
  var str = hexdump(pointer, {
    offset: 0,
    length: len,
    header: true,
    ansi: true
  });
  console.log(str)
}
