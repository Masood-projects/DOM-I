const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
console.log('working')
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav menu

const navItem = document.querySelectorAll('a');
navItem.className = 'nav-item';
const navToArray = Array.from(navItem);

const theNav = navToArray.map((item, index) => {
  item.style.textDecoration = 'none';
  item.style.color = 'green';
  return item.textContent = siteContent.nav[`nav-item-${index+1}`];
});

// target - append child

const newLink = document.createElement("A");
const randomTextNode1 = document.createTextNode("Appended");
const setAppendChild = newLink.appendChild(randomTextNode1);
const appendToNav = document.querySelector("nav").appendChild(newLink);

// second point - prepend child

const newLink2 = document.createElement("A");
const randomTextNode2 = document.createTextNode("Prepended");
const setPrepend = newLink2.prepend(randomTextNode2);
const prependToNav = document.querySelector("nav").prepend(newLink2);

// target cta h1

const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

// cta button 

const ctaButton = document.getElementsByTagName('button');
ctaButton.className = 'cta-button';

const buttonToArray = Array.from(ctaButton);

const theCtaButton = buttonToArray.map( item => item.textContent = siteContent.cta.button );

// cta - img

const ctaImage = document.getElementById('cta-img');
const setCtaImage = ctaImage.setAttribute('src', siteContent.cta["img-src"]);

// main content features h4

const mainContentFeaturesH4 = document.querySelector('.top-content .text-content:first-child h4');
mainContentFeaturesH4.textContent = siteContent["main-content"]["features-h4"];

// change the color of the h4

mainContentFeaturesH4.style.color = 'black';

// main content features p

const mainContentFeaturesP = document.querySelector('.top-content .text-content:first-child p');
mainContentFeaturesP.textContent = siteContent["main-content"]["features-content"];

// color of p

mainContentFeaturesP.style.color = 'black';

// main content about h4

const mainContentAboutH4 = document.querySelector('.top-content .text-content:last-child h4');
mainContentAboutH4.textContent = siteContent["main-content"]["about-h4"];

// color of h4

mainContentAboutH4.style.color = 'black';

// main cont - p

const mainContentAboutP = document.querySelector('.top-content .text-content:last-child p');
mainContentAboutP.textContent = siteContent["main-content"]["about-content"];

// changing the color of p

mainContentAboutP.style.color = 'black';

// main content middle-image

const middleImage = document.getElementById('middle-img');
const setMiddleImage = middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// bottom content

const bottomContentServicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
bottomContentServicesH4.textContent = siteContent["main-content"]["services-h4"];

// color of h4

bottomContentServicesH4.style.color = 'black';

// bottom of content

const bottomContentProductP = document.querySelector('.bottom-content .text-content:nth-child(2) p');
bottomContentProductP.textContent = siteContent["main-content"]["product-content"];

// change of color p

bottomContentProductP.style.color = 'black';

// bottom of vision content for h4

const bottomContentVisionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
bottomContentVisionH4.textContent = siteContent["main-content"]["vision-h4"];


// color of h4 - content section 


bottomContentVisionH4.style.color = 'black';

// bottom content for vison p

const bottomContentVisionP = document.querySelector('.bottom-content .text-content:nth-child(3) p');
bottomContentVisionP.textContent = siteContent["main-content"]["vision-content"];


// change color of p

bottomContentVisionP.style.color = 'black';

// contact for h4

const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent.contact["contact-h4"];


// contact address

const contactAddress = document.querySelector('.contact p:nth-child(2)');
contactAddress.textContent = siteContent.contact.address;


// contact phone

const contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.textContent = siteContent.contact.phone;

// contact email

const contactEmail = document.querySelector('.contact p:nth-child(4)');
contactEmail.textContent = siteContent.contact.email;

// footer

const theFooter = document.querySelector('footer p');
theFooter.textContent = siteContent.footer.copyright;







