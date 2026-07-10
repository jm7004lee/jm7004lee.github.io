// 상단(H1 아래) 광고
function createTopAdsense() {

    const wrapper = document.createElement("div");
    wrapper.style.margin = "30px 0 60px";

    const ins = document.createElement("ins");

    ins.className = "adsbygoogle";
    ins.style.display = "block";

    ins.setAttribute("data-ad-client", "ca-pub-4898816539687840");
    ins.setAttribute("data-ad-slot", "3853922004");   // 상단 광고 슬롯
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");

    wrapper.appendChild(ins);

    return wrapper;
}


// 본문(H2 위) 광고
function createContentAdsense() {

    const wrapper = document.createElement("div");
    wrapper.style.margin = "60px 0";

    const ins = document.createElement("ins");

    ins.className = "adsbygoogle";
    ins.style.display = "block";

    ins.setAttribute("data-ad-client", "ca-pub-4898816539687840");
    ins.setAttribute("data-ad-slot", "8397013692");   // 본문 광고 슬롯
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");

    wrapper.appendChild(ins);

    return wrapper;
}
