document.addEventListener("DOMContentLoaded", function () {

    // ==================================================
    // 현재 페이지가 메인인지 확인
    // ==================================================
    const path = window.location.pathname.toLowerCase();

    const isHome =
        path === "/" ||
        path === "/index.html";

    // ==================================================
    // 게시글 본문 찾기
    // ==================================================
    const content =
        document.querySelector("article .content") ||
        document.querySelector(".post-content") ||
        document.querySelector(".content");

    // ==================================================
    // 광고 생성 함수
    // ==================================================
    function createAd(slot, format = "auto") {

        const wrapper = document.createElement("div");
        wrapper.style.margin = "30px 0 60px";

        const ins = document.createElement("ins");

        ins.className = "adsbygoogle";
        ins.style.display = "block";

        ins.setAttribute("data-ad-client", "ca-pub-4898816539687840");
        ins.setAttribute("data-ad-slot", slot);
        ins.setAttribute("data-ad-format", format);
        ins.setAttribute("data-full-width-responsive", "true");

        wrapper.appendChild(ins);

        return wrapper;
    }

    // ==================================================
    // 메인 페이지
    // #post-list 바로 위 광고
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
    // 게시글 및 기타 페이지
    // 제목(H1) 아래 광고
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
    // 게시글이 아니면 H2 광고 및 하단 광고 종료
    // ==================================================
    if (!content) {
        return;
    }

    // ==================================================
    // H2 아래 광고
    // 1, 3, 6, 9번째 H2에만 삽입
    // ==================================================
    const h2List = content.querySelectorAll("h2");

    console.log("H2 개수 :", h2List.length);

    const targetIndexes = [1, 3, 6, 9];

    let inserted = 0;

    h2List.forEach((h2, index) => {

        const order = index + 1;

        if (!targetIndexes.includes(order)) {
            return;
        }

        const ad = createAd("8397013692");

        ad.style.margin = "25px 0 45px";

        // H2 바로 아래 삽입
        h2.insertAdjacentElement("afterend", ad);

        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            inserted++;
        } catch (e) {
            console.log(e);
        }

    });

    console.log("본문 광고 :", inserted);

    // ==================================================
    // 본문 맨 아래 멀티플렉스 광고
    // ==================================================

    const multiplexAd = createAd("7163747094", "autorelaxed");

    multiplexAd.style.margin = "50px 0 30px";

    // 본문 마지막에 추가
    content.appendChild(multiplexAd);

    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
        console.log("멀티플렉스 광고 삽입");
    } catch (e) {
        console.log(e);
    }

});
