function loadScripts(scripts) {
    scripts.forEach(sc => {
        console.log("loading script "+sc)
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = sc/*[0]*/;
        //script.onload = sc[1] || "";
        document.head.appendChild(script);
    });
}


document.addEventListener("DOMContentLoaded", () => { 
    loadScripts(["/js/loadanim.js", "/js/vars.js"]);
});