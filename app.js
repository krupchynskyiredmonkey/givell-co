"use strict";

window.onload = function () {
  document.body.classList.add('loaded');
}

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

$(document).ready(function (){
  if(window.innerWidth > 1024) {
    const getX = document.querySelector('.selectorForJs');
    const h3 = document.querySelector('.third-page-h3');
    let distanceX = getX.getBoundingClientRect();
    let paddingDistance = distanceX.left;
    console.log(window.innerWidth);
    h3.style.paddingLeft = `${paddingDistance}px`;
    console.log(h3.style.paddingLeft)
  } else {
    const h3 = document.querySelector('.third-page-h3');
    h3.style.paddingLeft = '0px';
  }
});

window.onresize = function() {
  if(window.innerWidth > 1024) {
  const getX = document.querySelector('.selectorForJs');
  const h3 = document.querySelector('.third-page-h3');
  let distanceX = getX.getBoundingClientRect();
  let paddingDistance = distanceX.left;
  console.log(window.innerWidth);
  h3.style.paddingLeft = `${paddingDistance}px`;
  console.log(h3.style.paddingLeft)
} else {
  const h3 = document.querySelector('.third-page-h3');
  h3.style.paddingLeft = '0px';
}
};

// const menuItemHome = document.querySelector('#home-screen');
// const menuItemWhy = document.querySelector('#why-screen');
// const menuItemWhat = document.querySelector('#what-screen');
// const menuItemHow = document.querySelector('#how-screen');


// const hoverEffect = function(item) {
  
// }


const trackers = document.querySelectorAll('[id^="tracker"]');
const hedaderNavAnchors = document.querySelectorAll(".header-anchor");
const headerFormAnchor = document.getElementById("header-form-anchor");
const sliderNav = document.querySelector(".slider-nav");

const sliderAnchors = document.querySelectorAll('[id^="anchor"]');

/** SMOOTH SCROLL */

class SmoothAnchorScroll {
  init() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    for (const anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    }
  }
}

const smoothAnchorScroll = new SmoothAnchorScroll();
smoothAnchorScroll.init();

/** App Scroller */

$(".first-trigger").on("inview", function (event, isInView) {
  if (isInView) {
    $(".slider-element:not(.first-slide)").fadeOut(0);
    $(".first-slide").fadeIn(300);
    sliderAnchors.forEach((el) => el.classList.remove("active"));
    sliderAnchors[0].classList.add("active");
    sliderNav.classList.add("show");
  } else {
    sliderNav.classList.remove("show");
  }
});

$(".second-trigger").on("inview", function (event, isInView) {
  if (isInView) {
    $(".slider-element").fadeOut(0);
    $(".second-slide").fadeIn(300);
    sliderAnchors.forEach((el) => el.classList.remove("active"));
    sliderAnchors[1].classList.add("active");
    sliderNav.classList.add("show");
  } else {
  }
});

$(".third-trigger").on("inview", function (event, isInView) {
  if (isInView) {
    $(".slider-element").fadeOut(0);
    $(".third-slide").fadeIn(300);
    sliderAnchors.forEach((el) => el.classList.remove("active"));
    sliderAnchors[2].classList.add("active");
    sliderNav.classList.add("show");
  } else {
  }
});
$(".fourth-trigger").on("inview", function (event, isInView) {
  if (isInView) {
    $(".slider-element:not(.fourth-slide)").fadeOut(0);
    $(".fourth-slide").fadeIn(300);
    sliderAnchors.forEach((el) => el.classList.remove("active"));
    sliderAnchors[3].classList.add("active");
    sliderNav.classList.add("show");
  } else {
  }
});

/** HEADER NAV - ACTIVE ANCHORS */

/* $(".main-section").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[0].classList.add("active");
  } else {
  }
}); */

$(".second-page-anchor").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[1].classList.add("active");
  } else {
  }
});

$(".slider-content-wrapper").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[2].classList.add("active");
    console.log('IF')
  } else {
    console.log('else')
  }
});

$(".main-third-page-content").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[3].classList.add("active");
  } else {
  }
});
$(".textarea").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.add("active");
  } else {
  }
});

/** FORM VALIDATION */
const popup = document.getElementById("pop-up-window");
const popupCloseButtons = document.querySelectorAll(".popup-close-button");
const overlay = document.getElementById("overAll");
const popupFail = document.getElementById("popup-fail");
const form = document.forms.form;
const firstName = form.firstname;
// const lastName = form.lastname;
// const textarea = form.message;
const email = form.email;
const emailPlaceholder = email.placeholder;
// const textareaPlaceholder = textarea.placeholder;
const firstNamePlaceholder = firstName.placeholder;
// const lastNamePlaceholder = lastName.placeholder;
const submitButton = document.getElementById("submitButton");

form.addEventListener("input", function (event) {
  if (firstName.value && email.value) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
    console.log("closed");
  }
});

firstName.addEventListener("focus", function (f) {
  firstName.placeholder = "";
  firstName.classList.remove("_error");
});

firstName.addEventListener("blur", function (f) {
  firstName.placeholder = firstNamePlaceholder;
});

// lastName.addEventListener("focus", function (f) {
//   lastName.placeholder = "";
//   lastName.classList.remove("_error");
// });

// lastName.addEventListener("blur", function (f) {
//   lastName.placeholder = lastNamePlaceholder;
// });

// textarea.addEventListener("focus", function (f) {
//   textarea.placeholder = "";
// });

// textarea.addEventListener("blur", function (f) {
//   textarea.placeholder = textareaPlaceholder;
// });

email.addEventListener("focus", function (f) {
  email.placeholder = "";
  email.classList.remove("_error");
});

email.addEventListener("blur", function (f) {
  email.placeholder = emailPlaceholder;
});

function emailTest(input) {
  const testEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return testEmail.test(input.value);
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  if (!firstName.value?.trim().match(/^[A-Za-z]+$/)) {
    firstName.classList.add("_error");
    alert("Please enter your name(without numbers)");
    console.log("please enter your name(without numbers)");
  } else if (!email.value.trim()) {
    email.classList.add("_error");
    alert("Enter email please");
  } else if (!emailTest(email)) {
    email.classList.add("_error");
    alert("Enter your real email please");
    console.log("email not valid");
  } else {
    overlay.classList.add("show");

    const th = $(this);
    $.ajax({
      type: "POST",
      url: "./uniMail-master/script/mail.php", //Change
      data: th.serialize(),
    })
      .done(function () {
        popup.classList.add("show");
        document.addEventListener("click", function (event) {
          if (event.target.id === "overAll") {
            popup.classList.remove("show");
            overlay.classList.remove("show");
            return;
          }
        });
        setTimeout(function () {
          th.trigger("reset");
        }, 1000);
      })
      .fail(function () {
        popupFail.classList.add("show");
        document.addEventListener("click", function (event) {
          if (event.target.id === "overAll") {
            popupFail.classList.remove("show");
            overlay.classList.remove("show");

            return;
          }
        });
      });
    return false;
  }

  /* {
    overlay.classList.add("show");
    let response = await fetch("mail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      form.reset();;
      popup.classList.add("show");
      document.addEventListener("click", function (event) {
        if (event.target.id === "overAll") {
          popup.classList.remove("show");
          overlay.classList.remove("show");
          return;
        }
      });
    } else {
      popupFail.classList.add("show");
      document.addEventListener("click", function (event) {
        if (event.target.id === "overAll") {
          popupFail.classList.remove("show");
          overlay.classList.remove("show");
          return;
        }
      });
      
    }
  } */
});

popupCloseButtons.forEach((el) => {
  el.addEventListener("click", function (event) {
    popupFail.classList.remove("show");
    popup.classList.remove("show");
    overlay.classList.remove("show");
  });
});


/** FORM TOP VALIDATION */

const formTop = document.querySelector('#formTop');
const firstNameTop = document.querySelector('#firstnameTop');
// const lastName = form.lastname;
// const textarea = form.message;
const emailTop = document.querySelector('#emailTop');
const emailPlaceholderTop = emailTop.placeholder;
// const textareaPlaceholder = textarea.placeholder;
const firstNamePlaceholderTop = firstNameTop.placeholder;
// const lastNamePlaceholder = lastName.placeholder;
const submitButtonTop = document.getElementById("submitButtonTop");

formTop.addEventListener("input", function (event) {
  if (firstNameTop.value && emailTop.value) {
    submitButtonTop.disabled = false;
  } else {
    submitButtonTop.disabled = true;
    console.log("closed");
  }
});

firstNameTop.addEventListener("focus", function (f) {
  firstNameTop.placeholder = "";
  firstNameTop.classList.remove("_error");
});

firstNameTop.addEventListener("blur", function (f) {
  firstNameTop.placeholder = firstNamePlaceholderTop;
});

// lastName.addEventListener("focus", function (f) {
//   lastName.placeholder = "";
//   lastName.classList.remove("_error");
// });

// lastName.addEventListener("blur", function (f) {
//   lastName.placeholder = lastNamePlaceholder;
// });

// textarea.addEventListener("focus", function (f) {
//   textarea.placeholder = "";
// });

// textarea.addEventListener("blur", function (f) {
//   textarea.placeholder = textareaPlaceholder;
// });

emailTop.addEventListener("focus", function (f) {
  emailTop.placeholder = "";
  emailTop.classList.remove("_error");
});

emailTop.addEventListener("blur", function (f) {
  emailTop.placeholder = emailPlaceholderTop;
});

// function emailTest(input) {
//   const testEmail =
//     /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   return testEmail.test(input.value);
// }

formTop.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formData = new FormData(formTop);
  if (!firstNameTop.value?.trim().match(/^[A-Za-z]+$/)) {
    firstNameTop.classList.add("_error");
    alert("Please enter your name(without numbers)");
    console.log("please enter your name(without numbers)");
  } else if (!emailTop.value.trim()) {
    emailTop.classList.add("_error");
    alert("Enter email please");
  } else if (!emailTest(emailTop)) {
    emailTop.classList.add("_error");
    alert("Enter your real email please");
    console.log("email not valid");
  } else {
    overlay.classList.add("show");

    const th = $(this);
    $.ajax({
      type: "POST",
      url: "./uniMail-master-top/script/mail.php", //Change
      data: th.serialize(),
    })
      .done(function () {
        popup.classList.add("show");
        document.addEventListener("click", function (event) {
          if (event.target.id === "overAll") {
            popup.classList.remove("show");
            overlay.classList.remove("show");
            return;
          }
        });
        setTimeout(function () {
          th.trigger("reset");
        }, 1000);
      })
      .fail(function () {
        popupFail.classList.add("show");
        document.addEventListener("click", function (event) {
          if (event.target.id === "overAll") {
            popupFail.classList.remove("show");
            overlay.classList.remove("show");

            return;
          }
        });
      });
    return false;
  }
}
  );


/*
 *SLIDER SVG ARROW RENDERING
 **/
const svgTracker = document.getElementById("tracker-svg");
const sliderTriggers = document.getElementById("triggers");
const arrowSize = sliderTriggers.offsetHeight / 5;
const minArrowSize = sliderTriggers.offsetHeight / 109;
svgTracker.attributes.height.value = arrowSize + 20;
svgTracker.attributes.viewBox.textContent = `0 0 20 ${arrowSize}`;

function svgRender(num) {
  if (num < minArrowSize) num = minArrowSize;
  if (num > arrowSize) num = arrowSize;
  // svgTracker.attributes.height.value = num + 20;
  // svgTracker.attributes.viewBox.textContent = `0 0 20 ${num}`;
  svgTracker.childNodes[1].attributes.height.value = num;
  svgTracker.childNodes[3].attributes.d.textContent = `M10 ${
    num + 10
  }L1.33974 ${num - 5}H18.6603L10 ${num + 10}Z`;
}

svgRender(minArrowSize);


/* show/hide header border + svg render for slider on scroll **/


window.addEventListener("scroll", function (event) {
  if (window.pageYOffset === 0) {
    document.getElementById("header").classList.remove("unstick");
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[0].classList.add("active");
  } else {
    document.getElementById("header").classList.add("unstick");
  }
  if (
    sliderTriggers.getBoundingClientRect().top < 0 &&
    Math.abs(sliderTriggers.getBoundingClientRect().top) <
      sliderTriggers.offsetHeight
  ) {
    svgRender(Math.abs(sliderTriggers.getBoundingClientRect().top) / 3.8);
  }
});


/* 
* Lottie files
**/
let lottie
let lottie2
let lottie3
let lottie4
let lottie5
let lottie6
let lottie7
let lottie1_mobile
let lottie3_mobile;
let lottie4_mobile;
let lottie5_mobile;
let lottie6_mobile;

if(window.innerWidth < 1025) {
   lottie1_mobile = bodymovin.loadAnimation({
    container: document.getElementById("lottie1-mobile"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/1-Hero.json",
  }); 

  lottie2 = bodymovin.loadAnimation({
    container: document.getElementById("lottie2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "lottie/2-Why_we_exist.json",
  });

  lottie3_mobile = bodymovin.loadAnimation({
    container: document.getElementById("lottie3-mobile"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/01.json",
  });


  lottie4_mobile = bodymovin.loadAnimation({
    container: document.getElementById("lottie4-mobile"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/04.json",
  }); 

  lottie5_mobile = bodymovin.loadAnimation({
    container: document.getElementById("lottie5-mobile"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/03.json",
  }); 

  lottie6_mobile = bodymovin.loadAnimation({
    container: document.getElementById("lottie6-mobile"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/02.json",
  }); 
} else {

  lottie = bodymovin.loadAnimation({
    container: document.getElementById("lottie1"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/1-Hero.json",
  });
  
  
  
  lottie2 = bodymovin.loadAnimation({
    container: document.getElementById("lottie2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "lottie/2-Why_we_exist.json",
  });
  
  
   lottie3 = bodymovin.loadAnimation({
    container: document.getElementById("lottie3"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/01.json",
  });
  
   lottie4 = bodymovin.loadAnimation({
    container: document.getElementById("lottie4"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/04.json",
  });
  
  lottie5 = bodymovin.loadAnimation({
    container: document.getElementById("lottie5"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/03.json",
  });
  
 lottie6 = bodymovin.loadAnimation({
    container: document.getElementById("lottie6"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/02.json",
  });
  
  lottie7 = bodymovin.loadAnimation({
    container: document.getElementById("form-section"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/7-Contact_Stars.json",
  });
  
  
}

/*
*Second lottie plays only 1 time when in view
**/
$(".lottie2").on("inview", function (event, isInView) {
  if (isInView) {
    setTimeout(() =>lottie2.play(), 500)
  } else {
    lottie2.goToAndStop(0, 0);
  }
});

// var rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);


