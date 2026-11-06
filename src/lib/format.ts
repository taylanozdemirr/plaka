const currency = new Intl.NumberFormat('tr-TR', {
	style: 'currency',
	currency: 'TRY',
	maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
	return currency.format(value);
}

export function formatDate(value: string | number | Date): string {
	return new Intl.DateTimeFormat('tr-TR', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	}).format(new Date(value));
}

export function formatDateTime(value: string | number | Date): string {
	return new Intl.DateTimeFormat('tr-TR', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	}).format(new Date(value));
}
