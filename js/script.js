var ip = "mc.hypixel.net";
var onlineip = "mc.hypixel.net"
var clicktocopy = "Click to copy";
var copied = "IP COPIED";
var error = "Error";

$.getJSON('https://mcapi.ca/query/' + onlineip + '/players',function(status){if(status.status==true) {$('.players-online').html(status.players.online);} else {$('.players-online').html(error).addClass('offline');}}); $(document).ready(function(){$("#copy").mouseover(function(){$("#copy").html(clicktocopy);});$("#copy").mouseleave(function(){$("#copy").html(ip);});$("#copy").click(function(){$("#copy").html(copied);});});
