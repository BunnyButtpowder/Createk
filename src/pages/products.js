import { initPageAnimations, animateImageHover } from '../animations.js';
import { t } from '../i18n/index.js';
import { getRouteParam } from '../router.js';

export const categories = [
    {
      id: 'engine',
      mothers: [
        { id: 'crankshaft', img: '/products/crankshaft.jpg', children: [
          { key: 'crankshaft_wp10', code: 'CK-1001', img: '/products/crankshaft.jpg' },
          { key: 'crankshaft_wp12', code: 'CK-1002', img: '/products/crankshaft.jpg' },
          { key: 'crankshaft_wd615', code: 'CK-1003', img: '/products/crankshaft.jpg' },
        ]},
        { id: 'pistonRing', img: '/products/pistonRing.jpg', children: [
          { key: 'pistonRing_wp10', code: 'CK-1004', img: '/products/pistonRing.jpg' },
          { key: 'pistonRing_wp12', code: 'CK-1005', img: '/products/pistonRing.jpg' },
          { key: 'pistonRing_wd615', code: 'CK-1006', img: '/products/pistonRing.jpg' },
        ]},
        { id: 'gasketSet', img: '/products/gasketSet.jpg', children: [
          { key: 'gasketSet_wp10', code: 'CK-1007', img: '/products/gasketSet.jpg' },
          { key: 'gasketSet_wp12', code: 'CK-1008', img: '/products/gasketSet.jpg' },
          { key: 'gasketSet_wd615', code: 'CK-1009', img: '/products/gasketSet.jpg' },
        ]},
        { id: 'conRodBearing', img: '/products/conRodBearing.jpg', children: [
          { key: 'conRodBearing_wp10', code: 'CK-1010', img: '/products/conRodBearing.jpg' },
          { key: 'conRodBearing_wp12', code: 'CK-1011', img: '/products/conRodBearing.jpg' },
          { key: 'conRodBearing_wd615', code: 'CK-1012', img: '/products/conRodBearing.jpg' },
        ]},
        { id: 'turbocharger', img: '/products/turbocharger.jpg', children: [
          { key: 'turbo_gt35', code: 'CK-1013', img: '/products/turbocharger.jpg' },
          { key: 'turbo_gt40', code: 'CK-1014', img: '/products/turbocharger.jpg' },
          { key: 'turbo_hx50', code: 'CK-1015', img: '/products/turbocharger.jpg' },
        ]},
        { id: 'filters', img: '/products/filters.jpg', children: [
          { key: 'filter_oil', code: 'CK-1016', img: '/products/filters.jpg' },
          { key: 'filter_fuel', code: 'CK-1017', img: '/products/filters.jpg' },
          { key: 'filter_hydraulic', code: 'CK-1018', img: '/products/filters.jpg' },
        ]},
        { id: 'airFilter', img: '/products/airFilter.jpg', children: [
          { key: 'airFilter_primary', code: 'CK-1019', img: '/products/airFilter.jpg' },
          { key: 'airFilter_secondary', code: 'CK-1020', img: '/products/airFilter.jpg' },
          { key: 'airFilter_safety', code: 'CK-1021', img: '/products/airFilter.jpg' },
        ]},
        { id: 'vBelt', img: '/products/vBelt.jpg', children: [
          { key: 'vBelt_fan', code: 'CK-1022', img: '/products/vBelt.jpg' },
          { key: 'vBelt_ac', code: 'CK-1023', img: '/products/vBelt.jpg' },
          { key: 'vBelt_alternator', code: 'CK-1024', img: '/products/vBelt.jpg' },
        ]},
        { id: 'waterPump', img: '/products/waterPump.jpg', children: [
          { key: 'waterPump_wp10', code: 'CK-1025', img: '/products/waterPump.jpg' },
          { key: 'waterPump_wp12', code: 'CK-1026', img: '/products/waterPump.jpg' },
          { key: 'waterPump_wd615', code: 'CK-1027', img: '/products/waterPump.jpg' },
        ]},
        { id: 'cylinderKit', img: '/products/cylinderKit.png', children: [
          { key: 'cylinderKit_wp10', code: 'CK-1028', img: '/products/cylinderKit.png' },
          { key: 'cylinderKit_wp12', code: 'CK-1029', img: '/products/cylinderKit.png' },
          { key: 'cylinderKit_wd615', code: 'CK-1030', img: '/products/cylinderKit.png' },
        ]},
        { id: 'flywheel', img: '/products/flywheel.jpg', children: [
          { key: 'flywheel_wp10', code: 'CK-1031', img: '/products/flywheel.jpg' },
          { key: 'flywheel_wp12', code: 'CK-1032', img: '/products/flywheel.jpg' },
          { key: 'flywheel_wd615', code: 'CK-1033', img: '/products/flywheel.jpg' },
        ]},
        { id: 'handPump', img: '/products/handPump.jpg', children: [
          { key: 'handPump_wp10', code: 'CK-1034', img: '/products/handPump.jpg' },
          { key: 'handPump_bosch', code: 'CK-1035', img: '/products/handPump.jpg' },
          { key: 'handPump_universal', code: 'CK-1036', img: '/products/handPump.jpg' },
        ]},
        { id: 'oilSeal', img: '/products/oilSeal.jpg', children: [
          { key: 'oilSeal_front', code: 'CK-1037', img: '/products/oilSeal.jpg' },
          { key: 'oilSeal_rear', code: 'CK-1038', img: '/products/oilSeal.jpg' },
          { key: 'oilSeal_camshaft', code: 'CK-1039', img: '/products/oilSeal.jpg' },
        ]},
        { id: 'coolantReservoir', img: '/products/coolantReservoir.png', children: [
            { key: 'coolantRes_howo', code: 'CK-1040', img: '/products/coolantReservoir.png' },
          { key: 'coolantRes_shacman', code: 'CK-1041', img: '/products/coolantReservoir.png' },
          { key: 'coolantRes_dongfeng', code: 'CK-1042', img: '/products/coolantReservoir.png' },
        ]},
      ],
    },
    {
      id: 'chassis',
      mothers: [
        { id: 'springPin', img: '/products/springPin.jpg', children: [
          { key: 'springPin_front', code: 'CK-2001', img: '/products/springPin.jpg' },
          { key: 'springPin_rear', code: 'CK-2002', img: '/products/springPin.jpg' },
          { key: 'springPin_hd', code: 'CK-2003', img: '/products/springPin.jpg' },
        ]},
        { id: 'shackleBushing', img: '/products/shackleBushing.jpg', children: [
          { key: 'shackleBush_front', code: 'CK-2004', img: '/products/shackleBushing.jpg' },
          { key: 'shackleBush_rear', code: 'CK-2005', img: '/products/shackleBushing.jpg' },
          { key: 'shackleBush_hd', code: 'CK-2006', img: '/products/shackleBushing.jpg' },
        ]},
        { id: 'springBushing', img: '/products/springBushing.png', children: [
          { key: 'springBush_front', code: 'CK-2007', img: '/products/springBushing.png' },
          { key: 'springBush_rear', code: 'CK-2008', img: '/products/springBushing.png' },
          { key: 'springBush_hd', code: 'CK-2009', img: '/products/springBushing.png' },
        ]},
        { id: 'rearHub', img: '/products/rearHub.png', children: [
          { key: 'rearHub_howo', code: 'CK-2010', img: '/products/rearHub.png' },
          { key: 'rearHub_shacman', code: 'CK-2011', img: '/products/rearHub.png' },
          { key: 'rearHub_dongfeng', code: 'CK-2012', img: '/products/rearHub.png' },
        ]},
        { id: 'bearings', img: '/products/bearings.jpg', children: [
          { key: 'bearing_wheel', code: 'CK-2013', img: '/products/bearings.jpg' },
          { key: 'bearing_diff', code: 'CK-2014', img: '/products/bearings.jpg' },
          { key: 'bearing_transmission', code: 'CK-2015', img: '/products/bearings.jpg' },
        ]},
        { id: 'centerBearingRubber', img: '/products/centerBearingRubber.jpg', children: [
          { key: 'centerBearing_howo', code: 'CK-2016', img: '/products/centerBearingRubber.jpg' },
          { key: 'centerBearing_shacman', code: 'CK-2017', img: '/products/centerBearingRubber.jpg' },
          { key: 'centerBearing_faw', code: 'CK-2018', img: '/products/centerBearingRubber.jpg' },
        ]},
        { id: 'clutchDisc', img: '/products/clutchDisc.jpg', children: [
          { key: 'clutchDisc_380', code: 'CK-2019', img: '/products/clutchDisc.jpg' },
          { key: 'clutchDisc_420', code: 'CK-2020', img: '/products/clutchDisc.jpg' },
          { key: 'clutchDisc_430', code: 'CK-2021', img: '/products/clutchDisc.jpg' },
        ]},
        { id: 'clutchSlaveCylinder', img: '/products/clutchSlaveCylinder.png', children: [
          { key: 'clutchSlave_howo', code: 'CK-2022', img: '/products/clutchSlaveCylinder.png' },
          { key: 'clutchSlave_shacman', code: 'CK-2023', img: '/products/clutchSlaveCylinder.png' },
          { key: 'clutchSlave_dongfeng', code: 'CK-2024', img: '/products/clutchSlaveCylinder.png' },
        ]},
        { id: 'clutchMasterCylinder', img: '/products/clutchMasterCylinder.jpg', children: [
          { key: 'clutchMaster_howo', code: 'CK-2025', img: '/products/clutchMasterCylinder.jpg' },
          { key: 'clutchMaster_shacman', code: 'CK-2026', img: '/products/clutchMasterCylinder.jpg' },
          { key: 'clutchMaster_dongfeng', code: 'CK-2027', img: '/products/clutchMasterCylinder.jpg' },
        ]},
        { id: 'universalJoint', img: '/products/universalJoint.jpg', children: [
          { key: 'uJoint_57', code: 'CK-2028', img: '/products/universalJoint.jpg' },
          { key: 'uJoint_62', code: 'CK-2029', img: '/products/universalJoint.jpg' },
          { key: 'uJoint_67', code: 'CK-2030', img: '/products/universalJoint.jpg' },
        ]},
        { id: 'pressurePlate', img: '/products/pressurePlate.jpg', children: [
          { key: 'pressPlate_380', code: 'CK-2031', img: '/products/pressurePlate.jpg' },
          { key: 'pressPlate_420', code: 'CK-2032', img: '/products/pressurePlate.jpg' },
          { key: 'pressPlate_430', code: 'CK-2033', img: '/products/pressurePlate.jpg' },
        ]},
        { id: 'clamp', img: '/products/clamp.jpg', children: [
          { key: 'clamp_exhaust', code: 'CK-2034', img: '/products/clamp.jpg' },
          { key: 'clamp_hose', code: 'CK-2035', img: '/products/clamp.jpg' },
          { key: 'clamp_uBolt', code: 'CK-2036', img: '/products/clamp.jpg' },
        ]},
        { id: 'driveShaft', img: '/products/driveShaft.jpg', children: [
          { key: 'driveShaft_front', code: 'CK-2037', img: '/products/driveShaft.jpg' },
          { key: 'driveShaft_rear', code: 'CK-2038', img: '/products/driveShaft.jpg' },
          { key: 'driveShaft_inter', code: 'CK-2039', img: '/products/driveShaft.jpg' },
        ]},
        { id: 'shockAbsorber', img: '/products/shockAbsorber.jpg', children: [
          { key: 'shock_front', code: 'CK-2040', img: '/products/shockAbsorber.jpg' },
          { key: 'shock_rear', code: 'CK-2041', img: '/products/shockAbsorber.jpg' },
          { key: 'shock_hd', code: 'CK-2042', img: '/products/shockAbsorber.jpg' },
        ]},
      ],
    },
    {
      id: 'brake',
      mothers: [
        { id: 'springBrakeChamber', img: '/products/springBrakeChamber.png', children: [
          { key: 'springBrake_t2430', code: 'CK-3001', img: '/products/springBrakeChamber.png' },
          { key: 'springBrake_t3030', code: 'CK-3002', img: '/products/springBrakeChamber.png' },
          { key: 'springBrake_t2424', code: 'CK-3003', img: '/products/springBrakeChamber.png' },
        ]},
        { id: 'brakeChamber', img: '/products/brakeChamber.png', children: [
          { key: 'brakeCh_t20', code: 'CK-3004', img: '/products/brakeChamber.png' },
          { key: 'brakeCh_t24', code: 'CK-3005', img: '/products/brakeChamber.png' },
          { key: 'brakeCh_t30', code: 'CK-3006', img: '/products/brakeChamber.png' },
        ]},
        { id: 'brakeAdjuster', img: '/products/brakeAdjuster.jpg', children: [
          { key: 'adjuster_howo', code: 'CK-3007', img: '/products/brakeAdjuster.jpg' },
          { key: 'adjuster_shacman', code: 'CK-3008', img: '/products/brakeAdjuster.jpg' },
          { key: 'adjuster_dongfeng', code: 'CK-3009', img: '/products/brakeAdjuster.jpg' },
        ]},
        { id: 'brakeLining', img: '/products/brakeLining.jpg', children: [
          { key: 'lining_front', code: 'CK-3010', img: '/products/brakeLining.jpg' },
          { key: 'lining_rear', code: 'CK-3011', img: '/products/brakeLining.jpg' },
          { key: 'lining_trailer', code: 'CK-3012', img: '/products/brakeLining.jpg' },
        ]},
        { id: 'parkingBrake', img: '/products/parkingBrake.png', children: [
          { key: 'parking_howo', code: 'CK-3013', img: '/products/parkingBrake.png' },
          { key: 'parking_shacman', code: 'CK-3014', img: '/products/parkingBrake.png' },
          { key: 'parking_dongfeng', code: 'CK-3015', img: '/products/parkingBrake.png' },
        ]},
        { id: 'brakeReturnSpring', img: '/products/brakeReturnSpring.png', children: [
          { key: 'returnSpring_front', code: 'CK-3016', img: '/products/brakeReturnSpring.png' },
          { key: 'returnSpring_rear', code: 'CK-3017', img: '/products/brakeReturnSpring.png' },
          { key: 'returnSpring_kit', code: 'CK-3018', img: '/products/brakeReturnSpring.png' },
        ]},
        { id: 'brakeLiningRivet', img: '/products/brakeLiningRivet.png', children: [
          { key: 'rivet_copper', code: 'CK-3019', img: '/products/brakeLiningRivet.png' },
          { key: 'rivet_aluminum', code: 'CK-3020', img: '/products/brakeLiningRivet.png' },
          { key: 'rivet_steel', code: 'CK-3021', img: '/products/brakeLiningRivet.png' },
        ]},
      ],
    },
    {
      id: 'cabin',
      mothers: [
        { id: 'wiperArm', img: '/products/wiperArm.png', children: [
          { key: 'wiper_left', code: 'CK-4001', img: '/products/wiperArm.png' },
          { key: 'wiper_right', code: 'CK-4002', img: '/products/wiperArm.png' },
          { key: 'wiper_bladeSet', code: 'CK-4003', img: '/products/wiperArm.png' },
        ]},
        { id: 'headlamp', img: '/products/headlamp.png', children: [
          { key: 'headlamp_left', code: 'CK-4004', img: '/products/headlamp.png' },
          { key: 'headlamp_right', code: 'CK-4005', img: '/products/headlamp.png' },
          { key: 'headlamp_led', code: 'CK-4006', img: '/products/headlamp.png' },
        ]},
        { id: 'tailLight', img: '/products/tailLight.png', children: [
          { key: 'tailLight_left', code: 'CK-4007', img: '/products/tailLight.png' },
          { key: 'tailLight_right', code: 'CK-4008', img: '/products/tailLight.png' },
          { key: 'tailLight_led', code: 'CK-4009', img: '/products/tailLight.png' },
        ]},
        { id: 'cabinLock', img: '/products/cabinLock.png', children: [
          { key: 'cabinLock_left', code: 'CK-4010', img: '/products/cabinLock.png' },
          { key: 'cabinLock_right', code: 'CK-4011', img: '/products/cabinLock.png' },
          { key: 'cabinLock_set', code: 'CK-4012', img: '/products/cabinLock.png' },
        ]},
        { id: 'cabinShockAbsorber', img: '/products/cabinShockAbsorber.png', children: [
          { key: 'cabinShock_front', code: 'CK-4013', img: '/products/cabinShockAbsorber.png' },
          { key: 'cabinShock_rear', code: 'CK-4014', img: '/products/cabinShockAbsorber.png' },
          { key: 'cabinShock_hd', code: 'CK-4015', img: '/products/cabinShockAbsorber.png' },
        ]},
        { id: 'cabinTiltCylinder', img: '/products/cabinTiltCylinder.png', children: [
          { key: 'tiltCyl_howo', code: 'CK-4016', img: '/products/cabinTiltCylinder.png' },
          { key: 'tiltCyl_shacman', code: 'CK-4017', img: '/products/cabinTiltCylinder.png' },
          { key: 'tiltCyl_dongfeng', code: 'CK-4018', img: '/products/cabinTiltCylinder.png' },
        ]},
        { id: 'relays', img: '/products/relays.png', children: [
          { key: 'relay_starter', code: 'CK-4022', img: '/products/relays.png' },
          { key: 'relay_headlamp', code: 'CK-4023', img: '/products/relays.png' },
          { key: 'relay_horn', code: 'CK-4024', img: '/products/relays.png' },
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
      <section class="section-dark">
        <div class="container-custom">
          <div class="mb-12 reveal">
            <h2 class="heading-lg text-white mb-4">${t(`products.categories.${cat.id}.title`)}</h2>
            <p class="text-brand-gray-light max-w-2xl">${t(`products.categories.${cat.id}.desc`)}</p>
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
      <div class="absolute inset-0">
        <img src="/banner-product.jpg"
             alt="Auto parts" class="w-full h-full object-cover" />
      </div>
      <div class="container-custom relative z-10 pt-12">
        <div class="reveal">
          <span class="badge-gold mb-4 text-base">${t('products.hero.badge')}</span>
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('products.hero.heading1')}<br/>
            <div class="mt-5"/>
            <span class="text-gradient-gold">${t('products.hero.headingHighlight')}</span>
          </h1>
          <p class="text-white text-lg max-w-xl leading-relaxed">
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
        <h2 class="heading-lg text-white mb-4">${t('products.cta.heading1')} <span class="text-gradient-gold">${t('products.cta.headingHighlight')}</span> 
        <div class="mt-3"/>
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
