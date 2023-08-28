// Contact-Top
// CT-right
window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const CTR = data['CT-Right'];

            let displayCTR = CTR.map(function (item) {
                return `
                <div> <img src="${item.CTimg}" /> <a href="${item.CTlink}">${item.CTtext}</a> </div>
                <div class="vr"></div>
                `;
            });

            let ContactTop = displayCTR.join("");
            document.getElementById("CTRight").innerHTML = ContactTop;
        })
});

// CT-left

window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const CTL = data['CT-Left'];

            let displayCTR = CTL.map(function (item) {
                return `
                <div> <a style="line-height:35px; text-decoration:none;" href="${item.CLlink}"
                target="new"><img src="${item.CLimg}" /></a> </div>
                
                `;
            });

            let ContactTop = displayCTR.join("");
            document.getElementById("CTLeft").innerHTML = ContactTop;
        })
});

// navbar

window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const Navbar = data['Navbar'];

            let displayNavbar = Navbar.map(function (item) {
                return `
                 
                    <li><a href="${item.url}">${item.title}</a></li> 
                
                `;
            });

            let Nav = displayNavbar.join("");
            document.getElementById("navbar").innerHTML = Nav;
        })
});

// carousel

window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const Carousel_item = data['Carousel'];

            let displayCarousel = Carousel_item.map(function (item) {
                return `
                <div class="carousel-item active">
                <img src="${item.CarouselImg}" class="d-block w-100" alt="">
                </div>
                `;
            });

            let CarouselSlide = displayCarousel.join("");
            document.getElementById("carouselItem").innerHTML = CarouselSlide;
        })
});



// hexshape

window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const Hexshape = data['Hexshape'];

            let displayHexshape = Hexshape.map(function (item) {
                return `
                <div class="hexshape">
                    <p class="img-bn"><img src="${item.HexImg}"></p>
                    <h2>${item.HexHeading}</h2>
                    <p>${item.HexPara}</p>
                    <p class="bn-rdmr"><a href="">${item.HexBtn}</a></p>
                </div>
                `;
            });

            let Hex = displayHexshape.join("");
            document.getElementById("hex").innerHTML = Hex;
        })
});


// welcome-message


window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const WelcomeMsg = data['WelcomeMsg'];

            let displayWelcomeMsg = WelcomeMsg.map(function (item) {
                return `
                <h2 class="wm1">${item.WM}</h2>
                <div class="">
                <p style="padding-bottom: 15px;">${item.WMPara1}</p>
                <p>${item.WMPara2}</p>
                </div>
                `;
            });

            let Welcome = displayWelcomeMsg.join("");
            document.getElementById("welcome-message").innerHTML = Welcome;
        })
});

// our services


window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const OurServices = data['OurServices'];

            let displayOurServices = OurServices.map(function (item) {
                return `
                <div class="os-bx">
                    <div class="os-img">
                    <img src="${item.OSImg}" />
                    </div>
                    <div class="os-cnt">
                        <h3>${item.OSHeading}</h3>
                        <p>${item.OSPara}</p>
                        <p class="rd-mr"><a href="/resource/Services/CORPORATE_GOVERNANCE_SERVICES.aspx">Read More <img src="image/arrow.png" /></a></p>
                    </div>
                </div>
                `;
            });

            let OS = displayOurServices.join("");
            document.getElementById("our-services").innerHTML = OS;
        })
});


// useful-links


window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const UsefulLinks = data['UsefulLinks'];

            let displayUsefulLinks = UsefulLinks.map(function (item) {
                return `
                <li><a style="text-decoration:none;" href="${item.ULLink}"
                                target="_blank">${item.ULHeading}</a></li>
                `;
            });

            let UL = displayUsefulLinks.join("");
            document.getElementById("useful-links").innerHTML = UL;
        })
});


// links


window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const Links = data['Links'];

            let displayLinks = Links.map(function (item) {
                return `
                <li><a style="text-decoration:none;" href="${item.LLink}">${item.LHeading}</a></li>
                `;
            });

            let L = displayLinks.join("");
            document.getElementById("links").innerHTML = L;
        })
});

// contact-us


window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const ContactUs = data['ContactUs'];

            let displayContactUs = ContactUs.map(function (item) {
                return `
                <p><i class=""><img src="${item.CUImg}" /></i>${item.CUAdr1} <br>
                        ${item.CUAdr2}</p>
                `;
            });

            let CU = displayContactUs.join("");
            document.getElementById("contact-us").innerHTML = CU;
        })
});

// cr-items


window.addEventListener("DOMContentLoaded", function () {

    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const CRItems = data['CRItems'];

            let displayCRItems = CRItems.map(function (item) {
                return `
                <img src="${item.CRImg}" />
                `;
            });

            let CR = displayCRItems.join("");
            document.getElementById("CR").innerHTML = CR;
        })
});





