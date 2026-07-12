document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // 본문 찾기 (게시글에서만 사용)
    // -----------------------------
    const content =
        document.querySelector("article .content") ||
        document.querySelector(".post-content") ||
        document.querySelector(".content");

    // -----------------------------
    // 홈 여부 확인
    // -----------------------------
    const isHome =
        window.location.pathname === "/" ||
        window.location.pathname === "";

    // -----------------------------
    // 상단 광고
    // 홈 : Header 아래
    // 게시글 : 제목(H1) 아래
    // -----------------------------
    if (isHome) {

        const header = document.querySelector("#topbar-wrapper");

        if (header) {

            const wrapper = document.createElement("div");
            wrapper.style.margin = "30px auto 50px";
            wrapper.style.maxWidth = "900px";

            const ins = document.createElement("ins");

            ins.className = "adsbygoogle";
            ins.style.display = "block";

            ins.setAttribute("data-ad-client", "ca-pub-4898816539687840");
            ins.setAttribute("data-ad-slot", "3853922004");
            ins.setAttribute("data-ad-format", "auto");
            ins.setAttribute("data-full-width-responsive", "true");

            wrapper.appendChild(ins);

            // Header 바로 아래 삽입
            header.insertAdjacentElement("afterend", wrapper);

            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
                console.log("홈 상단 광고 삽입");
            } catch (e) {
                console.log(e);
            }
        }

    } else {

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
            ins.setAttribute("data-ad-slot", "3853922004");
            ins.setAttribute("data-ad-format", "auto");
            ins.setAttribute("data-full-width-responsive", "true");

            wrapper.appendChild(ins);

            // 제목 아래 삽입
            title.insertAdjacentElement("afterend", wrapper);

            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
                console.log("게시글 상단 광고 삽입");
            } catch (e) {
                console.log(e);
            }
        }

    }

    // -----------------------------
    // 게시글이 아니면 여기서 종료
    // -----------------------------
    if (!content) {
        return;
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
        ins.setAttribute("data-ad-slot", "8397013692");
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

    console.log("본문 광고 :", inserted);

});
