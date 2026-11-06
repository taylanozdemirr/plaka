export interface LegalSection {
	heading: string;
	paragraphs: string[];
	bullets?: string[];
}

export interface LegalPage {
	slug: string;
	title: string;
	eyebrow: string;
	intro: string;
	updated: string;
	sections: LegalSection[];
}

export const legalPages: LegalPage[] = [
	{
		slug: 'gizlilik-politikasi',
		title: 'Gizlilik Politikası',
		eyebrow: 'Hukuki bilgi',
		intro:
			'Plaka Atelier olarak kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat çerçevesinde işliyoruz. Bu sayfa, hangi verileri neden topladığımızı ve haklarınızı açıklar.',
		updated: '2026-01-12',
		sections: [
			{
				heading: 'Topladığımız veriler',
				paragraphs: [
					'Siparişinizi hazırlayabilmek ve size ulaşabilmek için yalnızca gerekli verileri topluyoruz. Bu veriler, telefon veya WhatsApp üzerinden verdiğiniz sipariş sırasında bizimle paylaştığınız bilgilerle sınırlıdır. Sitemizde üyelik, online ödeme veya iletişim formu bulunmaz.',
				],
				bullets: [
					'Kimlik ve iletişim bilgileri: ad, soyad, telefon numarası',
					'Teslimat bilgileri: adres, il, ilçe, posta kodu',
					'Sipariş bilgileri: ürün, adet, tutar, sipariş numarası',
					'Teknik bilgiler: tarayıcı türü ve cihaz bilgisi',
				],
			},
			{
				heading: 'Verileri neden işliyoruz',
				paragraphs: [
					'Verilerinizi telefonla verdiğiniz siparişi oluşturmak, üretim ve teslimat süreçlerini yürütmek, fatura düzenlemek, size dönüş yapmak ve yasal yükümlülüklerimizi yerine getirmek amacıyla işliyoruz. Pazarlama iletişimi yalnızca açık rızanız bulunduğunda yapılır.',
				],
			},
			{
				heading: 'Çerezler',
				paragraphs: [
					'Sitemiz yalnızca tanıtım amaçlıdır; sepet, üyelik veya ödeme işlemi için çerez kullanmaz. Reklamlarımızın etkisini ölçmek için Google Ads ve Google Analytics çerezlerini yalnızca çerez kutusunda “Kabul et” seçeneğini işaretlemeniz hâlinde kullanırız. Bu çerezler, sitemizdeki telefon ve WhatsApp bağlantılarına tıklanıp tıklanmadığını ölçer; kimliğinizi veya telefon numaranızı içermez. Tercihinizi sayfanın altındaki “Çerez tercihleri” bağlantısından dilediğiniz zaman değiştirebilirsiniz.',
				],
			},
			{
				heading: 'Paylaşım ve saklama',
				paragraphs: [
					'Verileriniz; kargo firmaları, onay vermeniz hâlinde reklam ölçümü için Google ve yasal olarak yetkili kurumlar dışında üçüncü taraflarla paylaşılmaz. Kayıtlar, mevzuatta öngörülen süreler boyunca ve en fazla 10 yıl saklanır.',
				],
			},
			{
				heading: 'Haklarınız',
				paragraphs: [
					'KVKK madde 11 kapsamında verilerinize erişme, düzeltilmesini veya silinmesini talep etme, işlemeye itiraz etme ve zararınızın giderilmesini isteme hakkına sahipsiniz. Taleplerinizi sipariş hattımızı arayarak iletebilirsiniz.',
				],
			},
		],
	},
	{
		slug: 'mesafeli-satis-sozlesmesi',
		title: 'Mesafeli Satış Sözleşmesi',
		eyebrow: 'Hukuki bilgi',
		intro:
			'Bu sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca, telefon ve WhatsApp üzerinden verilen siparişlere ilişkin tarafların hak ve yükümlülüklerini düzenler.',
		updated: '2026-01-12',
		sections: [
			{
				heading: 'Taraflar',
				paragraphs: [
					'Satıcı: Plaka Atelier. Alıcı: telefon veya WhatsApp üzerinden sipariş veren ve bilgilerini beyan eden tüketici. Sipariş görüşmesinde ürün, fiyat ve teslimat bilgilerinin karşılıklı onaylanmasıyla bu sözleşme kurulmuş sayılır.',
				],
			},
			{
				heading: 'Sözleşme konusu ürün',
				paragraphs: [
					'Ürünün temel nitelikleri, satış fiyatı, ödeme şekli ve teslimat bilgileri sipariş görüşmesinde alıcıya bildirilir; sitedeki ürün sayfaları bilgilendirme amaçlıdır. Ürünler dekoratif ve koleksiyon amaçlı üretilir; resmî plaka niteliği taşımaz.',
				],
			},
			{
				heading: 'Ödeme ve teslimat',
				paragraphs: [
					'Ödeme yöntemi ve detayları sipariş görüşmesinde belirlenir. Stoktaki ürünler 48 saat içinde kargoya verilir; kişiye özel üretimler 3–5 iş günü sürer. Türkiye’nin 81 iline gönderim yapılır ve teslimat 1–3 iş günüdür.',
				],
			},
			{
				heading: 'Cayma hakkı',
				paragraphs: [
					'Alıcı, teslimattan itibaren 14 gün içinde herhangi bir gerekçe göstermeksizin cayma hakkına sahiptir. Kişiye özel üretilen, alıcının istekleri doğrultusunda hazırlanan ürünler cayma hakkı kapsamı dışındadır.',
				],
			},
			{
				heading: 'Uyuşmazlık çözümü',
				paragraphs: [
					'Uyuşmazlıklarda Ticaret Bakanlığı’nca ilan edilen parasal sınırlar dahilinde Tüketici Hakem Heyetleri, üzerindeki tutarlarda Tüketici Mahkemeleri yetkilidir.',
				],
			},
		],
	},
	{
		slug: 'kargo-ve-teslimat',
		title: 'Kargo ve Teslimat',
		eyebrow: 'Hukuki bilgi',
		intro:
			'Telefonla verdiğiniz siparişler atölyemizde özenle paketlenir ve anlaşmalı kargo firmaları aracılığıyla Türkiye’nin 81 iline teslim edilir. Aşağıda süreç ve takip bilgileri yer alır.',
		updated: '2026-02-03',
		sections: [
			{
				heading: 'Hazırlık süresi',
				paragraphs: [
					'Stokta bulunan ürünler aynı gün içinde paketlenir ve 48 saat içinde kargoya verilir. Kişiye özel, koleksiyon ve Signature serisi üretimler 3–5 iş günü sürer.',
				],
			},
			{
				heading: 'Teslimat süresi ve ücreti',
				paragraphs: [
					'Türkiye genelinde teslimat 1–3 iş günüdür; hafta sonu ve resmî tatillerde kargo çıkışı yapılmaz. Kargo ücreti, siparişiniz alınırken telefonda bildirilir.',
				],
			},
			{
				heading: 'Paketleme',
				paragraphs: [
					'Her plaka, çift katmanlı koruyucu köpük ve özel kutu içinde gönderilir. Koleksiyon serileri el dikişli deri sunum kutusuyla teslim edilir. Montaj seti ve kılavuz kutuya dahildir.',
				],
			},
			{
				heading: 'Takip ve teslim alma',
				paragraphs: [
					'Kargo takip numaranız telefon veya WhatsApp üzerinden size iletilir. Teslimat sırasında paketin hasarlı olup olmadığını kontrol etmenizi öneririz; hasar durumunda lütfen kargo görevlisine tutanak tutturup bizimle iletişime geçin.',
				],
			},
		],
	},
	{
		slug: 'iade-ve-degisim',
		title: 'İade ve Değişim',
		eyebrow: 'Hukuki bilgi',
		intro:
			'Amacımız, aldığınız plakadan memnun kalmanız. Ürün beklentinizi karşılamadıysa aşağıdaki koşullar dahilinde iade veya değişim yapabilirsiniz.',
		updated: '2026-01-12',
		sections: [
			{
				heading: 'İade koşulları',
				paragraphs: [
					'Teslimattan itibaren 14 gün içinde, ürün kullanılmamış ve orijinal ambalajında olmak kaydıyla iade talebi oluşturabilirsiniz. İade talebi için sipariş hattımızı arayabilir veya WhatsApp’tan yazabilirsiniz.',
				],
			},
			{
				heading: 'İade kapsamı dışındakiler',
				paragraphs: [
					'Kişiye özel şehir kodu, harf ve rakam kombinasyonuyla üretilen plakalar; numaralı koleksiyon serileri ve Signature üretimler, siparişe özel hazırlandığı için iade ve değişim kapsamı dışındadır.',
				],
			},
			{
				heading: 'Değişim',
				paragraphs: [
					'Üretim hatası, renk solması veya nakliye hasarı durumunda ürünü ücretsiz olarak yeniliyoruz. Değişim talebinde ürünün fotoğrafını WhatsApp’tan paylaşmanız süreci hızlandırır.',
				],
			},
			{
				heading: 'Ücret iadesi',
				paragraphs: [
					'İade onayından sonra tutar, ödeme yönteminize bağlı olarak 3–14 iş günü içinde iade edilir. Kargo ücreti, ürünün ayıplı olması dışında alıcıya aittir.',
				],
			},
		],
	},
];

export function getLegalPage(slug: string): LegalPage | undefined {
	return legalPages.find((page) => page.slug === slug);
}
