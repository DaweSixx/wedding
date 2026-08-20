(() => { const add = () => { if (document.querySelector(".tom-demo-order")) return; const a = document.createElement("a"); a.className = "tom-demo-order"; a.href = "https://theone-moment.ru/#brief"; a.textContent = "Заказать"; a.setAttribute("aria-label", "Заказать приглашение Bloom"); document.body.append(a) }; document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", add, { once: true }) : add() })();


console.log('demo order');