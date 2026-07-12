document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // 현재 URL
    // -----------------------------
    const path = window.location.pathname.toLowerCase();

    const isHome =
        path === "/" ||
        path === "/index.html";

    // -----------------------------
    // 본문 찾기
    // -----------------------------
    const content =
        document.querySelector("article .content") ||
        document.querySelector(".post-content") ||
        document.querySelector(".content");

    // -----------------------------
    // 광고 생성 함수
    // -----------------------------
    function createAd(slot) {

        const wrapper = document.createElement("div");

        const ins = document.createElement("ins");

        wrapper.style.margin = "30px 0 60px";

        ins.className = "adsbygoogle";
        ins.style.display = "block";

        ins.setAttribute("data-ad-client", "ca-pub-4898816539687840");
        ins.setAttribute("data-ad-slot", slot);
        ins.setAttribute("data-ad-format", "auto");
        ins.setAttribute("data-full-width-responsive", "true");

        wrapper.appendChild(ins);

        return wrapper;
    }

    // -----------------------------
    // 홈이면 Header 아래 광고
    // -----------------------------
    if (isHome) {

        console.log("메인 페이지 감지");

        const header = document.getElementById("topbar-wrapper");

        if (header) {

            const ad = createAd("3853922004");

            ad.style.maxWidth = "900px";
            ad.style.margin = "30px auto 50px";

            header.insertAdjacentElement("afterend", ad);

            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.log(e);
            }

        } else {

            console.log("topbar-wrapper를 찾지 못했습니다.");

        }

    }

    // -----------------------------
    // 메인이 아니면 제목 아래 광고
    // -----------------------------
    else {

        const title =
            document.querySelector("article h1") ||
            document.querySelector(".post-title") ||
            document.querySelector("h1");

        if (title) {

            console.log("게시글/기타 페이지");

            const ad = createAd("3853922004");

            title.insertAdjacentElement("afterend", ad);

            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.log(e);
            }

        }

    }

    // -----------------------------
    // 게시글이 아니면 H2 광고는 종료
    // -----------------------------
    if (!content)
        return;

    // -----------------------------
    // H2 광고
    // -----------------------------
    const h2List = content.querySelectorAll("h2");

    let inserted = 0;

    h2List.forEach((h2, index) => {

        if ((index + 1) % 2 === 0)
            return;

        const ad = createAd("8397013692");

        ad.style.margin = "60px 0";

        h2.parentNode.insertBefore(ad, h2);

        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            inserted++;
        } catch (e) {
            console.log(e);
        }

    });

    console.log("본문 광고 :", inserted);

});
