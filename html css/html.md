<link> 태그의 rel 속성은 현재 문서와 외부 리소스 사이의 연관 관계를 명시합니다.

<link rel=”stylesheet”>

stylesheet 

스타일 시트(stylesheet)로 사용할 외부 리소스를 불러옴.

a태그 밑에 href있음 

다른 웹사이트로 링크를 하는 기능입니다

div class/ p class 차이

float 잡을거면 div class????

div/section 차이

`<article>`
과 `<section>` =논리적구분
은 모두 `<div>` =
와 같은 block 속성을 갖고 있는 tag이다.

몰라??,,,, section>>div

• src : 이미지의 경로

``` <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>의 이력서</title>
  <link rel="stylesheet" href="codelion.css">
</head>
<body>
  <div class="mainbox">
    <div class="title-box">
      <h1>조민솔</h1>
      <p class="name-text">HTML/CSS 개발자</p>
    </div>
    <section>
      <h2>ABOUT ME</h2>
      <p class="about-me-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
    <section>
        <h2>EXPERIENCE</h2>
        <div class="float-wrap">
          <p class="title-text">Awesome Programming Company</p>
          <p class="year-text">2020 - Now</p>
        </div>
        <p class="desc-text">Front-End Web Developer</p>
        <p class="desc-subtext">HTML/CSS, JS, React, ...</p>
        <div class="float-wrap">
          <p class="title-text">Ministry of Health</p>
          <p class="year-text">2015 - 2018</p>
        </div>
        <p class="desc-text">UI/UX Designer</p>
        <p class="desc-subtext">Web design</p>
        <div class="float-wrap">
            <p class="title-text">Freelance Work</p>
            <p class="year-text">2011 - 2015</p>
        </div>
        <p class="desc-text">Graphic Designer</p>
        <p class="desc-subtext">Graphic Design, Editorial Design</p>
      </section>

      <section>
        <h2>ACTIVITIES</h2>
        <div class="float-wrap">
          <p class="title-text">Front-End Web Developer Forum Volunteer</p>
          <p class="year-text">2019 - 2020</p>
        </div>
        <p class="desc-text">Application Page Development</p>
        <p class="desc-subtext">Lorem ipsum dolor sit amet.</p>
        <div class="float-wrap">
          <p class="title-text">LIKELION SEOUL</p>
          <p class="year-text">2017 - 2018</p>
        </div>
        <p class="desc-text">Teacher in Mutsa University</p>
        <p class="desc-subtext">Lorem ipsum dolor sit amet.</p>
        <div class="float-wrap">
          <p class="title-text">Open Source Committer</p>
          <p class="year-text">2011 - 2013</p>
        </div>
        <p class="desc-text">Angular JS</p>
        <p class="desc-subtext">Lorem ipsum dolor sit amet.</p>
    </section>

    <section>
        <h2>EDUCATION</h2>
        <div class="float-wrap">
            <p class="title-text">Mutsa University</p>
            <p class="year-text">2008 - 2012</p>
        </div>
        <p class="desc-text">Computer Science and Engineering</p>
        <div class="float-wrap">
            <p class="title-text">Mutsa High school</p>
            <p class="year-text">2006 - 2008</p>
        </div>
        <p class="desc-text">Visual Communication Design</p>
        <div class="float-wrap">
            <p class="title-text">Online Programming Academy</p>
            <p class="year-text">2006 - 2007</p>
        </div>
        <p class="desc-text">Python Course</p>
    </section>

    <section>
      <h2>AWARDS</h2>
      <div class="float-wrap">
        <p class="title-text">LIKELION SEOUL</p>
        <p class="year-text">2018</p>
      </div>
      <p class="desc-text">Best Developer Award</p>
    </section>

    <div class="sns-wrap">
      <a href="http://facebook.com"><img class="sns-img" src="images/facebook.png"></a>
      <img class="sns-img" src="images/twitter.png">
      <img class="sns-img" src="images/linked-in.png">
      <img class="sns-img" src="images/insta.png">
    </div>
  </div>
  <footer>
      <p>Copyright CODE LION All rights reserved. </p>
  </footer>
</body>
</html>```
