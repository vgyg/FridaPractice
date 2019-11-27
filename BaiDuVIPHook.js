// Java.perform(function () {
//   // Function to hook is defined here
//   var a = Java.use('com.baidu.netdisk.account.io._.a');
//   a._.implementation=function(){
//             return 2;
//         }
// });
//
// if(Java.available){
//     Java.perform(function(){
//         var MainActivity = Java.use("com.luoyesiqiu.crackme.MainActivity");
//         MainActivity.isExcellent.overload("int","int").implementation=function(chinese,math){
//             return this.isExcellent(95,96);
//         }
//     });
//
// }

if(Java.available){
   Java.perform(function () {
       var a = Java.use("com.baidu.netdisk.account.io._.a");
       a._.implementation=function () {
           print('[*] Running CTF');
            console.log('[*] Running CTF ');
           return 2;
       }
   });
}