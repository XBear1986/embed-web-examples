// temporary placement
!function(){"use strict";var e=window.__vidy__,t=e.origin;e.emit=function(e,i){window.parent.postMessage({task:e,value:i},t)},e.remove=function(t){e.emit("link:remove",t.phrase||t.getAttribute("data-embed")),e.after(t,t.firstChild),t.remove()},e.removable=function(t){t.className+=" removable",t.querySelector("i").hidden=!0;var i=document.createElement("span");i.className="vbtn",i.onclick=function(i){i.stopPropagation(),e.remove(t)},t.appendChild(i)},console.log("[SITE] 👋 Hello, Dashboard~!"),e.emit("init",{appid:e.appid,postid:e.postid}),[].forEach.call(document.getElementsByClassName("vlink"),e.removable),addEventListener("mouseup",function(){setTimeout(function(){e.emit("copy",window.getSelection().toString().trim())},100)}),window.addEventListener("message",function(i){if(i.origin===t){var n=i.data,a=n.task,o=n.value,r=window.getSelection(),s=r.anchorNode,l=r.baseOffset,c=r.toString().trim();if("highlight"===a){var d=e.nodes(e.base),m=new RegExp(c,"gi"),u=c+"/"+((s.data.substring(0,l).match(m)||[]).length+((d=d.slice(0,d.indexOf(s)).reduce(function(e,t){return e+t.data},"")).match(m)||[]).length);o.text=c;var p=e.draw(s,o,l);p.className+=" unsaved",p.phrase=u,e.removable(p),e.emit("link:new",{phrase:u,clipid:o.clip.id})}else"refresh"===a&&alert("[TODO][SDK]: Refresh links -- change colors (or fetch API)")}})}();
