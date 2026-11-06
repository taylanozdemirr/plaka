// Sipariş hattı numarasını yalnızca buradan değiştirin; sitedeki tüm telefon,
// arama ve WhatsApp bağlantıları bu değerlerden üretilir.
const phoneDigits = '905320003434'; // ülke kodu + numara, boşluksuz

export const site = {
	name: 'Plaka Atelier',
	shortName: 'PLAKA',
	tagline: 'Aracınıza kimlik kazandırın.',
	description:
		'Müze kalitesinde işçilikle üretilen normal, app ve koleksiyon plakalar. Türkiye’nin 81 iline sigortalı kargo ile gönderim. Sipariş için bizi arayın.',
	/** Canlı alan adınız (sonda / olmadan). Canonical, sitemap ve robots.txt bunu kullanır. */
	url: 'https://plakaatelier.com',
	/** Ekranda gösterilen biçim */
	phone: '0532 000 34 34',
	/** Uluslararası biçim (ör. yurt dışından arayanlar için) */
	phoneIntl: '+90 532 000 34 34',
	phoneHref: `+${phoneDigits}`,
	whatsappDigits: phoneDigits,
	hours: 'Pazartesi – Cumartesi · 10:00 – 19:00',
	instagram: 'https://instagram.com',
};

// Google reklam / ölçüm ayarları. Boş bırakılırsa hiçbir takip kodu ve çerez kutusu yüklenmez.
export const tracking = {
	/** Google Ads etiket kimliği, ör. 'AW-123456789' */
	googleAdsId: '',
	/** (İsteğe bağlı) Google Analytics 4 ölçüm kimliği, ör. 'G-XXXXXXXXXX' */
	ga4Id: '',
	/** Google Ads dönüşüm etiketleri (Ads > Hedefler > Dönüşümler > etiket kurulumu). Ör. 'AbCdEfGhIj' */
	conversionLabels: {
		phone: '',
		whatsapp: '',
	},
};

export const telHref = `tel:${site.phoneHref}`;

export function whatsappHref(message = 'Merhaba, plaka siparişi hakkında bilgi almak istiyorum.'): string {
	return `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
