// Sahifa yuklangandan so'ng ishlaydigan funksiya
window.onload = function() {
    // Sahifa tanasi styli
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';

    // Navigatsiya paneli
    let nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-between';
    nav.style.alignItems = 'center';
    nav.style.padding = '10px 20px';
    nav.style.backgroundColor = '#fff';
    nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(nav);

    let logo = document.createElement('div');
    logo.textContent = 'Ecobazar';
    logo.style.fontSize = '24px';
    logo.style.fontWeight = 'bold';
    logo.style.color = '#4caf50';
    nav.appendChild(logo);

    let searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search';
    searchBar.style.flex = '1';
    searchBar.style.margin = '20px';
    searchBar.style.padding = '10px';
    searchBar.style.borderRadius = '5px';
    searchBar.style.border = '1px solid #ccc';
    searchBar.style.width = '200px';
    nav.appendChild(searchBar);

    let button = document.createElement('button');
    button.textContent = 'Sign Up';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#4caf50';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.marginLeft = '20px';
    nav.appendChild(button);


   

 // Asosiy kontent
    let mainContent = document.createElement('div');
    mainContent.style.padding = '20px';
    document.body.appendChild(mainContent);

    let banner = document.createElement('div');
    banner.style.display = 'flex';
    banner.style.justifyContent = 'space-between';
    banner.style.alignItems = 'center';
    banner.style.marginBottom = '20px';
    
    mainContent.appendChild(banner);

    let bannerLeft = document.createElement('div');
    bannerLeft.style.flex = '1';
    bannerLeft.style.backgroundColor = '#4caf50';
    bannerLeft.style.color = '#fff';
    bannerLeft.style.padding = '20px';
    bannerLeft.style.borderRadius = '10px';
    banner.appendChild(bannerLeft);

    let bannerTitle = document.createElement('h1');
    bannerTitle.textContent = 'Fresh & Healthy Organic Food';
    bannerTitle.style.margin = ' 10px ';
    bannerLeft.appendChild(bannerTitle);

    let bannerText = document.createElement('p');
    bannerText.textContent = 'Sale up to 30% OFF. Free shipping on your order.';
    bannerLeft.appendChild(bannerText);

    let bannerButton = document.createElement('button');
    bannerButton.textContent = 'Shop now';
    bannerButton.style.padding = '10px 20px';
    bannerButton.style.backgroundColor = '#fff';
    bannerButton.style.color = '#4caf50';
    bannerButton.style.border = 'none';
    bannerButton.style.borderRadius = '5px';
    bannerLeft.appendChild(bannerButton);

    let bannerRight = document.createElement('div');
    bannerRight.style.flex = '1';
    bannerRight.style.display = 'flex';
    bannerRight.style.flexDirection = 'column';
    banner.appendChild(bannerRight);

    let bannerRightTop = document.createElement('div');
    bannerRightTop.style.display = 'flex';
    bannerRightTop.style.justifyContent = 'center';
    bannerRightTop.style.alignItems = 'center';
    bannerRightTop.style.borderRadius = '10px';
    bannerRightTop.style.padding = '200px';
    bannerRight.appendChild(bannerRightTop);

    let dom = document.querySelector("body");
    let dom2 = document.createElement("section");
    dom2.classList.add("second-sixth");
    dom2.style.display = "flex";
    dom2.style.justifyContent = "space-between";
    dom2.style.flexWrap = "wrap";
    dom2.style.gap = "20px";
    
    
    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            data.products.map(item => {
                    dom2.innerHTML += `
                    <div class="card">
                        <img src="${item.thumbnail}" alt="">
                        <h3>${item.title}</h3>
                    </div>
                `
              
            })
        })
    
    
    
        dom.appendChild(dom2)
    


}



















// // Sahifa yuklangandan so'ng ishlaydigan funksiya
// window.onload = function() {
//     // Qism uchun div yaratish
//     var partDiv = document.createElement('div');
//     partDiv.style.position = 'absolute';
//     partDiv.style.top = '200px'; // Top joylashuvini o'zgartirishingiz mumkin
//     partDiv.style.left = '20px'; // Left joylashuvini o'zgartirishingiz mumkin
//     partDiv.style.padding = '10px 20px';
//     partDiv.style.backgroundColor = 'orange';
//     partDiv.style.color = 'white';
//     partDiv.style.fontSize = '20px';
//     partDiv.style.fontFamily = 'Arial, sans-serif';
//     partDiv.style.borderRadius = '5px';

//     // Matn qo'shish
//     var textNode = document.createTextNode('Baxtiyorova Sevinch');
//     partDiv.appendChild(textNode);

//     // Sahifaga qo'shish
//     document.body.appendChild(partDiv);
// }





