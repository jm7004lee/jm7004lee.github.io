document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // 현재 페이지가 메인인지 확인
    // -----------------------------
    const path = window.location.pathname.toLowerCase();

    const isHome =
        path === "/" ||
        path === "/index.html";

    // -----------------------------
    // 본문 찾기 (게시글에서 H2 광고용)
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
        wrapper.style.margin = "30px 0 60px";

        const ins = document.createElement("ins");
        ins.className = "adsbygoogle";
        ins.style.display = "block";

        ins.setAttribute("data-ad-client", "ca-pub-4898816539687840");
        ins.setAttribute("data-ad-slot", slot);
        ins.setAttribute("data-ad-format", "auto");
        ins.setAttribute("data-full-width-responsive", "true");

        wrapper.appendChild(ins);

        return wrapper;
    }

    // ==================================================
    // 메인 페이지 : #post-list 바로 위 광고
    // ==================================================
    if (isHome) {

        console.log("메인 페이지");

        const postList = document.getElementById("post-list");

        if (postList) {

            const ad = createAd("3853922004");

            ad.style.maxWidth = "900px";
            ad.style.margin = "20px auto 40px";

            postList.parentNode.insertBefore(ad, postList);

            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
                console.log("메인 광고 삽입 완료");
            } catch (e) {
                console.log(e);
            }

        } else {

            console.log("#post-list를 찾지 못했습니다.");

        }

    }

    // ==================================================
    // 게시글/기타 : 제목(H1) 아래 광고
    // ==================================================
    else {

        const title =
            document.querySelector("article h1") ||
            document.querySelector(".post-title") ||
            document.querySelector("h1");

        if (title) {

            const ad = createAd("3853922004");

            title.insertAdjacentElement("afterend", ad);

            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
                console.log("제목 아래 광고 삽입");
            } catch (e) {
                console.log(e);
            }

        }

    }

    // ==================================================
    // 게시글이 아니면 H2 광고는 종료
    // ==================================================
    if (!content) {
        return;
    }

    // ==================================================
    // 홀수 H2(1,3,5...) 위 광고
    // ==================================================
    const h2List = content.querySelectorAll("h2");

    console.log("H2 개수 :", h2List.length);

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
