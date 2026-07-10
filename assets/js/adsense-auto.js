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

    const h2List = content.querySelectorAll("h2");

    console.log("H2 개수 :", h2List.length);

    let inserted = 0;

    h2List.forEach((h2, index) => {

        // 짝수 H2만
        if ((index + 1) % 2 !== 0)
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

    console.log("광고 삽입 :", inserted);

});
