(async ()=>{
const css = `
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

/* Parent containers must have height */
#main,
#main .inner {
    height: 100%;
}

/* Console layout */
#command-console {
    height: 100%;
    box-sizing: border-box;
}

/* Top bar fixed */
#cmd-bar {
    height: 31px;
    background-color: #fff;
}

/* Terminal body fills rest */
#cmd-body {
    background-color: rgb(12,12,12);
    color: rgb(242,242,242);
    font-family: Consolas, monospace;
    font-size: 16px;
    line-height: 1;
    white-space: pre-wrap;
    text-align: left;
}
`;
const stajl = document.createElement("style");
stajl.innerHTML = css;
document.head.appendChild(stajl);
const html = `
<div id="main">
    <div class="inner">
        <div id="command-console">
            <div id="cmd-bar">
                <img class="cmd-img" src="/imgs/topleft_cmd_white.png" style="float:left;height:31px;">
                <img class="cmd-img" src="/imgs/topright_cmd_white.png" style="float:right;height:31px;">
                <div style="clear: both;"></div>
            </div>
            <div id="cmd-body" tabindex="0">
                <span id="cmdcontent">x</span>
            </div>
        </div>
    </div>
</div>
`;
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.innerHTML = html;
wrapper.style.position = "fixed";
wrapper.style.top = "0";
wrapper.style.left = "0";
await document.body.appendChild(wrapper);
document.querySelector("#cmd-body").style.width = window.innerWidth + "px";
document.querySelector("#cmd-body").style.height = (window.innerHeight - parseFloat(getComputedStyle(document.querySelector("#cmd-bar")).height)) + "px";
//document.querySelector("#cmdcontent").innerHTML = "hello";
const el = document.querySelector("#cmd-body");
el.innerHTML = "";
let text = "atdt +420mtmi.eu\nOK";
text = text.split("");
let int = 0;
const intr = setInterval(() => {
    if (int+2 > text.length) {
        clearInterval(intr);
        setTimeout(()=>{
            wrapper.style.transition = "opacity 0.5s ease";
            wrapper.style.opacity = "0";
            setTimeout(()=>{
                wrapper.remove();
            }, 501);
        }, 1);
    }
    el.innerHTML = el.innerHTML + text[int];
    int++;
}, 50);
})();