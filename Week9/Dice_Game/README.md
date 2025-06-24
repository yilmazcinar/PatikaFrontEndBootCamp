# 🎲 Zar Oyunu - React Project

Bu proje, React ve Vite kullanılarak geliştirilmiş interaktif bir zar oyunudur. Oyuncu bilgisayara karşı zar atarak skorunu artırmaya çalışır.

## 🎯 Özellikler

- **Player vs PC**: Kullanıcı bilgisayara karşı oynuyor
- **Animasyonlu Zar Atma**: 3 saniye boyunca zarlar sürekli değişiyor
- **Özelleştirilebilir Oyuncu Adı**: Kullanıcı kendi adını değiştirebilir
- **İstatistik Takibi**: Kazanma, kaybetme ve berabere sayıları
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Modern UI**: Güzel animasyonlar ve renkli tasarım

## 🚀 Kurulum

1. **Projeyi klonlayın:**

   ```bash
   git clone [repo-url]
   cd Dice_Game
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

## 🎮 Nasıl Oynanır?

1. **"Zar At!"** butonuna tıklayın
2. 3 saniye boyunca zarlar değişecek (heyecan!)
3. Sonuç belirlendikten sonra kazanan/kaybeden/berabere durumu gösterilir
4. İstatistikleriniz otomatik olarak güncellenir
5. İstediğiniz zaman **"Sıfırla"** ile oyunu resetleyebilirsiniz

## ⚙️ Teknik Özellikler

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom animations)
- **State Management**: React Hooks (useState)
- **Image Assets**: PNG zar görselleri (1-6)

## 📁 Proje Yapısı

```
src/
├── App.jsx          # Ana oyun komponenti
├── App.css          # Oyun stilleri
├── index.css        # Global stiller
├── main.jsx         # React DOM render
└── images/
    └── images/
        ├── dice1.png    # Zar görselleri
        ├── dice2.png
        ├── dice3.png
        ├── dice4.png
        ├── dice5.png
        └── dice6.png
```

## 🎨 Ana Fonksiyonlar

### `rollDice()`

- Zar atma işlemini yönetir
- 3 saniye animasyon + sonuç belirleme
- İstatistikleri günceller

### `handleNameEdit()`

- Oyuncu adı düzenleme modunu kontrol eder
- Input validation yapar

### `resetGame()`

- Tüm istatistikleri sıfırlar
- Oyunu başlangıç durumuna döndürür

## 🏆 Oyun Kuralları

- Her oyuncu tek zar atar
- Yüksek sayı kazanır
- Eşit sayılarda berabere
- İstatistikler sürekli güncellenir

## 🎊 Kazanma Mesajları

- 🎉 **Kazandınız!** - Zar değeriniz daha yüksek
- 😔 **Kaybettiniz!** - PC'nin zarı daha yüksek
- 🤝 **Berabere!** - Her iki zar da aynı değer

## 📱 Responsive Tasarım

Oyun tüm cihazlarda mükemmel çalışır:

- 📱 Mobil telefonlar
- 📲 Tabletler
- 💻 Masaüstü bilgisayarlar

## 🛠️ Geliştirme

Bu proje Vite kullanır ve aşağıdaki komutları destekler:

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run preview  # Build önizleme
npm run lint     # ESLint kontrolü
```

## 🎲 Bol Kazançlar!

Oyunun tadını çıkarın ve şansınızı deneyin! 🍀
