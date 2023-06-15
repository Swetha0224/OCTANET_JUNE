exports.swethas=function(){
var t=new Date()
    var o = {
        weekday:"long",
        day:"numeric",
        month:"long"

    }

  var date=t.toLocaleDateString("en-US",o)
 return date
}