# Hengrui Wang — Research & Beyond

A custom English-language personal homepage with a black, red, and white American poster style:
light typography and dark framing, with red chapter tabs and small graphic accents.
A fixed, full-color photograph remains visible behind lightly shaded translucent sections.
The hero leaves the sky and sun unshaded, with a gentle dark gradient below the skyline.
The background is displayed at 118% brightness and 134% saturation with gentle edge sharpening;
the source image is unchanged. These display effects apply only to the background.
Portraits and gallery photographs remain fully opaque.
The site uses plain HTML, CSS, and JavaScript. No installation or build step is needed.

## Local preview

In this repository, run:

~~~sh
python3 -m http.server 8765 --bind 127.0.0.1
~~~

Then open [http://127.0.0.1:8765](http://127.0.0.1:8765).
Refresh the browser after editing. Press Control-C in the terminal to stop the server.
The page can also be opened directly from index.html without a server.

## Editing

- index.html: biography, experience, publications, education, teaching, and Sanda.
- assets/css/home.css: layout, colors, typography, and responsive styles.
- assets/js/home.js: reading progress.
- assets/images/editorial/: supplied photographs copied in their original colors.

The photographs map to the desktop source folder as follows:

| Site asset | Original filename |
| --- | --- |
| background.jpeg | 背景.jpeg |
| graduation-portrait.jpeg | 毕业1.jpeg |
| graduation-2026.png | 毕业2.png |
| boxing-training.jpeg | 格斗1.jpeg |
| sanda-training.jpeg | 格斗2.jpeg |
| sanda-team.jpg | 格斗3.jpg |
| sparring.jpg | 格斗4.jpg |

The original teaching records, Sanda biography, publications, education, advisor
information, and contact details are preserved. The revised work experience is
organized into LLM/AI and quantitative trading. ByteDance is explicitly described
with the concise label Informal Intern and its distributed KV cache topic.
Earlier research experience appears in the Experience section.
The previous template's styles and scripts are no longer loaded. Legacy assets
remain in version history and in the checkout for reference.

## GitHub Pages

The production address is [hengrui1230.github.io](https://hengrui1230.github.io/).
The repository root is ready to serve as a static GitHub Pages site; .nojekyll
bypasses template processing. The Google verification file is preserved.

Preview and approve the redesign before committing or pushing it to GitHub.
The homepage has no CV/PDF link.
Google Scholar appears only in the contact section at the end of the page.
