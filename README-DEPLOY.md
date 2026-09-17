# GitHub Pages deploy — quick steps

1. Create a new GitHub repo (e.g. `dhombawala-temple`).
2. Copy your image assets into the repo ROOT (same folder as index.html):
   Gemini_Generated_Image_elify4elify4elif.jpg, floting_text.png, Kapumahatha.png,
   yout.png, facebook.webp, whatsapp.webp, insta.webp, hero-mobile.png
3. Push everything (including index.html, index.css, photo/, blogs/, contact/, .nojekyll) to the repo.
4. GitHub repo -> Settings -> Pages -> Source: "Deploy from branch" -> Branch: main / (root) -> Save.
5. Your site goes live at https://<username>.github.io/<repo-name>/
   Pages will load as /photo/, /blogs/, /contact/ — no .html in the URL.

Note: video.html wasn't uploaded, so no video/ folder was generated. If you
want the "වීඩියෝ" nav link to work, create a video/index.html the same way
(css as ../index.css, links as ../, ../photo/, etc.) and add it to the repo.
