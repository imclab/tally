// Generated by CoffeeScript 1.4.0
(function(){var e,t;e=require("superagent");t=require("./lib/timer.coffee");exports.profile=function(n,r){t.reset();return e.get("https://alpha-api.app.net/stream/0/posts/stream/global").end(function(e){t.elapsedTime("Data transfer from App.net");if(e.body){e.body.numberOfPosts=function(){return this.data.length};t.reset();r.render("posts.html",e.body);return t.elapsedTime("Template render")}return r.render("posts.html",{error:"Bad response from Twitter"})})}}).call(this);