export interface FaqItem {
	question: string;
	answer: string;
	category?: string;
}

export const faqCategories = [
	'Ürün & Malzeme',
	'Sipariş & Teslimat',
	'Ödeme & Fiyat',
	'Kişiye Özel',
] as const;

export const faqs: FaqItem[] = [
	{
		question: 'Plakalar yasal olarak kullanılabilir mi?',
		category: 'Ürün & Malzeme',
		answer:
			'Atölyemizde üretilen ürünler dekoratif ve koleksiyon amaçlıdır. Araç tescil ve trafik işlemleri için yalnızca yetkili kurumların düzenlediği resmî plakalar kullanılabilir. App ve özel tasarım ürünlerimizi gösteri, koleksiyon veya garaj dekorasyonu için sunuyoruz.',
	},
	{
		question: 'Nasıl sipariş verebilirim?',
		category: 'Sipariş & Teslimat',
		answer:
			'Siparişlerimizi telefonla alıyoruz; sitemiz üzerinden online satış yapılmamaktadır. Sipariş hattımızı arayın ya da WhatsApp’tan yazın. Plaka tipi, ölçü, yüzey ve karakterleri birlikte netleştirip kesin fiyatı ve teslim tarihini görüşme sırasında paylaşıyoruz.',
	},
	{
		question: 'Siparişim ne zaman üretilir ve teslim edilir?',
		category: 'Sipariş & Teslimat',
		answer:
			'Stokta olan ürünler aynı gün içinde özenle paketlenir ve 24 saat içinde kargoya verilir. Kişiye özel ve koleksiyon serisi üretimler 3–5 iş günü sürer. Türkiye’nin 81 iline sigortalı kargo ile gönderim yapıyoruz; teslimat süresi 1–3 iş günüdür.',
	},
	{
		question: 'Hangi malzemeleri kullanıyorsunuz?',
		category: 'Ürün & Malzeme',
		answer:
			'1.2 mm fırçalanmış alüminyum gövde, UV dayanımlı üç katmanlı baskı, paslanmaz çelik montaj elemanları ve isteğe bağlı 24 ayar altın varak kullanıyoruz. Her parça üretim sonunda tek tek kalite kontrolünden geçer.',
	},
	{
		question: 'Montaj zor mu?',
		category: 'Ürün & Malzeme',
		answer:
			'Her siparişle birlikte paslanmaz vida seti, montaj şablonu ve adım adım montaj kılavuzu gönderiyoruz. Mevcut plaka deliklerinize uyumlu gizli montaj kanalı sayesinde aracınıza ekstra delik açmanıza gerek kalmaz.',
	},
	{
		question: 'İade ve değişim yapabilir miyim?',
		category: 'Sipariş & Teslimat',
		answer:
			'Standart ürünlerde teslimattan itibaren 14 gün içinde, kullanılmamış ve orijinal ambalajında olmak kaydıyla iade veya değişim yapabilirsiniz. Kişiye özel isim ve karakter içeren üretimler bu kapsam dışındadır.',
	},
	{
		question: 'Ödeme seçenekleri neler?',
		category: 'Ödeme & Fiyat',
		answer:
			'Ödeme seçenekleri ve detayları sipariş görüşmesi sırasında telefonda paylaşılır. Siparişiniz onaylandıktan sonra üretime alınır ve kargo takip numaranız size iletilir.',
	},
	{
		question: 'Kişiye özel plaka tasarlatabilir miyim?',
		category: 'Kişiye Özel',
		answer:
			'Elbette. Atölye sayfasındaki tasarım aracını kullanarak şehir kodu, harf ve rakam kombinasyonunuzu seçebilir; tasarımınızı WhatsApp’tan bize gönderebilir ya da bizi arayarak tamamen özel bir kompozisyon hazırlatabilirsiniz.',
	},
	{
		question: 'Garanti kapsamı nedir?',
		category: 'Ürün & Malzeme',
		answer:
			'Tüm plakalarımız üretim hatalarına karşı 2 yıl garanti kapsamındadır. Renk solması, kabarma veya karakter ayrılması gibi durumlarda ürünü ücretsiz olarak yeniliyoruz.',
	},
	{
		question: 'Hangi şehirlere gönderim yapıyorsunuz?',
		category: 'Sipariş & Teslimat',
		answer:
			'Türkiye’nin 81 ilinin tamamına gönderim yapıyoruz. Her plaka çift katmanlı koruyucu ambalaj ve montaj setiyle, sigortalı kargo ile adresinize teslim edilir.',
	},
	{
		question: 'Kurumsal veya hediye siparişi verebilir miyim?',
		category: 'Kişiye Özel',
		answer:
			'Otogaleriler, etkinlikler ve kurumsal hediyeler için özel üretim yapıyoruz. Logolu sunum kutusu, teşekkür kartı ve toplu fiyatlandırma seçenekleri sunuyoruz. 10 adet ve üzeri talepleriniz için sipariş hattımızı arayın.',
	},
	{
		question: 'Sitedeki fiyatlar kesin mi?',
		category: 'Ödeme & Fiyat',
		answer:
			'Sitede yer alan fiyatlar bilgilendirme amaçlıdır ve KDV dahildir. Kişiye özel seçimlere göre kesin fiyat, sipariş görüşmesi sırasında size iletilir.',
	},
	{
		question: 'Plakamın ölçüsünü nasıl seçmeliyim?',
		category: 'Ürün & Malzeme',
		answer:
			'Standart araçlar için 520 × 110 mm, motosikletler için 210 × 170 mm, özel montaj alanları için kare ve uzun formatlar sunuyoruz. Emin değilseniz bizi arayıp araç modelinizi söyleyin; doğru ölçüyü birlikte seçelim.',
	},
];

export function getFaqsByCategory(category: string): FaqItem[] {
	return faqs.filter((faq) => faq.category === category);
}
