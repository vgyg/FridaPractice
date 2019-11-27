if(Java.available){
   Java.perform(function () {
       var InAppPurchaseStore = Java.use("com.fingersoft.game.InAppPurchaseStore");
       InAppPurchaseStore.getCoins.implementation=function (a) {
           console.log("Hook Start...");
            console.log('arg0: '+ a);
             send('arg0: '+ a);
           return this.getCoins(a);
       }
   });
}


if(Java.available){
   Java.perform(function () {
       var context = Java.use("android.content.Context");
        console.log('Context is done');
       context.getSharedPreferences.overload("java.lang.String","int").implementation=function () {
    console.log("Hook Start...");
        send('arg0: '+ a);
        send('arg1: '+ b);

        send('result: '+ this.getSharedPreferences.overload("java.lang.String","int")(a,b));
           return this.getSharedPreferencesoverload("java.lang.String","int")(a,b);
       }
   });
}