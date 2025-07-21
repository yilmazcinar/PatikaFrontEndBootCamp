# 📝 Not Uygulaması (Note App)

Modern ve kullanıcı dostu bir React tabanlı not alma uygulaması. Renkli notlar oluşturun, düzenleyin ve arayın!

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Modern-orange?logo=css3)

## 🌟 Özellikler

### ✨ Temel Özellikler

- **📝 Not Ekleme**: Textarea ile kolayca not yazabilme
- **🎨 Renk Seçimi**: 6 farklı renk seçeneği ile notları renklendirebilme
- **🔍 Arama**: Notlar arasında hızlı arama yapabilme
- **🗑️ Silme**: Tek tıkla not silme özelliği

### 🚀 Gelişmiş Özellikler

- **📅 Tarih Takibi**: Her notun ekleme tarihi otomatik kaydedilir
- **📱 Responsive Tasarım**: Mobil ve desktop uyumlu
- **🎭 Animasyonlar**: Smooth geçiş efektleri
- **💾 Local State Management**: React Hooks ile state yönetimi

## 🎨 Renk Paleti

Uygulamada kullanılabilen renkler:

- 🟡 **Sarı** (#ffeb3b)
- 🔵 **Mavi** (#2196f3)
- 🟢 **Yeşil** (#4caf50)
- 🩷 **Pembe** (#e91e63)
- 🟠 **Turuncu** (#ff9800)
- 🟣 **Mor** (#9c27b0)

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (16+ önerilen)
- npm veya yarn

### Kurulum Adımları

1. **Projeyi klonlayın**

   ```bash
   git clone [repo-url]
   cd node-pad
   ```

2. **Bağımlılıkları yükleyin**

   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**

   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:5173
   ```

### Diğer Komutlar

```bash
# Production build
npm run build

# Build önizleme
npm run preview

# Linting
npm run lint
```

## 📖 Kullanım Kılavuzu

### 1. Not Ekleme

1. İstediğiniz rengi seçin
2. Textarea'ya notunuzu yazın
3. "Not Ekle" butonuna tıklayın

### 2. Not Arama

- Üst kısımdaki arama kutusuna yazmaya başlayın
- Notlar anlık olarak filtrelenecek

### 3. Not Silme

- Her notun sağ üst köşesindeki "×" butonuna tıklayın

## 🏗️ Proje Yapısı

```
node-pad/
├── public/
│   ├── vite.svg
│   └── _redirects
├── src/
│   ├── assets/
│   ├── App.jsx          # Ana uygulama bileşeni
│   ├── App.css          # Stil dosyası
│   ├── index.css        # Global stiller
│   └── main.jsx         # Uygulama giriş noktası
├── index.html           # HTML şablon
├── package.json         # Proje bağımlılıkları
├── vite.config.js       # Vite konfigürasyonu
└── README.md           # Bu dosya
```

## 🛠️ Teknolojiler

- **React 18**: Modern React hooks ile geliştirildi
- **Vite**: Hızlı geliştirme ve build aracı
- **CSS3**: Modern CSS özellikleri (Grid, Flexbox, Gradients)
- **JavaScript ES6+**: Modern JavaScript özellikleri

## 💡 Özellik Detayları

### State Yönetimi

- `useState` hook'u ile local state yönetimi
- Notlar array olarak saklanır
- Her not unique ID, metin, renk ve tarih içerir

### Responsive Tasarım

- CSS Grid ile esnek layout
- Mobil cihazlarda tek sütun görünüm
- Touch-friendly buton boyutları

### Arama Algoritması

- Case-insensitive arama
- Anlık filtreleme
- Türkçe karakter desteği

## 🎯 Gelecek Planları

- [ ] Local Storage ile verilerin kalıcı saklanması
- [ ] Not düzenleme özelliği
- [ ] Kategori sistemi
- [ ] Dark mode desteği
- [ ] Drag & drop ile not sıralama
- [ ] Export/Import özelliği

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Patika Front-End Bootcamp** projesi olarak geliştirilmiştir.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

## 📸 Demo

Uygulamayı `npm run dev` komutu ile çalıştırarak http://localhost:5173 adresinde test edebilirsiniz.

### Özellik Görselleri:

- **Renk Seçimi**: Her not için 6 farklı renk seçeneği
- **Responsive Tasarım**: Mobil ve desktop uyumlu grid layout
- **Arama Özelliği**: Anlık filtreleme ile hızlı not bulma
- **Modern UI**: Gradient arka plan ve smooth animasyonlar

---

> **Not**: Bu README dosyası proje geliştikçe güncellenecektir.
