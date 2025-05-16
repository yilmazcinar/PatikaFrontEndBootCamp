document.getElementById("entryForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();

    if(!name) {
        alert("lütfen isminizi giriniz.");
        return;
    }

    localStorage.setItem("userName" , name);

    window.location.href ="index.html";
});



// Önemli Terimler ve Açıklamaları
// 1. localStorage
// Ne? Tarayıcıda veri saklamamızı sağlayan bir mekanizma.

// Özellikleri: Sayfa yenilense bile veriler saklanır. Kullanıcı kapatıp açsa da veriler kalır.

// Nasıl kullanılır?

// localStorage.setItem("anahtar", "değer") ile veri kaydederiz.

// localStorage.getItem("anahtar") ile kaydedilen veriyi okuruz.

// Projemizde ne iş yaptı? Kullanıcının ismini kaydedip diğer sayfada kullanmamıza yaradı.

// 2. Event Listener (Olay Dinleyici)
// Ne? Bir HTML elementine belirli bir olay gerçekleştiğinde çalışacak fonksiyon bağlama yöntemi.

// Örnek:

// js
// Kopyala
// Düzenle
// element.addEventListener("click", function() { ... });
// Projemizde ne iş yaptı? Formun submit (gönderilme) olayı gerçekleştiğinde bizim yazdığımız fonksiyon çalıştı.

// 3. e.preventDefault()
// Ne? Olayın (örneğin form gönderimi) tarayıcı tarafından standart olarak yapılmasını engeller.

// Projemizde ne iş yaptı? Form gönderildiğinde sayfanın yenilenmesini engelledi, böylece JavaScript kontrolü yapabildik.

// 4. trim()
// Ne? Bir string’in başındaki ve sonundaki boşlukları siler.

// Projemizde ne iş yaptı? Kullanıcının isim girerken yanlışlıkla boşluk bırakmasını önlemek için.

// 5. window.location.href
// Ne? Kullanıcıyı başka bir sayfaya yönlendirmeye yarayan JavaScript özelliği.

// Projemizde ne iş yaptı? Form başarılıysa index.html sayfasına, kullanıcı adı yoksa entry.html sayfasına yönlendirme yaptık.

// 6. Array (Dizi)
// Ne? Birden fazla değeri tek değişken içinde saklamaya yarayan veri yapısı.

// Örnek:

// js
// Kopyala
// Düzenle
// const days = ["Pazar", "Pazartesi", "Salı", ...];
// Projemizde ne iş yaptı? Haftanın günlerini saklayıp, getDay() fonksiyonundan dönen sayıya göre gün adını bulduk.

// 7. Date Objesi
// Ne? JavaScript’te tarih ve saatle ilgili işlemler yapmak için kullanılan özel nesne.

// Örnek:

// js
// Kopyala
// Düzenle
// const now = new Date();
// Projemizde ne iş yaptı? O anki tarih ve saati alarak ekranda göstermek için kullandık.

// 8. Template Literals (Backticks)
// Ne? String içinde değişken kullanmayı kolaylaştıran JavaScript özelliği.

// Örnek:

// js
// Kopyala
// Düzenle
// const name = "Ali";  
// console.log(`Merhaba, ${name}!`);  
// Projemizde ne iş yaptı? Saat ve gün bilgisini ekranda güzel ve kolay bir şekilde göstermek için kullandık.

// 9. setInterval()
// Ne? Belirtilen zaman aralıklarında belirli bir fonksiyonu tekrar tekrar çalıştıran JavaScript fonksiyonu.

// Örnek:

// js
// Kopyala
// Düzenle
// setInterval(function, 1000); // Her 1000 ms’de (1 saniye) fonksiyonu çalıştırır
// Projemizde ne iş yaptı? Saati her saniye güncelleyip canlı tutmak için kullandık.

// 10. Defer Attribute
// Ne? <script> etiketi içinde kullanılan ve scriptin, sayfa HTML’i tamamen yüklendikten sonra çalışmasını sağlayan özellik.

// Neden önemli? Script sayfa yüklenmeden çalışırsa, sayfa içindeki elementler henüz oluşmamış olabilir ve script hata verir.

// Projemizde ne iş yaptı? JavaScript dosyalarının sayfa yüklendikten sonra çalışmasını sağladı, böylece hatasız çalıştı.

// 11. DOM (Document Object Model)
// Ne? Web sayfasındaki HTML öğelerinin JavaScript tarafından erişilip değiştirilebilmesi için oluşturulan yapı.

// Projemizde ne iş yaptı? document.getElementById() ile HTML elementlerine erişip içeriklerini değiştirdik.

