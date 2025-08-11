# Evently

Evently, kullanıcıların etkinlik oluşturabildiği, etkinlikleri beğenebildiği ve konuma/girilen isme göre arayabildiği modern bir React + Firebase uygulamasıdır.

## Özellikler

- **Çoklu Dil Desteği:**
  - Uygulama İngilizce ve Türkçe olarak kullanılabilir
  - Sağ üstteki dil menüsünden anında dil değiştirilebilir

- **Kullanıcı Kayıt ve Giriş:**
  - E-posta ve şifre ile kayıt ve giriş
  - Google ile giriş
  - Şifremi unuttum (reset maili gönderme)
  - Firebase Authentication ile güvenli oturum yönetimi

- **Profil Sayfası:**
  - Kullanıcı adı, e-posta, cinsiyet ve üyelik tarihi görüntüleme
  - Kullanıcılar artık profil sayfasında isim, e-posta ve cinsiyet bilgilerini güncelleyebilir.

- **Etkinlikler:**
  - Etkinlik ekleme (başlık, konum, tarih, saat, açıklama)
  - Tüm etkinlikleri ana sayfada listeleme
  - Her etkinlik kartında beğeni (yıldız) butonu ve toplam beğeni sayısı
  - Sadece giriş yapan kullanıcılar etkinlikleri beğenebilir
  - En çok beğenilen etkinlikler en üstte gösterilir

- **Arama ve Filtreleme:**
  - Etkinlik adı veya konumuna göre arama
  - Küçük/büyük harf ve Türkçe karakter duyarsız arama

- **Korumalı Sayfalar:**
  - Giriş yapmadan home, profil veya etkinlik ekleme sayfalarına erişilemez
  - Çıkış yaptıktan sonra tarayıcı geri tuşu ile korumalı sayfalara erişim engellenir

- **Firebase Firestore:**
  - Etkinlikler ve kullanıcılar Firestore veritabanında saklanır
  - Beğeni (likes) ve diğer bilgiler gerçek zamanlı güncellenir

- **Etkinliğe Katılma ve Katıldıklarım (Favorites):**
  - Kullanıcılar etkinlik kartındaki "Katılıyorum" butonuna tıklayarak etkinliğe katılabilir.
  - Sadece katıldığın etkinlikler, "Favorites" (Katıldıklarım) sayfasında listelenir.
  - Katıldığın etkinliklerin sayısını ve listesini görebilirsin.

  ## Kurulum

1. **Projeyi klonla:**
   ```bash
   git clone <repo-url>
   cd Evently
   ```
2. **Bağımlılıkları yükle:**
   ```bash
   npm install
   ```
3. **Firebase yapılandırması:**
   - `src/firebase.js` dosyasındaki Firebase config bilgilerini kendi projenle değiştir.
   - Firebase Authentication ve Firestore Database’i aktif et.
4. **Projeyi başlat:**
   ```bash
   npm run dev
   ```

## Kullanım
- Kayıt ol veya giriş yap.
- Etkinlik ekle, etkinlikleri beğen, arama yap.
- Profil sayfanda bilgilerini görüntüle.
- Çıkış yaptıktan sonra korumalı sayfalara erişemezsin.
- Sağ üstteki dil menüsünden İngilizce veya Türkçe arasında geçiş yapabilirsin.

## Geliştirme Önerileri
- Etkinlik detay sayfası
- Etkinliğe katılma/katılımcı listesi
- Etkinlik görseli ekleme
- Kategoriye göre filtreleme
- Yorumlar ve bildirimler
- Admin paneli

---

**Evently ile etkinlikleri keşfet, paylaş ve sosyalleş!**