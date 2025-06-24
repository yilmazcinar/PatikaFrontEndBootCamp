# 🏋️‍♂️ SportCenter React - Modern Spor Merkezi Web Sitesi

Bu proje, React ve Vite kullanılarak geliştirilmiş modern ve responsive bir spor merkezi web sitesidir. Spor salonları için kapsamlı bir çözüm sunar.

## 🎯 Özellikler

- **Modern React Mimarisi**: Component-based yapı ile modüler tasarım
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **BMI Hesaplayıcı**: İnteraktif vücut kitle endeksi hesaplama
- **Antrenör Profilleri**: Profesyonel antrenör tanıtımları
- **Sınıf Programları**: Detaylı egzersiz sınıfı bilgileri
- **Üyelik Paketleri**: Farklı seçeneklerle üyelik planları
- **Müşteri Yorumları**: Gerçek kullanıcı deneyimleri
- **İletişim Formu**: Kolay ulaşım ve bilgi alma
- **Modern UI/UX**: Çekici animasyonlar ve kullanıcı dostu arayüz

## 🚀 Kurulum

1. **Projeyi klonlayın:**

   ```bash
   git clone [repo-url]
   cd SportCenter_React
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**

   ```bash
   npm run dev
   ```

4. **Tarayıcınızda açın:**
   ```
   http://localhost:5173
   ```

## 🏗️ Proje Yapısı

```
src/
├── App.jsx                 # Ana uygulama komponenti
├── App.css                 # Uygulama stilleri
├── index.css              # Global stiller
├── main.jsx               # React DOM render
├── components/
│   ├── Header/            # Navigasyon ve logo
│   ├── Hero/              # Ana banner bölümü
│   ├── Stats/             # İstatistik gösterimi
│   ├── Classes/           # Sınıf programları
│   ├── BMI/               # BMI hesaplayıcı
│   ├── Trainers/          # Antrenör profilleri
│   ├── Purchase/          # Üyelik paketleri
│   ├── Review/            # Müşteri yorumları
│   ├── Contact/           # İletişim formu
│   └── Footer/            # Alt bilgi
├── styles/
│   └── main.css           # Ana stil dosyası
public/
└── images/
    ├── bmi-index.jpg      # BMI görseli
    ├── hero-man.jpg       # Ana banner görseli
    ├── logo.png           # Logo
    ├── trainer1-3.jpg     # Antrenör fotoğrafları
    ├── client1-2.jpg      # Müşteri fotoğrafları
    ├── purchase1-4.jpg    # Paket görselleri
    └── ...diğer görseller
```

## 🎨 Ana Bileşenler

### Header Komponenti

- **Navigasyon menüsü**
- **Logo ve branding**
- **Responsive hamburger menü**

### Hero Komponenti

- **Çekici ana banner**
- **Call-to-action butonları**
- **Etkileyici görseller**

### BMI Komponenti

- **İnteraktif BMI hesaplayıcı**
- **Anında sonuç gösterimi**
- **Sağlık önerileri**

### Classes Komponenti

- **Sınıf programları listesi**
- **Zamanlama bilgileri**
- **Seviye ve kategori filtreleme**

### Trainers Komponenti

- **Profesyonel antrenör profilleri**
- **Uzmanlık alanları**
- **İletişim bilgileri**

### Purchase Komponenti

- **Üyelik paket seçenekleri**
- **Fiyatlandırma tablosu**
- **Özellik karşılaştırması**

## ⚙️ Teknik Özellikler

- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: Vanilla CSS (Custom styles)
- **State Management**: React Hooks
- **Code Quality**: ESLint konfigürasyonu
- **Performance**: Fast Refresh ile hızlı geliştirme

## 📱 Responsive Tasarım

Web sitesi tüm cihazlarda mükemmel çalışır:

- 📱 **Mobil Cihazlar** (320px+)
- 📲 **Tabletler** (768px+)
- 💻 **Masaüstü** (1024px+)
- 🖥️ **Geniş Ekranlar** (1440px+)

## 🛠️ Geliştirme Komutları

```bash
npm run dev      # Geliştirme sunucusu (port 5173)
npm run build    # Production build oluşturma
npm run preview  # Build önizleme
npm run lint     # ESLint kod kontrolü
```

## 🎯 Öne Çıkan Özellikler

### BMI Hesaplayıcı

- Kullanıcı boy ve kilo girişi
- Anında BMI hesaplama
- Sağlık durumu değerlendirmesi
- Görsel indeks gösterimi

### İnteraktif Sınıf Programları

- Haftalık program görüntüleme
- Sınıf detayları ve zorluk seviyeleri
- Antrenör bilgileri
- Rezervasyon sistemi (UI)

### Profesyonel Antrenör Profilleri

- Detaylı antrenör bilgileri
- Uzmanlık alanları
- Deneyim ve sertifikalar
- İletişim seçenekleri

### Esnek Üyelik Paketleri

- Farklı süre seçenekleri
- Özellik karşılaştırması
- Fiyat hesaplaması
- Online satın alma (UI)

## 🎨 Tasarım Prensipleri

- **Modern ve Temiz**: Minimal ve kullanıcı dostu arayüz
- **Erişilebilir**: WCAG standartlarına uygun
- **Performanslı**: Optimize edilmiş görseller ve kod
- **Tutarlı**: Consistent design language
- **Mobil-First**: Mobil öncelikli tasarım yaklaşımı

## 📝 Komponent ve Fonksiyon Açıklamaları

### 🎯 Ana Uygulama (App.jsx)

```jsx
// Ana uygulama komponenti - tüm sayfa bileşenlerini render eder
function App() {
  return (
    <div className="App">
      {/* Site başlığı ve navigasyon menüsü */}
      <Header />

      {/* Ana banner ve call-to-action bölümü */}
      <Hero />

      {/* İstatistik numaraları ve başarı metrikleri */}
      <Stats />

      {/* Sınıf programları ve aktivite seçenekleri */}
      <Classes />

      {/* BMI hesaplayıcı ve sağlık değerlendirmesi */}
      <BMI />

      {/* Antrenör profilleri ve uzman kadro */}
      <Trainers />

      {/* Üyelik paketleri ve fiyatlandırma */}
      <Purchase />

      {/* Müşteri yorumları ve deneyim paylaşımları */}
      <Review />

      {/* İletişim formu ve adres bilgileri */}
      <Contact />

      {/* Alt bilgi ve sosyal medya linkleri */}
      <Footer />
    </div>
  );
}
```

### 🧭 Header Komponenti Sistemi

#### Header.jsx - Ana Header Komponenti

```jsx
const Header = () => {
  // Sayfa kaydırma durumunu takip eden state
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobil menünün açık/kapalı durumunu kontrol eden state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sayfa kaydırma olayını dinleyen effect
  useEffect(() => {
    const handleScroll = () => {
      // 50px'den fazla kaydırıldığında header stilini değiştir
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Event listener ekle ve temizle
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll fonksiyonu - menü linklerine tıklandığında sayfa yumuşak geçiş yapar
  const handleSmoothScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      // Header yüksekliği kadar offset ekleyerek hedefe git
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Yumuşak geçiş animasyonu
      });
    }
    // Scroll sonrası mobil menüyü kapat
    setIsMobileMenuOpen(false);
  };

  // Mobil menü toggle fonksiyonu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
};
```

#### Alt Komponentler:

- **Logo.jsx**: Site logosu ve marka adını render eder
- **Navigation.jsx**: Masaüstü navigasyon menüsünü yönetir
- **MobileMenu.jsx**: Mobil cihazlar için hamburger menü sistemi

### 🏋️‍♂️ BMI Hesaplayıcı Sistemi

#### BMI.jsx - Ana BMI Bölümü

```jsx
const BMI = () => {
  return (
    <section className="bmi-section">
      {/* BMI hesaplayıcı ve grafik containerı */}
      <div className="bmi-wrapper">
        <div className="bmi-calculator">
          {/* BMI açıklama metni */}
          <BMIDescription />

          {/* Interaktif hesaplayıcı formu */}
          <BMICalculator />
        </div>

        {/* BMI indeks grafiği */}
        <BMIChart />
      </div>
    </section>
  );
};
```

#### BMICalculator.jsx - İnteraktif Hesaplayıcı

```jsx
const BMICalculator = () => {
  // Kullanıcı boy girişi (cm)
  const [height, setHeight] = useState("");

  // Kullanıcı kilo girişi (kg)
  const [weight, setWeight] = useState("");

  // Hesaplama sonucu ve kategori bilgisi
  const [result, setResult] = useState(null);

  // BMI grafiği üzerinde gösterge okunu güncelleyen fonksiyon
  const updateBMIIndicator = (bmi) => {
    // Varsa eski göstergeyi kaldır
    const existingIndicator = document.querySelector(".bmi-indicator");
    if (existingIndicator) {
      existingIndicator.remove();
    }

    // BMI değerine göre pozisyon ve kategori hesapla
    let position = 0;
    let category = "";
    let color = "";

    if (bmi < 18.5) {
      // Zayıf: mavi renk, %15 pozisyon
      position = 15;
      category = "Underweight";
      color = "#3498db";
    } else if (bmi >= 18.5 && bmi < 25) {
      // Normal: yeşil renk, %40 pozisyon
      position = 40;
      category = "Normal";
      color = "#2ecc71";
    } else if (bmi >= 25 && bmi < 30) {
      // Fazla kilolu: turuncu renk, %60 pozisyon
      position = 60;
      category = "Overweight";
      color = "#f39c12";
    } else if (bmi >= 30 && bmi < 35) {
      // Obez sınıf 1: koyu turuncu, %80 pozisyon
      position = 80;
      category = "Obese Class I";
      color = "#e67e22";
    } else {
      // Obez sınıf 2+: kırmızı renk, %95 pozisyon
      position = 95;
      category = "Obese Class II+";
      color = "#e74c3c";
    }

    // Dinamik gösterge elementi oluştur
    const indicator = document.createElement("div");
    indicator.innerHTML = `
      <div style="position: absolute; bottom: -60px; left: ${position}%; transform: translateX(-50%);">
        <!-- Üçgen ok işareti -->
        <div style="border-bottom: 25px solid ${color}; ..."></div>
        <!-- BMI sonuç kutusu -->
        <div style="background-color: ${color}; ...">
          BMI: ${bmi.toFixed(1)} - ${category}
        </div>
      </div>
    `;
  };

  // Form submit işleyicisi - BMI hesaplama ana fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (heightNum && weightNum && heightNum > 0 && weightNum > 0) {
      // Boy cm'den metreye çevir
      const heightInMeters = heightNum / 100;

      // BMI formülü: kilo / (boy * boy)
      const bmi = weightNum / (heightInMeters * heightInMeters);

      // BMI kategorisini belirle
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

      // Sonucu state'e kaydet
      setResult({ bmi: bmi.toFixed(1), category, color });

      // Grafik göstergesini güncelle (100ms gecikmeyle DOM render bekle)
      setTimeout(() => updateBMIIndicator(bmi), 100);
    } else {
      alert("Lütfen geçerli boy ve kilo değerleri girin!");
    }
  };
};
```

#### Alt Komponentler:

- **BMIDescription.jsx**: BMI hakkında açıklayıcı metin
- **BMIChart.jsx**: BMI indeks tablosu görselini render eder

### 🧘‍♀️ Classes (Sınıflar) Sistemi

#### Classes.jsx - Sınıf Programları Ana Komponenti

```jsx
const Classes = () => {
  // Aktif tab durumunu yöneten state (varsayılan: yoga)
  const [activeTab, setActiveTab] = useState("yoga");

  // Sınıf verilerini içeren nesne - her sınıf için detaylı bilgi
  const classesData = {
    yoga: {
      title: "Why are your Yoga?",
      description: "Yoga hakkında açıklayıcı metin...",
      schedule: [
        "Saturday-Sunday: 8:00am - 10:00am",
        "Monday-Tuesday: 10:00am - 12:00pm",
        "Wednesday-Friday: 3:00pm - 6:00pm",
      ],
      image: "/images/yoga.jpg",
    },
    group: {
      title: "Why are your Group?",
      description: "Grup antrenmanları hakkında...",
      schedule: [...], // Grup antrenman saatleri
      image: "/images/group.webp",
    },
    // ... diğer sınıflar (solo, stretching)
  };

  // Tab isimleri dizisi
  const tabs = ["Yoga", "Group", "Solo", "Stretching"];

  return (
    <section id="classes" className="classes-section">
      {/* Bölüm başlığı ve açıklaması */}
      <SectionHeader
        title="OUR CLASSES"
        description="Sınıflarımız hakkında açıklama..."
      />

      {/* Tab navigasyon butonları */}
      <ClassesTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab} // Tab değiştirme fonksiyonu
      />

      {/* Seçili tab'ın içerik detayları */}
      <ClassesContent
        data={classesData[activeTab]} // Aktif tab verisi
        activeTabName={tabs.find(tab => tab.toLowerCase() === activeTab)}
      />
    </section>
  );
};
```

#### Alt Komponentler:

- **SectionHeader.jsx**: Bölüm başlığı ve açıklama metni
- **ClassesTabs.jsx**: Tab navigasyon sistemi
- **ClassesContent.jsx**: Seçili sınıfın detay bilgilerini gösterir

### 👨‍💼 Diğer Ana Komponentler

#### Stats.jsx

```jsx
// İstatistik sayıları ve başarı metriklerini animasyonlu şekilde gösterir
// - Üye sayısı, antrenör sayısı, tamamlanan program sayısı gibi veriler
// - Counter animasyonu ile sayıların artarak gösterilmesi
```

#### Trainers.jsx

```jsx
// Antrenör profil kartlarını listeler
// - Antrenör fotoğrafları ve isimleri
// - Uzmanlık alanları ve deneyim bilgileri
// - Hover efektleri ve detay görüntüleme
```

#### Purchase.jsx

```jsx
// Üyelik paketleri ve fiyatlandırma tablosu
// - Farklı üyelik seçenekleri (aylık, yıllık, premium)
// - Özellik karşılaştırma tablosu
// - Satın alma butonları ve yönlendirmeleri
```

#### Review.jsx

```jsx
// Müşteri yorumları ve deneyim paylaşımları
// - Kullanıcı profil fotoğrafları
// - Yıldız değerlendirme sistemi
// - Carousel/slider ile yorum gezintisi
```

#### Contact.jsx

```jsx
// İletişim formu ve bilgi kartları
// - Ad, email, mesaj girişi olan form
// - Form validasyonu ve submit işlemi
// - Adres, telefon, email bilgi kartları
```

#### Footer.jsx

```jsx
// Site alt bilgi bölümü
// - Sosyal medya linkleri
// - Hızlı menü linkleri
// - Telif hakkı ve yasal bilgiler
```

### 🎨 Ortak Fonksiyon Patterns

#### Event Handlers (Olay İşleyicileri)

```jsx
// Form submit işleyicisi pattern'i
const handleSubmit = (e) => {
  e.preventDefault(); // Sayfanın yenilenmesini engelle
  // Form verilerini işle
  // Validasyon kontrolü yap
  // State güncelle veya API çağrısı yap
};

// Input değişiklik işleyicisi
const handleInputChange = (e) => {
  setInputValue(e.target.value); // State'i güncelle
};

// Click işleyicisi
const handleClick = (param) => {
  // Tıklama olayını işle
  // State değişikliği veya navigasyon
};
```

#### State Management Patterns

```jsx
// Boolean state toggle pattern'i
const [isOpen, setIsOpen] = useState(false);
const toggleState = () => setIsOpen(!isOpen);

// Object state güncelleme pattern'i
const [formData, setFormData] = useState({});
const updateField = (field, value) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

// Array state güncelleme pattern'i
const [items, setItems] = useState([]);
const addItem = (newItem) => {
  setItems((prev) => [...prev, newItem]);
};
```

#### Effect Hooks Patterns

```jsx
// Component mount/unmount effect
useEffect(() => {
  // Setup: event listener, timer, subscription
  const cleanup = setupFunction();

  return () => {
    // Cleanup: remove listeners, clear timers
    cleanup();
  };
}, []); // Boş dependency array = sadece mount/unmount

// State değişikliklerini izleme
useEffect(() => {
  // State değiştiğinde çalışacak kod
  console.log("State changed:", stateVariable);
}, [stateVariable]); // Dependency array ile izleme
```

## 🔧 Kullanılan React Hooks

- **useState**: Komponent state yönetimi
- **useEffect**: Side effect'ler ve lifecycle yönetimi
- **Custom Hooks**: Tekrar kullanılabilir state logic'i

## 📐 CSS Class Naming Convention

```css
/* BEM (Block Element Modifier) benzeri yaklaşım */
.component-name {
} /* Ana komponent */
.component-name__element {
} /* Alt element */
.component-name--modifier {
} /* Durum modifikatörü */

/* Örnekler */
.navbar {
}
.navbar__link {
}
.navbar--scrolled {
}

.bmi-calculator {
}
.bmi-calculator__input {
}
.bmi-calculator__result {
}
.bmi-calculator--active {
}
```
