export type PlateVariant =
	| 'tr'
	| 'app'
	| 'black'
	| 'gold'
	| 'bone'
	| 'green'
	| 'fr'
	| 'de'
	| 'red';

export type PlateSize = 'standart' | 'kare' | 'motosiklet' | 'uzun';
export type Category = 'normal' | 'app' | 'koleksiyon' | 'motosiklet';

export interface Product {
	slug: string;
	name: string;
	tagline: string;
	category: Category;
	price: number;
	city: string;
	text: string;
	variant: PlateVariant;
	size: PlateSize;
	badge?: string;
	description: string;
	features: string[];
	finish: string;
	featured?: boolean;
}

export const categoryLabels: Record<Category, string> = {
	normal: 'Normal Plaka',
	app: 'App Plaka',
	koleksiyon: 'Koleksiyon',
	motosiklet: 'Motosiklet',
};

export const categoryDescriptions: Record<Category, string> = {
	normal: 'Trafik formatında, klasik beyaz zemin.',
	app: 'Mat karbon ve özel renk seçenekleri.',
	koleksiyon: 'Sınırlı üretim, numaralı özel seriler.',
	motosiklet: 'Kare ve kompakt ölçüler.',
};

export const products: Product[] = [
	{
		slug: 'klasik-seri',
		name: 'Klasik Seri',
		tagline: 'Zamansız beyaz, kusursuz baskı.',
		category: 'normal',
		price: 1290,
		city: '06',
		text: 'ABC 123',
		variant: 'tr',
		size: 'standart',
		badge: 'Atölye Klasiği',
		description:
			'Atölyemizin imza ürünü. 1.2 mm alüminyum gövde üzerine UV dayanımlı, üç katmanlı baskı ve el işçiliğiyle tamamlanan 3D kabartma harfler. Yıllar geçse de ilk günkü netliğini korur.',
		features: [
			'1.2 mm fırçalanmış alüminyum',
			'3D kabartma karakterler',
			'UV dayanımlı üç katman baskı',
			'Paslanmaz çelik montaj seti',
		],
		finish: 'Klasik Beyaz',
		featured: true,
	},
	{
		slug: 'app-karbon',
		name: 'App Karbon',
		tagline: 'Mat karbon dokusu, gece siyahı.',
		category: 'app',
		price: 1890,
		city: '16',
		text: 'PLK 16',
		variant: 'app',
		size: 'standart',
		badge: 'Yeni Sezon',
		description:
			'Modern otomobiller için tasarlandı. Mat karbon görünümlü yüzey, ipek beyazı karakterler ve gizli montaj kanalı. Aracınızın arka tasarımıyla bütünleşen, iddialı ama ölçülü bir duruş.',
		features: [
			'Mat karbon yüzey kaplama',
			'İpek beyazı dolgu baskı',
			'Gizli montaj kanalı',
			'Çizilmeye karşı sertlik kaplaması',
		],
		finish: 'Mat Karbon',
		featured: true,
	},
	{
		slug: 'obsidyen-edition',
		name: 'Obsidyen Edition',
		tagline: 'Siyahın en derin tonu, altın imza.',
		category: 'app',
		price: 2450,
		city: '06',
		text: 'OBS 06',
		variant: 'black',
		size: 'standart',
		badge: 'Editör Seçimi',
		description:
			'Obsidyen Edition, mat siyah zemin ile şampanya rengi karakterleri buluşturur. Her plaka tek tek elden geçirilir, kenarları pahlanır ve numaralandırılmış sertifikayla teslim edilir.',
		features: [
			'Mat obsidyen yüzey',
			'Şampanya altın 3D karakter',
			'Pahlanmış el yapımı kenar',
			'Numaralı özgünlük sertifikası',
		],
		finish: 'Obsidyen / Altın',
		featured: true,
	},
	{
		slug: 'koleksiyon-81',
		name: 'Koleksiyon 81',
		tagline: 'Sınırlı üretim. Numaralı seri.',
		category: 'koleksiyon',
		price: 12500,
		city: '81',
		text: 'A 0001',
		variant: 'gold',
		size: 'standart',
		badge: 'Sınırlı Üretim',
		description:
			'Türkiye’nin 81 iline adanmış, yalnızca 100 adet üretilen koleksiyon serisi. Pirinç döküm karakterler, gerçek altın varak detay ve el dikişli deri sunum kutusu. Bir aracın değil, bir koleksiyonun parçası.',
		features: [
			'100 adetle sınırlı üretim',
			'Pirinç döküm karakterler',
			'24 ayar altın varak detay',
			'El dikişli deri sunum kutusu',
		],
		finish: 'Altın Varak',
		featured: true,
	},
	{
		slug: 'moto-kare',
		name: 'Moto Kare',
		tagline: 'Motosikletler için kompakt ölçü.',
		category: 'motosiklet',
		price: 990,
		city: '07',
		text: 'M 1234',
		variant: 'tr',
		size: 'kare',
		description:
			'Motosikletlerin dar montaj alanları için özel olarak ölçülendirilmiş kare plaka. Hafif alüminyum gövde, titreşime dayanıklı baskı ve paslanmaz bağlantı elemanları.',
		features: [
			'Kompakt kare ölçü',
			'Titreşim testinden geçmiş baskı',
			'Hafif alüminyum gövde',
			'Paslanmaz bağlantı seti',
		],
		finish: 'Klasik Beyaz',
		featured: true,
	},
	{
		slug: 'gece-mavisi',
		name: 'Gece Mavisi',
		tagline: 'Derin mavi, buzlu beyaz detay.',
		category: 'app',
		price: 1990,
		city: '61',
		text: 'NGT 61',
		variant: 'app',
		size: 'standart',
		badge: 'Editör Seçimi',
		description:
			'Gece yarısı mavisi zemin üzerine buzlu beyaz karakterler. Işıkla birlikte derinlik kazanan özel boya, gün içinde sakin, akşam saatlerinde ise çarpıcı bir görünüm sunar.',
		features: [
			'Derin gece mavisi özel boya',
			'Buzlu beyaz karakterler',
			'Katmanlı vernik koruması',
			'Gizli montaj kanalı',
		],
		finish: 'Gece Mavisi',
		featured: true,
	},
	{
		slug: 'bone-edition',
		name: 'Bone Edition',
		tagline: 'Fildişi zemin, altın çerçeve.',
		category: 'app',
		price: 1790,
		city: '42',
		text: 'BNE 01',
		variant: 'bone',
		size: 'standart',
		badge: 'Yeni',
		description:
			'Klasik otomobillerin ruhuna uygun fildişi tonu. İnce altın çerçeve ve el cilalı yüzey, sıcak ve zamansız bir estetik arayanlar için.',
		features: [
			'Fildişi mat zemin',
			'İnce altın çerçeve',
			'El cilalı yüzey',
			'3D kabartma karakterler',
		],
		finish: 'Fildişi / Altın',
	},
	{
		slug: 'avrupa-yesil',
		name: 'Avrupa Yeşil',
		tagline: 'Elektrikli araçlar için yeşil imza.',
		category: 'normal',
		price: 1690,
		city: '35',
		text: 'EU 2024',
		variant: 'green',
		size: 'uzun',
		description:
			'Elektrikli araç sahipleri için tasarlanan Avrupa Yeşil seri. Canlı ama sofistike yeşil bant, temiz yüzey ve yüksek kontrastlı siyah karakterler.',
		features: [
			'Yeşil ülke bandı',
			'Yüksek kontrast baskı',
			'UV korumalı yüzey',
			'Standart montaj delikleri',
		],
		finish: 'Beyaz / Yeşil',
	},
	{
		slug: 'fransiz-kare',
		name: 'Fransız Kare',
		tagline: 'Paris estetiği, kare form.',
		category: 'normal',
		price: 1590,
		city: '26',
		text: 'FR 1907',
		variant: 'fr',
		size: 'kare',
		description:
			'Kare formun geometrisini sevenler için Fransız esintili bir yorum. Mavi ülke bandı, ince çerçeve ve dengeli tipografi.',
		features: [
			'Fransız mavi ülke bandı',
			'Kare form',
			'İnce gümüş çerçeve',
			'El cilalı kenar',
		],
		finish: 'Beyaz / Mavi',
	},
	{
		slug: 'almanya-uzun',
		name: 'Almanya Uzun',
		tagline: 'Net çizgiler, endüstriyel zarafet.',
		category: 'normal',
		price: 1490,
		city: '41',
		text: 'DE 1234',
		variant: 'de',
		size: 'uzun',
		description:
			'Alman mühendisliğinden ilham alan net tipografi ve geniş format. Uzun gövde, modern otomobillerin geniş arka panelinde dengeli durur.',
		features: [
			'Geniş uzun format',
			'Alman mavi ülke bandı',
			'Net tipografi',
			'Çift katman vernik',
		],
		finish: 'Beyaz / Mavi',
	},
	{
		slug: 'kirmizi-koleksiyon',
		name: 'Kırmızı Koleksiyon',
		tagline: 'Bordo derinlik, gümüş kontrast.',
		category: 'koleksiyon',
		price: 3290,
		city: '01',
		text: 'KRM 01',
		variant: 'red',
		size: 'standart',
		badge: 'Sınırlı',
		description:
			'Bordo zemin üzerine gümüş karakterler. Klasik yarış mirasından ilham alan bu seri, sıcak tonları seven koleksiyoncular için sınırlı sayıda üretildi.',
		features: [
			'Bordo metalik zemin',
			'Gümüş 3D karakterler',
			'Sınırlı üretim',
			'Numaralı sertifika',
		],
		finish: 'Bordo / Gümüş',
	},
	{
		slug: 'atelier-signature',
		name: 'Atelier Signature',
		tagline: 'Atölyenin en üst seviye imzası.',
		category: 'koleksiyon',
		price: 18900,
		city: '34',
		text: 'PLK 01',
		variant: 'gold',
		size: 'standart',
		badge: 'Atölye',
		description:
			'Ustamızın bizzat ürettiği, yılda yalnızca 20 adet tamamlanan Signature serisi. Gerçek altın varak, el oyması pirinç karakterler ve kişiye özel deri kutu. Randevu ile üretilir.',
		features: [
			'Yılda 20 adet üretim',
			'El oyması pirinç karakterler',
			'24 ayar altın varak',
			'Kişiye özel deri kutu',
		],
		finish: 'Altın / Obsidyen',
	},
];

export function getProduct(slug: string): Product | undefined {
	return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
	return products.filter((product) => product.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
	return products
		.filter((item) => item.slug !== product.slug)
		.sort((a, b) => {
			const aScore = a.category === product.category ? 1 : 0;
			const bScore = b.category === product.category ? 1 : 0;
			return bScore - aScore;
		})
		.slice(0, limit);
}
