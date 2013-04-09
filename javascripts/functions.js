/*!
 *
 *  jQuery Cypher
 *    https://github.com/sheepysheep60/count-up
 *  
 *  David Williams
 *    djave.co.uk
 *
*/(function(e){e.fn.djave_cypher=function(t,n){function a(){number_finished=0;len=s.length;for(var e=0;e<len;e++)s[e][1]<-5&&(number_finished+=1);if(number_finished==len){r.console_log==1&&console.log("finished!");clearTimeout(timer);typeof n=="function"&&n.call(this)}else{f(s);timer=setTimeout(function(){a()},r.frequency)}}function f(e){output_string=[];for(var t=0;t<len;t++){e[t][1]--;e[t][1]>0?e[t][0]==" "?output_string.push(" "):output_string.push(Math.ceil(Math.random()*9)):output_string.push(e[t][0])}r.target.text(output_string.join(""))}var r=e.extend({cypher_text:this.text(),start:10,offset:5,frequency:60,uncypher:!0,target:this,console_log:!1},t),i,s=new Array;bits=r.cypher_text.split("");var o=bits.length;for(var u=0;u<o;u++){i=r.start+r.offset*u;s[u]=[bits[u],i]}a()}})(jQuery);
var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}