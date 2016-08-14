var ip = "mc.hypixel.net";
var onlineip = "mc.hypixel.net"
var clicktocopy = "Click to copy";
var copied = "IP COPIED";
var error = "Error";
$.getJSON("https://mcapi.ca/query/"+onlineip+"/players",function(a){1==a.status?$(".players-online").html(a.players.online):$(".players-online").html(error).addClass("offline")}),$(document).ready(function(){$("#copy").mouseover(function(){$("#copy").html(clicktocopy)}),$("#copy").mouseleave(function(){$("#copy").html(ip)}),$("#copy").click(function(){$("#copy").html(copied)})});