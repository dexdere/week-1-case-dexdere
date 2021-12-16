# Trading Platform
[![Netlify Status](https://api.netlify.com/api/v1/badges/95584e4f-3b81-4072-906c-18f630f6e183/deploy-status)](https://app.netlify.com/sites/peaceful-hopper-ec40a7/deploys)
[Live Demo](https://peaceful-hopper-ec40a7.netlify.app/)


Selamlar arkadaşlar ☺️ <br/><br/> 
Bootcamp’e ait ilk ödevin detayları aşağıda yer almaktadır. Çok vaktinizi alacağını düşünmüyorum ve işlediğimiz konuların harmanlanması sonucu bir ödev olacak. Hazır herhangi bir şey kullanmasınızı istemiyorum (regex, hazır kütüphane) sadece pure JavaScript olmasına özen gösterelim 😊

Ödevimizin konusu; Kendisine verilen 16 haneli bir değerin, kredi kartına ait olup olmadığını, valid ise true değil ise false döndüren bir fonksiyon.  Kısacası kredi kartı validatörlüğünü yapacak bir fonksiyon olarak düşünebilirsiniz. Önümüzdeki Cumartesi 18.12.2021 akşam 18.00 a kadar sizden bu ödevleri göndermenizi bekliyor olacağız.

Aşağıda biraz daha detay vermeye çalışacağım.

Valid bir numara için kurallar şunlardır:

- Sayı 16 haneli olmalı, hepsi sayı olmalıdır.
- En az iki farklı rakam olmalıdır (tüm rakamlar aynı olamaz)
- Son rakam çift olmalıdır.
- Tüm rakamların toplamı 16'dan büyük olmalıdır.

👉  Örnek olarak valid kredi kartı numaraları

- 9999777788880000
- 6666666666661666

👉  Invalid kart numaraları

- a92332119c011112 (geçersiz karakterler)
- 4444444444444444 (sadece numaradan oluşmamalı)
- 1111111111111110 (sayıların toplamı 16 dan büyük olmalıdır)
- 6666666666666661 (sonu çift sayı olmalıdır.)

**Bu case i tamamlamak için index.js de ki ilgili fonksiyonu düzenleyiniz**

**Bonus 1:** Aşağıdaki şekilde olan arada “-“ bulunan girişlerinde geçerli olmasını sağlayın.

-9999-7777-8888-0000
-6666-6666-6666-1666

**Bonus 2:** Kredi kartı validatörünü ileri bir düzeye taşıyabilirsin. Örneğin son kullanma tarihini kontrol etmek gibi.  Bununla ilgili olarak Luhn Algoritmasını linkten inceleyebilirsiniz https://en.m.wikipedia.org/wiki/Luhn_algorithm

**Bonus 3:** İlgili fonksiyonun çalıştığı bir sayfa kodlayabilirsiniz. Aramızda CSS gurusu var mı acaba ? 👀

**Not:** Bonusları yapmak zorunda değilsiniz. Sadece gelişiminize katkıda bulunacağını düşündüğüm için eklemek istedim.

**Not2:** Sizden çok detaylı olmasa da yazdığınız kodu açıklamanızı istiyorum

Kolay gelsin🤟🏻

Let’s start 🚀
