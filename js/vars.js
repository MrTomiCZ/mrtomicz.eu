const navbar = document.createElement("div");
navbar.innerHTML = `
<div style="display: flex; justify-content: left; max-width: 64px; align-items: center;"><img src="/logo.png" style="display: inline-block; max-width: 64px;" />&nbsp;&nbsp;MrTomiCZ</div>

<div style="text-align: right;">
linktest
</div>
`;
navbar.id = "navb";
document.body.prepend(navbar);

const footer = document.createElement("div");
footer.innerHTML = `<div id="footer"><p>&copy; 2026 MrTomiCZ. All rights reserved.</p></div>`;
footer.style.display = "flex";
footer.style.margin = 0;
footer.style.flexDirection = "column";
footer.style.flex = 1;
document.body.appendChild(footer);
//document.getElementById("footer").innerHTML = "<p>&copy; 2026 MrTomiCZ. All rights reserved.</p>";