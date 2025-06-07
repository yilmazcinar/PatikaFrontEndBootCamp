// Menu verilerini içeren dizi
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.`,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles`,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion`,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// DOM elementlerini seçme
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// Menü öğelerini görüntüleme fonksiyonu
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="col-lg-6 col-sm-12 menu-items">
              <img src=${item.img} alt=${item.title} class="photo">
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Butonları oluşturma ve görüntüleme fonksiyonu
function displayMenuButtons() {
  // reduce kullanarak benzersiz kategorileri çıkarma
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  // map kullanarak butonları oluşturma
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="btn btn-outline-dark btn-item filter-btn" data-id=${category}>
                ${category}
              </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  // Buton event listener'ları ekleme
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // Aktif buton stilini güncelleme
      filterBtns.forEach(function (btn) {
        btn.classList.remove("btn-dark");
        btn.classList.add("btn-outline-dark");
      });
      e.currentTarget.classList.remove("btn-outline-dark");
      e.currentTarget.classList.add("btn-dark");

      // Seçilen kategori
      const category = e.currentTarget.dataset.id;
      
      // filter kullanarak menüyü filtreleme
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      // "All" seçilirse tüm menüyü göster
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });

  // İlk buton (All) aktif olarak başla
  if (filterBtns.length > 0) {
    filterBtns[0].classList.remove("btn-outline-dark");
    filterBtns[0].classList.add("btn-dark");
  }
}

// Toplam fiyatı hesaplama (reduce kullanımı örneği)
function calculateTotalPrice() {
  const totalPrice = menu.reduce(function (total, item) {
    return total + item.price;
  }, 0);
  
  console.log(`Tüm menü öğelerinin toplam fiyatı: $${totalPrice.toFixed(2)}`);
  return totalPrice;
}

// En pahalı ve en ucuz öğeleri bulma (reduce kullanımı)
function findPriceExtremes() {
  const priceExtremes = menu.reduce(
    function (acc, item) {
      if (item.price > acc.max.price) {
        acc.max = item;
      }
      if (item.price < acc.min.price) {
        acc.min = item;
      }
      return acc;
    },
    { max: menu[0], min: menu[0] }
  );

  console.log("En pahalı öğe:", priceExtremes.max);
  console.log("En ucuz öğe:", priceExtremes.min);
  return priceExtremes;
}
