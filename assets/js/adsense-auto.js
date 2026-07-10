document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".post-content, .content");
  if (!content) return;

  const headings = content.querySelectorAll("h2");
  if (!headings.length) return;

  const adHtml = `
    <div class="adsense-inarticle" style="margin: 64px 0 48px 0;">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4898816539687840" crossorigin="anonymous"></script>
      <!-- github_trip -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-4898816539687840"
           data-ad-slot="8397013692"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  `;

  headings.forEach((h2, index) => {
    if ((index + 1) % 2 === 0) {
      h2.insertAdjacentHTML("beforebegin", adHtml);
    }
  });
});
