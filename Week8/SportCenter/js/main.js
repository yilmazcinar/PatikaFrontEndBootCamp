// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70; // navbar height offset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Classes tab functionality
const classesData = {
  yoga: {
    title: "Why are your Yoga?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus tempore expedita with dolorem hic voluptatem cupiditate eligendi officia molestiae, cumque ullam minus aspernatur pariatur repudiandae consectetur exercitationem. Ab, doloribus.",
    schedule: [
      "Saturday-Sunday: 8:00am - 10:00am",
      "Monday-Tuesday: 10:00am - 12:00pm",
      "Wednesday-Friday: 3:00pm - 6:00pm",
    ],
    image: "./images/yoga.jpg",
  },
  group: {
    title: "Why are your Group?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Group training sessions provide motivation and support from fellow fitness enthusiasts. Working out together creates accountability and makes exercise more enjoyable and sustainable.",
    schedule: [
      "Monday-Wednesday: 6:00pm - 8:00pm",
      "Thursday-Friday: 7:00am - 9:00am",
      "Saturday: 10:00am - 12:00pm",
    ],
    image: "./images/group.webp",
  },
  solo: {
    title: "Why are your Solo?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Personal training allows for customized workout plans tailored to your specific goals and fitness level. Get undivided attention from professional trainers.",
    schedule: [
      "Monday-Friday: 9:00am - 5:00pm",
      "Saturday: 8:00am - 2:00pm",
      "Sunday: 10:00am - 4:00pm",
    ],
    image: "./images/solo.jpg",
  },
  stretching: {
    title: "Why are your Stretching?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Stretching improves flexibility, reduces muscle tension, and helps prevent injuries. It's essential for maintaining healthy muscles and joints.",
    schedule: [
      "Every day: 7:00am - 8:00am",
      "Monday-Friday: 12:00pm - 1:00pm",
      "Saturday-Sunday: 5:00pm - 6:00pm",
    ],
    image: "./images/stret.webp",
  },
};

// Tab switching functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const classInfo = document.querySelector(".class-info");
  const classImage = document.querySelector(".class-image img");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Get the class type
      const classType = this.textContent.toLowerCase();
      const data = classesData[classType];

      if (data) {
        // Update content
        classInfo.innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                    <h3>When comes ${this.textContent} Your Time.</h3>
                    <div class="schedule">
                        ${data.schedule
                          .map((time) => `<p>${time}</p>`)
                          .join("")}
                    </div>
                `;

        // Update image
        classImage.src = data.image;
        classImage.alt = `${this.textContent} Class`;
      }
    });
  });
});

// BMI Calculator
document.addEventListener("DOMContentLoaded", function () {
  const bmiForm = document.querySelector(".bmi-form");
  const heightInput = bmiForm.querySelector(
    'input[placeholder="Your Height (cm)"]'
  );
  const weightInput = bmiForm.querySelector(
    'input[placeholder="Your Weight (kg)"]'
  );

  bmiForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (height && weight && height > 0 && weight > 0) {
      // Convert height from cm to meters
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);

      // Show result
      showBMIResult(bmi);

      // Update BMI indicator
      updateBMIIndicator(bmi);
    } else {
      alert("Lütfen geçerli boy ve kilo değerleri girin!");
    }
  });

  function showBMIResult(bmi) {
    let category = "";
    let color = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "#3498db";
    } else if (bmi < 25) {
      category = "Normal";
      color = "#2ecc71";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "#f39c12";
    } else {
      category = "Obese";
      color = "#e74c3c";
    }

    // Remove existing result if any
    const existingResult = document.querySelector(".bmi-result");
    if (existingResult) {
      existingResult.remove();
    }

    // Create result element
    const resultDiv = document.createElement("div");
    resultDiv.className = "bmi-result";
    resultDiv.innerHTML = `
            <div style="background-color: ${color}; color: white; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center;">
                <h4>Your BMI: ${bmi.toFixed(1)}</h4>
                <p>Category: ${category}</p>
            </div>
        `;

    bmiForm.appendChild(resultDiv);
  }
  function updateBMIIndicator(bmi) {
    // Remove existing indicator if any
    const existingIndicator = document.querySelector(".bmi-indicator");
    if (existingIndicator) {
      existingIndicator.remove();
    }

    // Remove any existing border from BMI chart image
    const bmiChart = document.querySelector(".bmi-chart");
    const bmiImage = bmiChart.querySelector("img");
    bmiImage.style.border = "none";
    bmiImage.style.boxShadow = "none";

    // Create BMI indicator arrow below the image
    const indicator = document.createElement("div");
    indicator.className = "bmi-indicator"; // Calculate position based on BMI value (adjusted for actual BMI chart sections)
    let position = 0;
    let category = "";
    let color = "";

    if (bmi < 18.5) {
      // Underweight: first section (0-18.5) -> position around 15%
      position = 15;
      category = "Underweight";
      color = "#3498db";
    } else if (bmi >= 18.5 && bmi < 25) {
      // Normal: second section (18.5-25) -> position around 40%
      position = 40;
      category = "Normal";
      color = "#2ecc71";
    } else if (bmi >= 25 && bmi < 30) {
      // Overweight: third section (25-30) -> position around 60%
      position = 60;
      category = "Overweight";
      color = "#f39c12";
    } else if (bmi >= 30 && bmi < 35) {
      // Obese Class I: fourth section (30-35) -> position around 80%
      position = 80;
      category = "Obese Class I";
      color = "#e67e22";
    } else {
      // Obese Class II+: fifth section (35+) -> position around 95%
      position = 95;
      category = "Obese Class II+";
      color = "#e74c3c";
    }

    indicator.innerHTML = `
            <div style="position: absolute; bottom: -60px; left: ${position}%; transform: translateX(-50%); z-index: 10;">
                <div style="width: 0; height: 0; border-left: 15px solid transparent; border-right: 15px solid transparent; border-bottom: 25px solid ${color}; margin-bottom: 5px;"></div>
                <div style="background-color: ${color}; color: white; padding: 10px 15px; border-radius: 8px; text-align: center; font-size: 14px; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.3); white-space: nowrap;">
                    BMI: ${bmi.toFixed(1)} - ${category}
                </div>
            </div>
        `;

    bmiChart.appendChild(indicator);
  }
});

// Trainer hover effects - Simple version
document.addEventListener("DOMContentLoaded", function () {
  const trainerCards = document.querySelectorAll(".trainer-card");

  trainerCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Simple hover effect - just the CSS animations
    });

    card.addEventListener("mouseleave", function () {
      // Simple hover effect - just the CSS animations
    });
  });
});

// Mobile menu toggle (for responsive design)
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");
  const joinBtn = document.querySelector(".btn-join");
  const navLinks = document.querySelectorAll(".nav-menu a");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });

  // JOIN US button click effect
  if (joinBtn) {
    joinBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Add click animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // You can add join functionality here
      alert("Welcome! Join us functionality would be implemented here.");
    });
  }
});

/*
===========================================
FONKSİYON AÇIKLAMALARI / FUNCTION DESCRIPTIONS
===========================================

1. NAVBAR SCROLL EFFECT
   - Fonksiyon: window.addEventListener("scroll", ...)
   - Açıklama: Sayfa scroll edildiğinde navbar'ın görünümünü değiştirir
   - Çalışma Mantığı: 
     * Scroll pozisyonu 50px'i geçtiğinde navbar'a "scrolled" class'ı ekler
     * Bu class ile navbar transparan'dan opak renge geçer
     * Scroll 50px'in altına indiğinde class'ı kaldırır

2. SMOOTH SCROLLING
   - Fonksiyon: document.querySelectorAll('a[href^="#"]').forEach(...)
   - Açıklama: Navigation linklerine tıklandığında yumuşak scroll efekti sağlar
   - Çalışma Mantığı:
     * Href'i "#" ile başlayan tüm linkleri yakalar
     * preventDefault() ile varsayılan davranışı engeller
     * Target element'in pozisyonunu bulur
     * 70px offset ile (navbar yüksekliği) smooth scroll yapar

3. CLASSES DATA OBJECT
   - Obje: classesData
   - Açıklama: Classes tab'larda gösterilecek içerikleri saklar
   - İçerik: 4 farklı class türü (yoga, group, solo, stretching)
   - Her class için: title, description, schedule array'i, image path

4. CLASSES TAB SWITCHING
   - Fonksiyon: Tab button event listeners
   - Açıklama: Classes bölümündeki tab'lar arası geçişi sağlar
   - Çalışma Mantığı:
     * Tüm tab button'larına click event listener ekler
     * Tıklanan button'a "active" class'ı verir, diğerlerinden alır
     * Button text'ine göre classesData'dan ilgili veriyi çeker
     * DOM'daki content ve image'ı dinamik olarak günceller

5. BMI CALCULATOR - FORM SUBMISSION
   - Fonksiyon: bmiForm.addEventListener("submit", ...)
   - Açıklama: BMI hesaplama formunu işler
   - Çalışma Mantığı:
     * Form submit edildiğinde preventDefault() ile sayfa yenilenmesini engeller
     * Height ve weight inputlarından değerleri alır
     * Geçerlilik kontrolü yapar (pozitif sayılar)
     * Height'ı cm'den metreye çevirir
     * BMI = weight / (height_in_meters)² formülünü kullanır
     * showBMIResult() ve updateBMIIndicator() fonksiyonlarını çağırır

6. SHOW BMI RESULT
   - Fonksiyon: showBMIResult(bmi)
   - Açıklama: BMI sonucunu kategorisi ile birlikte gösterir
   - Çalışma Mantığı:
     * BMI değerine göre kategori belirler:
       - <18.5: Underweight (mavi)
       - 18.5-25: Normal (yeşil)
       - 25-30: Overweight (turuncu)
       - >30: Obese (kırmızı)
     * Eski sonucu kaldırır (varsa)
     * Yeni result div'i oluşturur ve form'a ekler
     * Renk kodlu styling ile görsel feedback verir

7. UPDATE BMI INDICATOR
   - Fonksiyon: updateBMIIndicator(bmi)
   - Açıklama: BMI chart'ında ok göstergesi konumlandırır
   - Çalışma Mantığı:
     * BMI değerine göre chart üzerindeki pozisyonu hesaplar
     * 5 farklı bölge için farklı yüzdelik pozisyonlar:
       - Underweight: %15
       - Normal: %40
       - Overweight: %60
       - Obese I: %80
       - Obese II+: %95
     * Arrow (üçgen) ve bilgi kutusu oluşturur
     * CSS triangle trick ile ok şekli yapar
     * Chart'ın altına absolute positioning ile yerleştirir

8. TRAINER CARD HOVER EFFECTS
   - Fonksiyon: Trainer card event listeners
   - Açıklama: Trainer kartlarına hover efektleri ekler
   - Çalışma Mantığı:
     * Tüm trainer kartlarını seçer
     * mouseenter ve mouseleave event'leri dinler
     * CSS animasyonları ile çalışır (JS'de ekstra işlem yok)
     * Hover'da: overlay gösterir, border ekler, image transform

9. MOBILE MENU TOGGLE
   - Fonksiyon: mobileMenuBtn.addEventListener("click", ...)
   - Açıklama: Mobil cihazlarda hamburger menü kontrolü
   - Çalışma Mantığı:
     * Hamburger button'a click listener ekler
     * "active" class'ını toggle eder
     * CSS ile menü slide-in/out animasyonu
     * Menu dışına tıklamada menüyü kapatır
     * Navigation link'lere tıklamada menüyü kapatır

10. NAVIGATION LINK AUTO-CLOSE
    - Fonksiyon: navLinks.forEach(...) 
    - Açıklama: Mobil menüde link'e tıklamada menüyü otomatik kapatır
    - Çalışma Mantığı:
      * Tüm nav link'lere click listener ekler
      * Her link tıklamasında "active" class'ını kaldırır
      * UX geliştirmesi için (kullanıcı menüyü manuel kapatmak zorunda kalmaz)

11. OUTSIDE CLICK MENU CLOSE
    - Fonksiyon: document.addEventListener("click", ...)
    - Açıklama: Menü dışına tıklamada mobil menüyü kapatır
    - Çalışma Mantığı:
      * Document'e global click listener ekler
      * Click target'ın menu veya hamburger button olmadığını kontrol eder
      * Koşul sağlanırsa menüden "active" class'ını kaldırır
      * Contains() method'u ile DOM tree kontrolü yapar

12. JOIN US BUTTON CLICK EFFECT
    - Fonksiyon: joinBtn.addEventListener("click", ...)
    - Açıklama: JOIN US butonuna tıklama efekti ve aksiyonu
    - Çalışma Mantığı:
      * Click event'ini yakalar ve default action'ı engeller
      * Scale down animasyonu (0.95) uygular
      * 150ms sonra scale'i normale döndürür
      * Geçici alert ile join functionality placeholder'ı gösterir
      * Gerçek uygulamada bu kısım backend integration olacak

===========================================
GENEL YAPI VE BEST PRACTICES
===========================================

- DOMContentLoaded: Tüm DOM manipülasyonları DOMContentLoaded event'i içinde
- Event Delegation: Uygun yerlerde event delegation kullanımı
- Error Handling: Input validation ve null check'ler
- Performance: Efficient DOM queries ve minimal reflow/repaint
- Modularity: Her fonksiyon tek bir sorumluluğa sahip
- Cross-browser: Modern browser API'ları kullanımı
- User Experience: Smooth animations ve feedback'ler
- Responsive: Mobile-first yaklaşım ile responsive functionality

===========================================
KULLANILAN WEB API'LARI
===========================================

- addEventListener(): Event handling
- querySelector/querySelectorAll(): DOM selection
- classList.add/remove/toggle(): CSS class manipulation
- preventDefault(): Default behavior prevention
- innerHTML: Dynamic content update
- style property: Inline styling
- setTimeout(): Timing functions
- contains(): DOM tree checking
- createElement(): Dynamic element creation
- appendChild(): DOM insertion
- parseFloat(): String to number conversion
- textContent: Text content access
- getAttribute(): Attribute value reading

*/
