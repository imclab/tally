var toggleState=!1;window.addEventListener("load",function(){var e=document.getElementById("highlightTemplate");e.addEventListener("click",function(){var t=document.querySelectorAll('[data-tally-repeat], [data-tally-text], [data-tally-attr], [data-tally-if^="not:"], [data-tally-repeat], [data-tally-if="false"]');for(var n=0;n<t.length;n++){var r=t[n];toggleState?r.classList.remove("show"):r.classList.add("show")}document.getElementById("highlightTemplate").classList.remove("show");toggleState=!toggleState;e.innerHTML=(toggleState?"Hide":"Show")+" highlights"})});