import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getRouteParam } from '../router.js';

export const categories = [
    {
      id: 'engine',
      mothers: [
        { id: 'crankshaft', img: '/products/crankshaft.jpg', children: [
          { key: 'crankshaft_wp10', code: 'AT-001.001', img: '/products/crankshaft.jpg' },
          { key: 'crankshaft_wp12', code: 'AT-001.002', img: '/products/crankshaft.jpg' },
          { key: 'crankshaft_wd615', code: 'AT-001.003', img: '/products/crankshaft.jpg' },
        ]},
        { id: 'pistonRing', img: '/products/pistonRing.jpg', children: [
          { key: 'pistonRing_wp10', code: 'AT-001.004', img: '/products/pistonRing.jpg' },
          { key: 'pistonRing_wp12', code: 'AT-001.005', img: '/products/pistonRing.jpg' },
          { key: 'pistonRing_wd615', code: 'AT-001.006', img: '/products/pistonRing.jpg' },
        ]},
        { id: 'gasketSet', img: '/products/gasketSet.jpg', children: [
          { key: 'gasketSet_wp10', code: 'AT-001.007', img: '/products/gasketSet.jpg' },
          { key: 'gasketSet_wp12', code: 'AT-001.008', img: '/products/gasketSet.jpg' },
          { key: 'gasketSet_wd615', code: 'AT-001.009', img: '/products/gasketSet.jpg' },
        ]},
        { id: 'conRodBearing', img: '/products/conRodBearing.jpg', children: [
          { key: 'conRodBearing_wp10', code: 'AT-001.010', img: '/products/conRodBearing.jpg' },
          { key: 'conRodBearing_wp12', code: 'AT-001.011', img: '/products/conRodBearing.jpg' },
          { key: 'conRodBearing_wd615', code: 'AT-001.012', img: '/products/conRodBearing.jpg' },
        ]},
        { id: 'turbocharger', img: '/products/turbocharger.jpg', children: [
          { key: 'turbo_gt35', code: 'AT-001.013', img: '/products/turbocharger.jpg' },
          { key: 'turbo_gt40', code: 'AT-001.014', img: '/products/turbocharger.jpg' },
          { key: 'turbo_hx50', code: 'AT-001.015', img: '/products/turbocharger.jpg' },
        ]},
        { id: 'filters', img: '/products/filters.jpg', children: [
          { key: 'filter_oil', code: 'AT-001.016', img: '/products/filters.jpg' },
          { key: 'filter_fuel', code: 'AT-001.017', img: '/products/filters.jpg' },
          { key: 'filter_hydraulic', code: 'AT-001.018', img: '/products/filters.jpg' },
        ]},
        { id: 'airFilter', img: '/products/airFilter.jpg', children: [
          { key: 'airFilter_primary', code: 'AT-001.019', img: '/products/airFilter.jpg' },
          { key: 'airFilter_secondary', code: 'AT-001.020', img: '/products/airFilter.jpg' },
          { key: 'airFilter_safety', code: 'AT-001.021', img: '/products/airFilter.jpg' },
        ]},
        { id: 'vBelt', img: '/products/vBelt.jpg', children: [
          { key: 'vBelt_fan', code: 'AT-001.022', img: '/products/vBelt.jpg' },
          { key: 'vBelt_ac', code: 'AT-001.023', img: '/products/vBelt.jpg' },
          { key: 'vBelt_alternator', code: 'AT-001.024', img: '/products/vBelt.jpg' },
        ]},
        { id: 'waterPump', img: '/products/waterPump.jpg', children: [
          { key: 'waterPump_wp10', code: 'AT-001.025', img: '/products/waterPump.jpg' },
          { key: 'waterPump_wp12', code: 'AT-001.026', img: '/products/waterPump.jpg' },
          { key: 'waterPump_wd615', code: 'AT-001.027', img: '/products/waterPump.jpg' },
        ]},
        { id: 'cylinderKit', img: '/products/cylinderKit.png', children: [
          { key: 'cylinderKit_wp10', code: 'AT-001.028', img: '/products/cylinderKit.png' },
          { key: 'cylinderKit_wp12', code: 'AT-001.029', img: '/products/cylinderKit.png' },
          { key: 'cylinderKit_wd615', code: 'AT-001.030', img: '/products/cylinderKit.png' },
        ]},
        { id: 'flywheel', img: '/products/flywheel.jpg', children: [
          { key: 'flywheel_wp10', code: 'AT-001.031', img: '/products/flywheel.jpg' },
          { key: 'flywheel_wp12', code: 'AT-001.032', img: '/products/flywheel.jpg' },
          { key: 'flywheel_wd615', code: 'AT-001.033', img: '/products/flywheel.jpg' },
        ]},
        { id: 'handPump', img: '/products/handPump.jpg', children: [
          { key: 'handPump_wp10', code: 'AT-001.034', img: '/products/handPump.jpg' },
          { key: 'handPump_bosch', code: 'AT-001.035', img: '/products/handPump.jpg' },
          { key: 'handPump_universal', code: 'AT-001.036', img: '/products/handPump.jpg' },
        ]},
        { id: 'oilSeal', img: '/products/oilSeal.jpg', children: [
          { key: 'oilSeal_front', code: 'AT-001.037', img: '/products/oilSeal.jpg' },
          { key: 'oilSeal_rear', code: 'AT-001.038', img: '/products/oilSeal.jpg' },
          { key: 'oilSeal_camshaft', code: 'AT-001.039', img: '/products/oilSeal.jpg' },
        ]},
        { id: 'coolantReservoir', img: '/products/coolantReservoir.png', children: [
            { key: 'coolantRes_howo', code: 'AT-001.040', img: '/products/coolantReservoir.png' },
          { key: 'coolantRes_shacman', code: 'AT-001.041', img: '/products/coolantReservoir.png' },
          { key: 'coolantRes_dongfeng', code: 'AT-001.042', img: '/products/coolantReservoir.png' },
        ]},
      ],
    },
    {
      id: 'chassis',
      mothers: [
        { id: 'springPin', img: '/products/springPin.jpg', children: [
          { key: 'springPin_front', code: 'AT-002.001', img: '/products/springPin.jpg' },
          { key: 'springPin_rear', code: 'AT-002.002', img: '/products/springPin.jpg' },
          { key: 'springPin_hd', code: 'AT-002.003', img: '/products/springPin.jpg' },
        ]},
        { id: 'shackleBushing', img: '/products/shackleBushing.jpg', children: [
          { key: 'shackleBush_front', code: 'AT-002.004', img: '/products/shackleBushing.jpg' },
          { key: 'shackleBush_rear', code: 'AT-002.005', img: '/products/shackleBushing.jpg' },
          { key: 'shackleBush_hd', code: 'AT-002.006', img: '/products/shackleBushing.jpg' },
        ]},
        { id: 'springBushing', img: '/products/springBushing.png', children: [
          { key: 'springBush_front', code: 'AT-002.007', img: '/products/springBushing.png' },
          { key: 'springBush_rear', code: 'AT-002.008', img: '/products/springBushing.png' },
          { key: 'springBush_hd', code: 'AT-002.009', img: '/products/springBushing.png' },
        ]},
        { id: 'rearHub', img: '/products/rearHub.png', children: [
          { key: 'rearHub_howo', code: 'AT-002.010', img: '/products/rearHub.png' },
          { key: 'rearHub_shacman', code: 'AT-002.011', img: '/products/rearHub.png' },
          { key: 'rearHub_dongfeng', code: 'AT-002.012', img: '/products/rearHub.png' },
        ]},
        { id: 'bearings', img: '/products/bearings.jpg', children: [
          { key: 'bearing_wheel', code: 'AT-002.013', img: '/products/bearings.jpg' },
          { key: 'bearing_diff', code: 'AT-002.014', img: '/products/bearings.jpg' },
          { key: 'bearing_transmission', code: 'AT-002.015', img: '/products/bearings.jpg' },
        ]},
        { id: 'centerBearingRubber', img: '/products/centerBearingRubber.jpg', children: [
          { key: 'centerBearing_howo', code: 'AT-002.016', img: '/products/centerBearingRubber.jpg' },
          { key: 'centerBearing_shacman', code: 'AT-002.017', img: '/products/centerBearingRubber.jpg' },
          { key: 'centerBearing_faw', code: 'AT-002.018', img: '/products/centerBearingRubber.jpg' },
        ]},
        { id: 'clutchDisc', img: '/products/clutchDisc.jpg', children: [
          { key: 'clutchDisc_380', code: 'AT-002.019', img: '/products/clutchDisc.jpg' },
          { key: 'clutchDisc_420', code: 'AT-002.020', img: '/products/clutchDisc.jpg' },
          { key: 'clutchDisc_430', code: 'AT-002.021', img: '/products/clutchDisc.jpg' },
        ]},
        { id: 'clutchSlaveCylinder', img: '/products/clutchSlaveCylinder.png', children: [
          { key: 'clutchSlave_howo', code: 'AT-002.022', img: '/products/clutchSlaveCylinder.png' },
          { key: 'clutchSlave_shacman', code: 'AT-002.023', img: '/products/clutchSlaveCylinder.png' },
          { key: 'clutchSlave_dongfeng', code: 'AT-002.024', img: '/products/clutchSlaveCylinder.png' },
        ]},
        { id: 'clutchMasterCylinder', img: '/products/clutchMasterCylinder.jpg', children: [
          { key: 'clutchMaster_howo', code: 'AT-002.025', img: '/products/clutchMasterCylinder.jpg' },
          { key: 'clutchMaster_shacman', code: 'AT-002.026', img: '/products/clutchMasterCylinder.jpg' },
          { key: 'clutchMaster_dongfeng', code: 'AT-002.027', img: '/products/clutchMasterCylinder.jpg' },
        ]},
        { id: 'universalJoint', img: '/products/universalJoint.jpg', children: [
          { key: 'uJoint_57', code: 'AT-002.028', img: '/products/universalJoint.jpg' },
          { key: 'uJoint_62', code: 'AT-002.029', img: '/products/universalJoint.jpg' },
          { key: 'uJoint_67', code: 'AT-002.030', img: '/products/universalJoint.jpg' },
        ]},
        { id: 'pressurePlate', img: '/products/pressurePlate.jpg', children: [
          { key: 'pressPlate_380', code: 'AT-002.031', img: '/products/pressurePlate.jpg' },
          { key: 'pressPlate_420', code: 'AT-002.032', img: '/products/pressurePlate.jpg' },
          { key: 'pressPlate_430', code: 'AT-002.033', img: '/products/pressurePlate.jpg' },
        ]},
        { id: 'clamp', img: '/products/clamp.jpg', children: [
          { key: 'clamp_exhaust', code: 'AT-002.034', img: '/products/clamp.jpg' },
          { key: 'clamp_hose', code: 'AT-002.035', img: '/products/clamp.jpg' },
          { key: 'clamp_uBolt', code: 'AT-002.036', img: '/products/clamp.jpg' },
        ]},
        { id: 'driveShaft', img: '/products/driveShaft.jpg', children: [
          { key: 'driveShaft_front', code: 'AT-002.037', img: '/products/driveShaft.jpg' },
          { key: 'driveShaft_rear', code: 'AT-002.038', img: '/products/driveShaft.jpg' },
          { key: 'driveShaft_inter', code: 'AT-002.039', img: '/products/driveShaft.jpg' },
        ]},
        { id: 'shockAbsorber', img: '/products/shockAbsorber.jpg', children: [
          { key: 'shock_front', code: 'AT-002.040', img: '/products/shockAbsorber.jpg' },
          { key: 'shock_rear', code: 'AT-002.041', img: '/products/shockAbsorber.jpg' },
          { key: 'shock_hd', code: 'AT-002.042', img: '/products/shockAbsorber.jpg' },
        ]},
      ],
    },
    {
      id: 'brake',
      mothers: [
        { id: 'springBrakeChamber', img: '/products/springBrakeChamber.png', children: [
          { key: 'springBrake_t2430', code: 'AT-003.001', img: '/products/springBrakeChamber.png' },
          { key: 'springBrake_t3030', code: 'AT-003.002', img: '/products/springBrakeChamber.png' },
          { key: 'springBrake_t2424', code: 'AT-003.003', img: '/products/springBrakeChamber.png' },
        ]},
        { id: 'brakeChamber', img: '/products/brakeChamber.png', children: [
          { key: 'brakeCh_t20', code: 'AT-003.004', img: '/products/brakeChamber.png' },
          { key: 'brakeCh_t24', code: 'AT-003.005', img: '/products/brakeChamber.png' },
          { key: 'brakeCh_t30', code: 'AT-003.006', img: '/products/brakeChamber.png' },
        ]},
        { id: 'brakeAdjuster', img: '/products/brakeAdjuster.jpg', children: [
          { key: 'adjuster_howo', code: 'AT-003.007', img: '/products/brakeAdjuster.jpg' },
          { key: 'adjuster_shacman', code: 'AT-003.008', img: '/products/brakeAdjuster.jpg' },
          { key: 'adjuster_dongfeng', code: 'AT-003.009', img: '/products/brakeAdjuster.jpg' },
        ]},
        { id: 'brakeLining', img: '/products/brakeLining.jpg', children: [
          { key: 'lining_front', code: 'AT-003.010', img: '/products/brakeLining.jpg' },
          { key: 'lining_rear', code: 'AT-003.011', img: '/products/brakeLining.jpg' },
          { key: 'lining_trailer', code: 'AT-003.012', img: '/products/brakeLining.jpg' },
        ]},
        { id: 'parkingBrake', img: '/products/parkingBrake.png', children: [
          { key: 'parking_howo', code: 'AT-003.013', img: '/products/parkingBrake.png' },
          { key: 'parking_shacman', code: 'AT-003.014', img: '/products/parkingBrake.png' },
          { key: 'parking_dongfeng', code: 'AT-003.015', img: '/products/parkingBrake.png' },
        ]},
        { id: 'brakeReturnSpring', img: '/products/brakeReturnSpring.png', children: [
          { key: 'returnSpring_front', code: 'AT-003.016', img: '/products/brakeReturnSpring.png' },
          { key: 'returnSpring_rear', code: 'AT-003.017', img: '/products/brakeReturnSpring.png' },
          { key: 'returnSpring_kit', code: 'AT-003.018', img: '/products/brakeReturnSpring.png' },
        ]},
        { id: 'brakeLiningRivet', img: '/products/brakeLiningRivet.png', children: [
          { key: 'rivet_copper', code: 'AT-003.019', img: '/products/brakeLiningRivet.png' },
          { key: 'rivet_aluminum', code: 'AT-003.020', img: '/products/brakeLiningRivet.png' },
          { key: 'rivet_steel', code: 'AT-003.021', img: '/products/brakeLiningRivet.png' },
        ]},
      ],
    },
    {
      id: 'cabin',
      mothers: [
        { id: 'wiperArm', img: '/products/wiperArm.png', children: [
          { key: 'wiper_left', code: 'AT-004.001', img: '/products/wiperArm.png' },
          { key: 'wiper_right', code: 'AT-004.002', img: '/products/wiperArm.png' },
          { key: 'wiper_bladeSet', code: 'AT-004.003', img: '/products/wiperArm.png' },
        ]},
        { id: 'headlamp', img: '/products/headlamp.png', children: [
          { key: 'headlamp_left', code: 'AT-004.004', img: '/products/headlamp.png' },
          { key: 'headlamp_right', code: 'AT-004.005', img: '/products/headlamp.png' },
          { key: 'headlamp_led', code: 'AT-004.006', img: '/products/headlamp.png' },
        ]},
        { id: 'tailLight', img: '/products/tailLight.png', children: [
          { key: 'tailLight_left', code: 'AT-004.007', img: '/products/tailLight.png' },
          { key: 'tailLight_right', code: 'AT-004.008', img: '/products/tailLight.png' },
          { key: 'tailLight_led', code: 'AT-004.009', img: '/products/tailLight.png' },
        ]},
        { id: 'cabinLock', img: '/products/cabinLock.png', children: [
          { key: 'cabinLock_left', code: 'AT-004.010', img: '/products/cabinLock.png' },
          { key: 'cabinLock_right', code: 'AT-004.011', img: '/products/cabinLock.png' },
          { key: 'cabinLock_set', code: 'AT-004.012', img: '/products/cabinLock.png' },
        ]},
        { id: 'cabinShockAbsorber', img: '/products/cabinShockAbsorber.png', children: [
          { key: 'cabinShock_front', code: 'AT-004.013', img: '/products/cabinShockAbsorber.png' },
          { key: 'cabinShock_rear', code: 'AT-004.014', img: '/products/cabinShockAbsorber.png' },
          { key: 'cabinShock_hd', code: 'AT-004.015', img: '/products/cabinShockAbsorber.png' },
        ]},
        { id: 'cabinTiltCylinder', img: '/products/cabinTiltCylinder.png', children: [
          { key: 'tiltCyl_howo', code: 'AT-004.016', img: '/products/cabinTiltCylinder.png' },
          { key: 'tiltCyl_shacman', code: 'AT-004.017', img: '/products/cabinTiltCylinder.png' },
          { key: 'tiltCyl_dongfeng', code: 'AT-004.018', img: '/products/cabinTiltCylinder.png' },
        ]},
        { id: 'relays', img: '/products/relays.png', children: [
          { key: 'relay_starter', code: 'AT-004.022', img: '/products/relays.png' },
          { key: 'relay_headlamp', code: 'AT-004.023', img: '/products/relays.png' },
          { key: 'relay_horn', code: 'AT-004.024', img: '/products/relays.png' },
        ]},
      ],
    },
];

export function findCategory(catId) {
  return categories.find(c => c.id === catId);
}

export function findMother(catId, motherId) {
  const cat = findCategory(catId);
  return cat ? cat.mothers.find(m => m.id === motherId) : null;
}

export function findChild(catId, motherId, childKey) {
  const mother = findMother(catId, motherId);
  return mother ? mother.children.find(c => c.key === childKey) : null;
}

export function productsPage() {
  // ── State ──
  let activeCategory = 'engine';
  let searchQuery = '';

  // ── Helpers ──
  function getCat() {
    return categories.find(c => c.id === activeCategory);
  }

  function getFilteredMothers() {
    const cat = getCat();
    if (!cat) return [];
    if (!searchQuery.trim()) return cat.mothers;
    const q = searchQuery.trim().toLowerCase();
    return cat.mothers.filter(m => {
      const motherName = t(`products.mothers.${m.id}`).toLowerCase();
      const childNames = m.children.map(c => t(`products.items.${c.key}.name`).toLowerCase()).join(' ');
      return motherName.includes(q) || childNames.includes(q);
    });
  }

  function scrollToContent() {
    const el = document.getElementById('products-content');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      if (window.__lenis) {
        window.__lenis.scrollTo(y);
      } else {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }

  // ── Renderers ──
  function renderMothers() {
    const cat = getCat();
    if (!cat) return '';

    const filtered = getFilteredMothers();
    const pageMothers = filtered;

    return `
      <section class="section-dark py-12">
        <div class="container-custom">
          <div class="mb-12 reveal">
            <h2 class="heading-lg text-white mb-4 text-center md:text-left text-balance leading-relaxed md:leading-tight">${t(`products.categories.${cat.id}.title`)}</h2>
            <p class="text-brand-gray-light text-center md:text-left text-balance">${t(`products.categories.${cat.id}.desc`)}</p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-stagger>
            ${pageMothers.map(m => `
              <div class="card-hover group cursor-pointer" data-mother-id="${m.id}">
                <div class="relative h-52 overflow-hidden img-hover-zoom">
                  <img src="${m.img}" alt="${t(`products.mothers.${m.id}`)}"
                       class="w-full h-full object-cover transition-transform duration-500" />
                </div>
                <div class="p-5">
                  <h3 class="font-heading text-lg uppercase text-white
                             group-hover:text-brand-gold transition-colors">
                    ${t(`products.mothers.${m.id}`)}
                  </h3>
                  <p class="text-brand-gray-light text-xs mt-2">
                    ${m.children.map(c => t(`products.items.${c.key}.name`)).join(', ')}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>

          ${filtered.length === 0 ? `
            <div class="text-center py-16">
              <svg class="w-16 h-16 text-brand-gray-mid/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <p class="text-brand-gray-mid text-lg">${t('products.ui.noResults')}</p>
            </div>
          ` : ''}

        </div>
      </section>
    `;
  }

  function renderContent() {
    const el = document.getElementById('products-content');
    if (!el) return;
    el.innerHTML = renderMothers();

    setTimeout(() => {
      initPageAnimations({ fast: true });
      animateImageHover();
      bindContentEvents();
    }, 50);
  }

  // ── Event Binding ──
  function bindContentEvents() {
    // Click mother product card → navigate to children page
    document.querySelectorAll('[data-mother-id]').forEach(card => {
      card.addEventListener('click', () => {
        const motherId = card.dataset.motherId;
        window.location.hash = `/products/children?cat=${activeCategory}&mother=${motherId}`;
      });
    });
  }

  function updateSearchClear() {
    const clearBtn = document.getElementById('product-search-clear');
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', !searchQuery);
    }
  }

  function updateNavButtons() {
    const navBtns = document.querySelectorAll('.cat-nav-btn');
    navBtns.forEach(btn => {
      if (btn.dataset.category === activeCategory) {
        btn.classList.add('bg-brand-gold', 'text-brand-black');
        btn.classList.remove('text-brand-gray-light');
      } else {
        btn.classList.remove('bg-brand-gold', 'text-brand-black');
        btn.classList.add('text-brand-gray-light');
      }
    });
  }

  // ── Page HTML ──
  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-12 sm:pb-20 overflow-hidden">
      <div class="absolute max-h-[30vh] md:max-h-none inset-0">
        <img src="/banner-product.jpg"
             alt="Auto parts" class="w-full h-full object-cover hidden md:block" />
        <img src="/banner-product-mobile.jpg"
             alt="Auto parts" class="w-full h-full object-cover block md:hidden" />
      </div>
      <div class="container-custom relative z-10 pt-12 mt-32 md:mt-0">
        <div class="reveal mt-5 md:mt-0 text-center md:text-left">
          <span class="badge-gold mb-4 text-base">${t('products.hero.badge')}</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('products.hero.heading1')}<br/>
            <div class="mt-5 lg:mt-8"/>
            <span class="text-gradient-gold">${t('products.hero.headingHighlight')}</span>
          </h1>
          <p class="text-white text-lg max-w-xl leading-relaxed text-balance">
            ${t('products.hero.subtitle')}
          </p>
        </div>
      </div>
    </section>

    <!-- Category Navigation -->
    <section class="sticky top-16 sm:top-20 lg:top-24 z-30 bg-brand-dark/95 backdrop-blur-md border-y border-white/5">
      <div class="container-custom">
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 py-3">
          <div class="flex overflow-x-auto gap-1 scrollbar-hide shrink-0" id="category-nav">
            ${categories.map((cat, i) => `
              <button data-category="${cat.id}"
                      class="cat-nav-btn whitespace-nowrap px-5 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer
                             ${i === 0 ? 'bg-brand-gold text-brand-black' : 'text-brand-gray-light hover:text-white hover:bg-white/5'}">
                ${t(`products.categories.${cat.id}.title`)}
              </button>
            `).join('')}
          </div>

          <div class="relative sm:ml-auto shrink-0">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-mid pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input id="product-search"
                   type="text"
                   placeholder="${t('products.ui.searchPlaceholder')}"
                   class="w-full sm:w-48 lg:w-64 pl-9 pr-8 py-2.5 text-sm rounded-lg bg-white/5 border border-white/10
                          text-white placeholder-brand-gray-mid
                          focus:outline-none focus:border-brand-gold/50 focus:bg-white/10 transition-all" />
            <button id="product-search-clear"
                    class="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-gray-mid hover:text-white transition-colors hidden cursor-pointer">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dynamic Content Area -->
    <div id="products-content"></div>

    <!-- CTA -->
    <section class="section-darker">
      <div class="container-custom text-center reveal">
        <h2 class="heading-lg text-white mb-4 leading-relaxed md:leading-tight">${t('products.cta.heading1')} <span class="text-gradient-gold">${t('products.cta.headingHighlight')}</span> 
        <div class="mt-0 md:mt-3"/>
        ${t('products.cta.heading2')}
        </h2>
        <p class="text-brand-gray-light max-w-xl mx-auto mb-8">
          ${t('products.cta.subtitle')}
        </p>
        <a href="#/contact" class="btn-primary btn-lg text-sm uppercase tracking-widest">
          ${t('products.cta.button')}
        </a>
      </div>
    </section>
  `;

  return {
    html,
    init() {
      // Apply category from URL param (e.g. #/products?cat=chassis)
      const catParam = getRouteParam('cat');
      if (catParam && categories.some(c => c.id === catParam)) {
        activeCategory = catParam;
      }

      initPageAnimations();
      updateNavButtons();

      // Initial content render
      renderContent();

      // Category nav click handling
      const navBtns = document.querySelectorAll('.cat-nav-btn');
      navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          activeCategory = btn.dataset.category;
          searchQuery = '';
          const searchInput = document.getElementById('product-search');
          if (searchInput) searchInput.value = '';
          updateSearchClear();
          updateNavButtons();
          renderContent();
          scrollToContent();
        });
      });

      // Search
      const searchInput = document.getElementById('product-search');
      const clearBtn = document.getElementById('product-search-clear');
      if (searchInput) {
        searchInput.addEventListener('input', () => {
          searchQuery = searchInput.value;
          updateSearchClear();
          renderContent();
        });
      }
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          updateSearchClear();
          renderContent();
        });
      }
    },
  };
}
