@font-face {
  font-family: Paperlogy;
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: Paperlogy;
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2") format("woff2");
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: Paperlogy;
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2") format("woff2");
  font-weight: 600;
  font-display: swap;
}

:root {
  --bg: #fdfcfb;
  --soft: #f4f1fb;
  --paper: #fff;
  --text: #2c2938;
  --muted: #655f6e;
  --accent: #5e568b;
  --deep: #4d4676;
  --line: #dedbe7;
  --content: 1160px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--text);
  font-family: Paperlogy, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
  font-size: 16px;
  line-height: 1.8;
}

/* 상단 소개 */
.hero {
  position: relative;
  display: grid;
  min-height: 440px;
  overflow: hidden;
  place-items: center;
  border-bottom: 1px solid var(--line);
  background: linear-gradient(120deg, #f5f2fb, #fcfbfc);
  text-align: center;
}

.hero__inner {
  position: relative;
  z-index: 1;
  padding: 70px 24px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  padding: 0 38px;
  border: 1px solid currentColor;
  border-radius: 50%;
  color: var(--text);
  font-family: "Libre Bodoni", Georgia, serif;
  font-size: clamp(22px, 2.7vw, 34px);
  letter-spacing: -.07em;
  line-height: 1;
  text-decoration: none;
}

.hero__eyebrow,
.section-kicker {
  margin: 28px 0 0;
  color: var(--accent);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .04em;
}

.hero__intro {
  margin: 20px 0 0;
  color: #554f61;
  font-size: 15px;
  line-height: 1.9;
}

.hero-orbit {
  position: absolute;
  border: 1px solid rgba(103, 91, 170, .16);
  border-radius: 50%;
}

.hero-orbit--one {
  top: -245px;
  right: -45px;
  width: 560px;
  aspect-ratio: 1;
}

.hero-orbit--two {
  bottom: -230px;
  left: -42px;
  width: 400px;
  aspect-ratio: 1;
}

/* 상단 메뉴 */
.quick-nav {
  position: sticky;
  z-index: 10;
  top: 0;
  border-bottom: 1px solid var(--line);
  background: rgba(253, 252, 251, .96);
  backdrop-filter: blur(8px);
}

.quick-nav__inner {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  scrollbar-width: none;
}

.quick-nav button {
  position: relative;
  flex: 0 0 auto;
  border: 0;
  background: transparent;
  padding: 10px 16px;
  color: var(--muted);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}

.quick-nav button::after {
  position: absolute;
  right: 16px;
  bottom: 0;
  left: 16px;
  height: 1px;
  transform: scaleX(0);
  background: var(--deep);
  content: "";
  transition: transform .18s;
}

.quick-nav button:hover,
.quick-nav button:focus-visible { color: var(--deep); }

.quick-nav button:hover::after,
.quick-nav button:focus-visible::after { transform: scaleX(1); }

/* 기본 구성 안내 */
.basic-guide,
.section,
.notice {
  width: min(calc(100% - 48px), var(--content));
  margin: auto;
}

.basic-guide {
  display: grid;
  grid-template-columns: .78fr 1.55fr;
  gap: 82px;
  padding: 90px 0;
  border-bottom: 1px solid var(--line);
}

.basic-guide__intro .section-kicker { margin: 0; }

.basic-guide h1,
.portfolio h1,
.process h2,
.inquiry h2,
.notice h2 {
  margin: 14px 0 0;
  font-size: clamp(29px, 3vw, 41px);
  font-weight: 500;
  letter-spacing: -.085em;
  line-height: 1.25;
}

.basic-guide__intro > p:last-child,
.inquiry__intro > p:last-of-type,
.notice__heading > p:last-child {
  margin: 20px 0 0;
  color: var(--muted);
}

.basic-guide__items { border-top: 1px solid #cbc5da; }

.basic-guide__items article {
  display: grid;
  grid-template-columns: 43px 1fr;
  gap: 15px;
  padding: 19px 0 20px;
  border-bottom: 1px solid var(--line);
}

.basic-guide__items b,
.notice-list b {
  color: var(--accent);
  font-size: 12px;
  font-weight: 600;
}

.basic-guide__items h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.basic-guide__items p {
  margin: 0;
  color: #5f5968;
  font-size: 14px;
  line-height: 1.9;
}

/* 포트폴리오 */
.section {
  padding: 90px 0;
  border-bottom: 1px solid var(--line);
}

.portfolio__kicker {
  margin: 0;
  letter-spacing: .08em;
}

.portfolio h1 { margin-top: 10px; }

.portfolio-viewer {
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr);
  min-height: 650px;
  margin-top: 31px;
  border: 1px solid var(--line);
  background: var(--paper);
}

.project-rail {
  display: grid;
  grid-template-rows: 32px minmax(0, 1fr) 32px;
  border-right: 1px solid var(--line);
  background: #fcfbfe;
}

.rail-button {
  border: 0;
  background: transparent;
  color: var(--deep);
  font-size: 10px;
  cursor: pointer;
}

.rail-button:disabled,
.image-arrow:disabled {
  opacity: .2;
  cursor: default;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding: 12px 11px;
  scrollbar-width: thin;
}

.project-list button {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--line);
  background: #f1eff5;
  padding: 0;
  cursor: pointer;
}

.project-list button[aria-current="true"] {
  border: 2px solid var(--deep);
}

.project-list img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery-view {
  min-width: 0;
  width: 100%;
  padding: 25px;
}

.main-image-wrap {
  position: relative;
  display: grid;
  width: 100%;
  min-height: 0;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  place-items: center;
  background: var(--soft);
}

#main-image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

#main-image[hidden] { display: none; }

.image-arrow {
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 37px;
  height: 52px;
  transform: translateY(-50%);
  border: 0;
  background: transparent;
  color: var(--deep);
  font-family: Georgia, serif;
  font-size: 40px;
  line-height: 1;
  cursor: pointer;
}

.image-arrow--previous { left: -1px; }
.image-arrow--next { right: -1px; }

.gallery-thumbnail-list {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 13px 0 0;
  scrollbar-width: thin;
}

.gallery-thumbnail-list button {
  width: 76px;
  height: 55px;
  flex: 0 0 auto;
  overflow: hidden;
  border: 1px solid var(--line);
  background: #f1eff5;
  padding: 0;
  cursor: pointer;
}

.gallery-thumbnail-list button[aria-current="true"] {
  border: 2px solid var(--deep);
}

.gallery-thumbnail-list img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.work-count {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 11px;
  text-align: right;
}

/* 작업과정 */
.process {
  padding: 90px max(24px, calc((100% - var(--content)) / 2));
  background: var(--soft);
  text-align: center;
}

.process__heading .section-kicker {
  margin: 0;
  font-size: 11px;
}

.process h2 {
  margin-top: 0;
  font-size: clamp(29px, 3vw, 41px);
}

.process-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1040px;
  margin: 34px auto 0;
  padding: 0;
  list-style: none;
}

.process-list::before {
  position: absolute;
  top: 13px;
  right: 4%;
  left: 4%;
  height: 1px;
  background: #b8afd5;
  content: "";
}

.process-list li {
  position: relative;
  z-index: 1;
  text-align: center;
}

.process-list b {
  display: grid;
  width: 27px;
  height: 27px;
  margin: auto;
  place-items: center;
  border: 1px solid #8173bc;
  border-radius: 50%;
  background: #f8f6fc;
  color: var(--deep);
  font-size: 10px;
  font-weight: 600;
}

.process-list span {
  display: block;
  margin-top: 13px;
  font-size: 14px;
}

/* 문의양식 */
.inquiry {
  display: grid;
  grid-template-columns: .67fr 1.33fr;
  gap: 65px;
  padding: 90px max(24px, calc((100% - var(--content)) / 2));
  background: #e9e5f0;
}

.inquiry__intro {
  position: relative;
  padding-top: 14px;
}

.inquiry__intro .section-kicker,
.notice__heading .section-kicker {
  margin: 0;
  font-size: 11px;
}

.inquiry h2,
.notice h2 {
  margin-top: 0;
  font-size: clamp(29px, 3vw, 41px);
}

.inquiry-orbit {
  position: absolute;
  right: 25px;
  bottom: -65px;
  left: auto;
  width: 150px;
  height: 48px;
  transform: rotate(-24deg);
  border: 1px solid rgba(126, 113, 170, .4);
  border-radius: 50%;
}

.inquiry-orbit::before {
  position: absolute;
  top: -4px;
  left: 14px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #9a8fca;
  content: "";
}

.inquiry-form {
  border: 1px solid #d4cde1;
  background: rgba(255, 255, 255, .88);
  padding: 28px;
}

.form-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 15px;
  padding-bottom: 19px;
  border-bottom: 1px solid var(--line);
}

.form-heading h3 {
  margin: 0;
  margin-top: 3px;
  font-size: 20px;
  font-weight: 500;
}

.form-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.form-field {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 10px;
  padding: 17px 0;
  border-bottom: 1px solid #eeeaf3;
}

.form-field > b {
  padding-top: 3px;
  color: var(--deep);
  font-size: 11px;
  font-weight: 600;
}

.form-field span,
.form-field strong,
.form-field small {
  display: block;
}

.form-field strong {
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 600;
}

.form-field small {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
}

.form-field input,
.form-field textarea {
  display: block;
  width: 100%;
  border: 1px solid #ded9e8;
  border-radius: 2px;
  background: #faf9fc;
  padding: 8px 10px;
  color: var(--text);
  font: inherit;
  font-size: 12px;
  outline-color: var(--accent);
}

.form-field textarea {
  min-height: 78px;
  resize: vertical;
}

.inquiry-form > button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 46px;
  margin-top: 23px;
  border: 1px solid var(--deep);
  border-radius: 3px;
  background: var(--deep);
  padding: 10px 15px;
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.inquiry-form > button:hover { background: #504879; }
.inquiry-form > button span:last-child { font-size: 18px; line-height: 1; }

.copy-status {
  min-height: 24px;
  margin: 8px 0 0;
  color: var(--deep);
  font-size: 13px;
  line-height: 1.8;
  text-align: center;
  opacity: 0;
  transition: opacity .18s ease;
}

.copy-status.is-visible { opacity: 1; }
.copy-status.is-error { color: #9b4358; }

/* 주의사항과 푸터 */
.notice { padding: 90px 0; }

.notice__heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 31px;
}

.notice__heading > p:last-child {
  margin: 0;
  font-size: 14px;
  white-space: nowrap;
}

.notice-list { border-top: 1px solid #cbc5da; }

.notice-list article {
  display: grid;
  grid-template-columns: 55px 1fr;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
}

.notice-list p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0;
  padding: 42px 24px 34px;
  background: #5e568b;
  color: #f9f7fc;
  text-align: center;
}

footer .brand-mark {
  min-height: 50px;
  padding-inline: 24px;
  color: #f9f7fc;
  font-size: clamp(20px, 2.2vw, 27px);
}

footer p {
  margin: 12px 0 0;
  color: #d2cede;
  font-size: 11px;
}

.footer-top {
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, .65);
  background: transparent;
  padding: 3px 1px 2px;
  color: #fff;
  font: inherit;
  font-size: 10px;
  cursor: pointer;
}

.top-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 5;
  border: 1px solid var(--line);
  background: rgba(253, 252, 251, .96);
  padding: 9px 12px;
  color: var(--deep);
  font: inherit;
  font-size: 11px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: .18s;
  cursor: pointer;
}

.top-button.is-visible {
  opacity: 1;
  visibility: visible;
  transform: none;
}

@media (max-width: 700px) {
  .hero { min-height: 375px; }
  .hero__inner { padding: 48px 22px; }

  .brand-mark {
    min-height: 43px;
    padding: 0 28px 2px;
    font-size: 26px;
  }

  .hero__eyebrow {
    margin-top: 22px;
    font-size: 10px;
  }

  .hero__intro {
    margin-top: 20px;
    font-size: 13px;
  }

  .hero-orbit--one {
    top: -230px;
    right: -230px;
  }

  .hero-orbit--two {
    bottom: -230px;
    left: -220px;
  }

  .quick-nav__inner { justify-content: flex-start; }
  .quick-nav button { padding: 10px 13px; font-size: 11px; }
  .quick-nav button::after { right: 13px; left: 13px; }

  .basic-guide,
  .section,
  .notice {
    width: min(calc(100% - 30px), var(--content));
  }

  .basic-guide {
    display: block;
    padding: 58px 0;
  }

  .basic-guide__items { margin-top: 28px; }
  .basic-guide__items article { grid-template-columns: 34px 1fr; gap: 7px; }
  .basic-guide__items h2 { font-size: 15px; }
  .basic-guide__items p,
  .notice-list p { font-size: 13px; }

  .section { padding: 58px 0; }
  .portfolio h1 { font-size: 29px; }

  .portfolio-viewer {
    grid-template-columns: 78px minmax(0, 1fr);
    min-height: 410px;
    margin-top: 22px;
  }

  .project-rail { grid-template-rows: 25px minmax(0, 1fr) 25px; }
  .project-list { gap: 7px; padding: 8px; }
  .gallery-view { padding: 10px; }

  .image-arrow {
    width: 31px;
    height: 43px;
    font-size: 34px;
  }

  .gallery-thumbnail-list {
    gap: 6px;
    padding-top: 9px;
  }

  .gallery-thumbnail-list button {
    width: 58px;
    height: 43px;
  }

  .process { padding: 58px 22px; }

  .process-list {
    grid-template-columns: 1fr;
    gap: 0;
    margin: 27px auto 0;
  }

  .process-list::before {
    top: 10px;
    bottom: 10px;
    left: 10px;
    width: 1px;
    height: auto;
  }

  .process-list li {
    display: grid;
    grid-template-columns: 37px 1fr;
    align-items: center;
    text-align: left;
  }

  .process-list b { margin: 0; }
  .process-list span { margin: 0; font-size: 12px; }

  .inquiry {
    display: block;
    padding: 58px 15px;
  }

  .inquiry__intro { padding: 0 0 35px 9px; }
  .inquiry-orbit { top: 138px; }
  .inquiry-form { padding: 15px 16px 19px; }
  .form-heading { display: block; }
  .form-heading p { margin-top: 3px; }
  .form-field { grid-template-columns: 22px 1fr; }

  .notice { padding: 58px 0; }
  .notice__heading { display: block; padding-bottom: 20px; }

  .notice__heading > p:last-child {
    margin-top: 15px;
    font-size: 11px;
    white-space: normal;
  }

  footer {
    min-height: 190px;
    padding: 40px 20px;
  }

  footer .brand-mark {
    min-height: 37px;
    font-size: 20px;
  }

  .top-button {
    right: 12px;
    bottom: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }

  .top-button,
  .quick-nav button::after {
    transition: none;
  }
}
