document.addEventListener("DOMContentLoaded", function () {

    // Chirpy 본문 찾기
    const content =
        document.querySelector("article .content") ||
        document.querySelector(".post-content") ||
        document.querySelector(".content");

    if (!content) {
        console.log("본문을 찾을 수 없습니다.");
        return;
    }

    // -----------------------------
    // 제목(H1) 아래 광고
    // -----------------------------
    const title =
        document.querySelector("article h1") ||
        document.querySelector(".post-title") ||
        document.querySelector("h1");

    if (title) {

        const wrapper = document.createElement("div");
        wrapper.style.margin = "30px 0 60px";

        const ins = document.createElement("ins");

        ins.className = "adsbygoogle";
        ins.style.display = "block";

        ins.setAttribute("data-ad-client", "ca-pub-4898816539687840");
        ins.setAttribute("data-ad-slot", "3853922004"); // 상단 광고
        ins.setAttribute("data-ad-format", "auto");
        ins.setAttribute("data-full-width-responsive", "true");

        wrapper.appendChild(ins);

        title.insertAdjacentElement("afterend", wrapper);

        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log(e);
        }
    }

    // -----------------------------
    // 홀수 H2 위 광고
    // -----------------------------
    const h2List = content.querySelectorAll("h2");

    console.log("H2 개수 :", h2List.length);

    let inserted = 0;

    h2List.forEach((h2, index) => {

        // 홀수 H2만 (1,3,5...)
        if ((index + 1) % 2 === 0)
            return;

        const wrapper = document.createElement("div");
        wrapper.style.margin = "60px 0";

        const ins = document.createElement("ins");

        ins.className = "adsbygoogle";
        ins.style.display = "block";

        ins.setAttribute("data-ad-client", "ca-pub-4898816539687840");
        ins.setAttribute("data-ad-slot", "8397013692"); // 본문 광고
        ins.setAttribute("data-ad-format", "auto");
        ins.setAttribute("data-full-width-responsive", "true");

        wrapper.appendChild(ins);

        h2.parentNode.insertBefore(wrapper, h2);

        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            inserted++;
        } catch (e) {
            console.log(e);
        }

    });

    console.log("상단 광고 : 1개");
    console.log("본문 광고 :", inserted);

});
