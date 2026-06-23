/**
 * icon.view.js
 * VIEW LAYER — Registry ikon SVG sebagai fungsi murni.
 *
 * Aturan layer View:
 *   - Hanya menerima parameter, mengembalikan string HTML
 *   - TIDAK boleh memanipulasi DOM (querySelector, addEventListener, dst)
 *   - TIDAK boleh mengimpor dari models/ secara langsung untuk fetch data sendiri
 */

const ICONS = {
  'shield-check': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75l2 2 4-4m5.5-3.5v6.75c0 5.523-3.978 8.25-8.5 9.75-4.522-1.5-8.5-4.227-8.5-9.75V7.25l8.5-4 8.5 4z"/>',
  briefcase: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a1 1 0 00-1 1v10a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5h6v2H9V5z"/>',
  star: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.48 3.499l1.515 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>',
  shield: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.5l8 4v6c0 5.25-3.5 9-8 10.5C7.5 21.5 4 17.75 4 12.5v-6l8-4z"/>',
  bulb: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6m-5 3h4m-2-19a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.85V15h5v-.25c0-.75.4-1.45 1-1.85A6 6 0 0012 2z"/>',
  target: '<circle cx="12" cy="12" r="9" stroke-width="1.5"/><circle cx="12" cy="12" r="5" stroke-width="1.5"/><circle cx="12" cy="12" r="1" stroke-width="1.5"/>',
  handshake: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11l3 3m0 0l3-3m-3 3V5m8 9l2-2a2 2 0 000-2.83l-3.5-3.5a2 2 0 00-2.83 0L13 6.34M3 13l2-2a2 2 0 012.83 0L11 14.34"/>',
  leaf: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 21c8-1 13-6 14-14-8 1-13 6-14 14zm0 0c0-4 1.5-7 4-9"/>',
  users: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-3.13a4 4 0 100-8 4 4 0 000 8zm6 1.13A4 4 0 0017 5.13M9 9.13A4 4 0 117 5.13"/>',
  layers: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  'badge-check': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75l2 2 4-4m5.5-3.5v6.75c0 5.523-3.978 8.25-8.5 9.75-4.522-1.5-8.5-4.227-8.5-9.75V7.25l8.5-4 8.5 4z"/>',
  'heart-handshake': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21s-7-4.35-9.5-9.05C.83 8.6 2.3 5 5.6 5c1.86 0 3.27 1 4.4 2.5C11.13 6 12.54 5 14.4 5c3.3 0 4.77 3.6 3.1 6.95C19.5 16.4 12 21 12 21z"/>',
  'drafting-compass': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>',
  building: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
  'home-modern': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
  'clipboard-check': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>',
  whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" stroke="none"/>',
  'chevron-down': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>',
  'arrow-right': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>',
  check: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>',
  menu: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>',
  location: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',
  phone: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
  mail: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  globe: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>',
  clock: '<circle cx="12" cy="12" r="9" stroke-width="1.5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v5l3 3"/>',
  search: '<circle cx="11" cy="11" r="7" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35"/>',
  user: '<circle cx="12" cy="8" r="4" stroke-width="1.5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 20c0-4 3.5-7 8-7s8 3 8 7"/>',
  home: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
};

/**
 * Render satu ikon SVG.
 * @param {string} name - key dari ICONS
 * @param {string} className - tailwind classes tambahan
 * @param {boolean} filled - jika true, pakai fill alih-alih stroke (untuk whatsapp dsb)
 */
export function renderIcon(name, className = 'w-5 h-5', filled = false) {
  const path = ICONS[name] ?? ICONS['star'];
  const fillAttr = filled ? 'currentColor' : 'none';
  const strokeAttr = filled ? 'none' : 'currentColor';
  return `<svg class="${className}" fill="${fillAttr}" stroke="${strokeAttr}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${path}</svg>`;
}