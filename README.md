# Plaka Atelier

Premium plaka atölyesi konseptiyle hazırlanmış, Astro tabanlı tanıtım sitesi. Online satış yoktur; siparişler telefon / WhatsApp ile alınır ve Türkiye'nin 81 iline kargo ile gönderilir. Obsidyen siyahı ve şampanya altını paleti, editoryal tipografi ve yumuşak CSS geçişleriyle kurgulanmıştır.

## Çalıştırma

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
npm run preview
```

> Not: Proje Astro 5 ile kuruludur çünkü yerel Node 22.12, Astro 7'nin istediği `>=22.23.4` sürümünü karşılamıyor.

## Sayfalar

| Yol | İçerik |
| --- | --- |
| `/` | Ana sayfa, koleksiyon, atölye, tasarım stüdyosu, “Nasıl sipariş verilir”, yorumlar, SSS |
| `/plakalar` | Koleksiyon; kategori filtresi, sıralama ve URL senkronizasyonu |
| `/plakalar/[slug]` | Ürün detayı; görünüm galerisi ve “Sipariş için arayın” kartı |
| `/hakkimizda`, `/iletisim`, `/sss` | Kurumsal sayfalar; iletişim sayfası telefon odaklıdır |
| `/bilgi/[slug]` | Gizlilik, mesafeli satış, kargo ve teslimat, iade ve değişim |
| `/404` | Özel hata sayfası |

## Sipariş hattı

Sitede sepet, ödeme veya üyelik yoktur. Tüm sipariş butonları telefon (`tel:`) ya da WhatsApp bağlantısıdır.

- **Numarayı değiştirmek için** yalnızca `src/data/site.ts` içindeki `phoneDigits`, `phone` ve `phoneIntl` değerlerini güncelleyin. Header, footer, ürün sayfaları, sağ alttaki sabit arama butonu ve WhatsApp bağlantıları bu değerleri kullanır.
- Telefon numarası `src/components/PhoneCta.astro` bileşeninde plaka görünümünde gösterilir.
- Tasarım stüdyosundaki “WhatsApp ile Sipariş Ver” butonu, seçilen plaka, yüzey ve ölçüyü hazır mesaj olarak WhatsApp'a aktarır.
- Sitedeki fiyatlar bilgilendirme amaçlıdır.

## Görselleri değiştirme

Ürün görselleri fotoğraf değil, CSS ile çizilen `src/components/Plate.astro` bileşenidir. Bu sayede her plaka gerçek zamanlı olarak yazı, şehir, yüzey ve ölçüye göre render edilir.

Fotoğraf kullanmak isterseniz:

1. Görselleri `public/images/` altına ekleyin.
2. Ana sayfadaki editoryal görselleri `src/pages/index.astro` içinde değiştirin:
   - `public/images/editorial-car.jpg`
   - `public/images/atelier.jpg`
   - `public/images/tools.jpg`
3. Ürün fotoğrafları için `src/components/ProductCard.astro` ve `src/pages/plakalar/[slug].astro` içindeki `<Plate />` çağrılarını `<img />` ile değiştirebilirsiniz.

Paylaşım görseli `public/og-image.png` (1200×630) ve favicon `public/favicon.svg` olarak hazırdır. Yeni bir OG görseli üretmek için `public/og-image.svg` dosyasını düzenleyip yeniden PNG'ye dönüştürebilirsiniz.

## İçerik ve tasarım

- **Veri:** `src/data/products.ts`, `src/data/faq.ts`, `src/data/testimonials.ts`, `src/data/site.ts`
- **Tasarım sistemi:** `src/styles/global.css` ve `src/styles/components.css`
- **Fontlar:** Sora Variable, Manrope Variable, Instrument Serif italic (`@fontsource`, yerel olarak servis edilir)
- **Marka rengi:** `--gold: #c9a86a`, zemin `#07080a`

## Erişilebilirlik

Arama katmanı ve mobil menü `inert` + `aria-hidden` ile yönetilir; klavye odağı ve kontrast değerleri gözetilmiştir.

## Yayına alma (Cloudflare Pages)

1. Projeyi GitHub'a yükleyin.
2. Cloudflare Pages → **Create project** → GitHub deposunu seçin.
   - Framework: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Ortam değişkeni: `NODE_VERSION` = `22`
3. **Custom domains** bölümünden alan adınızı bağlayın.
4. `src/data/site.ts` içindeki `url` değerini alan adınızla değiştirin. Canonical bağlantılar, `sitemap.xml` ve `robots.txt` bu değerden üretilir.
5. Google Search Console'a siteyi ekleyip `https://alanadiniz.com/sitemap.xml` adresini gönderin.

`public/_headers` dosyası Cloudflare Pages için güvenlik ve önbellek başlıklarını içerir.

## Google Ads ve dönüşüm takibi

Takip kodları `src/data/site.ts` içindeki `tracking` ayarından yönetilir. Kimlikler boşken sitede hiçbir takip kodu ve çerez kutusu yoktur.

1. Google Ads → **Hedefler → Dönüşümler → Yeni dönüşüm işlemi → Web sitesi** adımında iki dönüşüm oluşturun: “Telefon tıklaması” ve “WhatsApp tıklaması” (kategori: *İletişim*). Kurulum yöntemi olarak **Google etiketini kendim ekleyeceğim** seçeneğini kullanın.
2. Size verilen `AW-…` kimliğini `googleAdsId` alanına yazın.
3. Her dönüşümün `send_to` değerindeki `/` işaretinden sonraki kısmı (etiket) `conversionLabels.phone` ve `conversionLabels.whatsapp` alanlarına yazın.
4. İsterseniz Google Analytics 4 ölçüm kimliğini (`G-…`) `ga4Id` alanına ekleyin.
5. `npm run build` ile yeniden derleyip yayınlayın.

Ziyaretçi çerez kutusunda **Kabul et** demeden Google etiketi yüklenmez (KVKK). Onay verildikten sonra sitedeki tüm `tel:` bağlantıları, WhatsApp bağlantıları ve tasarım stüdyosundaki “WhatsApp ile Sipariş Ver” butonu dönüşüm olarak gönderilir. Footer'daki “Çerez tercihleri” bağlantısı kutuyu yeniden açar.
