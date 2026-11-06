export function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

export function initReveal(): void {
	const elements = document.querySelectorAll<HTMLElement>('.reveal');
	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduced || !('IntersectionObserver' in window)) {
		elements.forEach((element) => element.classList.add('is-visible'));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
	);

	elements.forEach((element) => observer.observe(element));
}

export function initTilt(): void {
	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduced) return;

	document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((element) => {
		let frame = 0;

		const move = (event: PointerEvent) => {
			if (event.pointerType === 'touch') return;
			const rect = element.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width;
			const y = (event.clientY - rect.top) / rect.height;
			element.style.setProperty('--ry', `${(x - 0.5) * 14}deg`);
			element.style.setProperty('--rx', `${(0.5 - y) * 10}deg`);
			element.style.setProperty('--mx', `${x * 100}%`);
			element.style.setProperty('--my', `${y * 100}%`);
			element.classList.add('is-tilting');
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => element.classList.add('is-tilting'));
		};

		const leave = () => {
			element.style.setProperty('--ry', '0deg');
			element.style.setProperty('--rx', '0deg');
			element.style.setProperty('--mx', '50%');
			element.style.setProperty('--my', '50%');
			element.classList.remove('is-tilting');
		};

		element.addEventListener('pointermove', move);
		element.addEventListener('pointerleave', leave);
		element.addEventListener('blur', leave);
	});
}

export function initCounters(): void {
	const elements = document.querySelectorAll<HTMLElement>('[data-count]');
	if (!elements.length) return;

	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const animate = (element: HTMLElement) => {
		const target = Number(element.dataset.count ?? 0);
		const decimals = Number(element.dataset.decimals ?? 0);
		const suffix = element.dataset.suffix ?? '';
		const prefix = element.dataset.prefix ?? '';
		const duration = 1500;
		const start = performance.now();

		const tick = (now: number) => {
			const progress = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - progress, 3);
			const value = target * eased;
			element.textContent = `${prefix}${value.toLocaleString('tr-TR', {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals,
			})}${suffix}`;
			if (progress < 1) requestAnimationFrame(tick);
		};

		if (reduced) {
			element.textContent = `${prefix}${target.toLocaleString('tr-TR', {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals,
			})}${suffix}`;
			return;
		}
		requestAnimationFrame(tick);
	};

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				animate(entry.target as HTMLElement);
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.4 },
	);

	elements.forEach((element) => observer.observe(element));
}

let toastTimer: number | undefined;

export function showToast(message: string, tone: 'default' | 'success' | 'error' = 'default'): void {
	let root = document.getElementById('toast-root');
	if (!root) {
		root = document.createElement('div');
		root.id = 'toast-root';
		root.className = 'toast-root';
		root.setAttribute('aria-live', 'polite');
		document.body.append(root);
	}

	root.replaceChildren();
	const toast = document.createElement('div');
	toast.className = `toast toast--${tone}`;
	toast.setAttribute('role', 'status');
	const icon =
		tone === 'success'
			? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12 4.5 4.5L19 6.5"/></svg>'
			: tone === 'error'
				? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 8v5M12 17h.01"/><circle cx="12" cy="12" r="9"/></svg>'
				: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>';
	toast.innerHTML = `<span class="toast__icon">${icon}</span><span>${escapeHtml(message)}</span>`;
	root.append(toast);

	requestAnimationFrame(() => toast.classList.add('is-in'));

	window.clearTimeout(toastTimer);
	toastTimer = window.setTimeout(() => {
		toast.classList.remove('is-in');
		window.setTimeout(() => toast.remove(), 350);
	}, 3600);
}


export function initGlobalUi(): void {
	initReveal();
	initTilt();
	initCounters();
}
