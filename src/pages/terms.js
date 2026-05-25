import { initPageAnimations } from '../animations.js';
import { t } from '../i18n/index.js';
import { getLegalContent } from '../api/settings.js';

export function termsPage() {
  const html = `
    <!-- Hero -->
    <section class="relative pt-10 md:pt-22 pb-12 overflow-hidden">
      <div class="container-custom relative z-10 pt-12">
        <div class="reveal flex items-center justify-center">
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('terms.title')}
          </h1>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-brand-dark py-5 md:py-20">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto prose-policy reveal">

          <p class="text-brand-gray-light text-base leading-relaxed mb-8">
            ${t('terms.intro')}
          </p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.changes.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-6">${t('terms.changes.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.trademarks.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-6">${t('terms.trademarks.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.copyright.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-4">${t('terms.copyright.p1')}</p>
          <ol class="list-decimal list-inside text-brand-gray-light text-base leading-relaxed mb-4 space-y-1 ml-2">
            ${t('terms.copyright.conditions').map(item => `<li>${item}</li>`).join('')}
          </ol>
          <p class="text-brand-gray-light text-base leading-relaxed mb-3">${t('terms.copyright.p2')}</p>
          <ul class="list-disc list-inside text-brand-gray-light text-base leading-relaxed mb-6 space-y-1 ml-2">
            ${t('terms.copyright.requirements').map(item => `<li>${item}</li>`).join('')}
          </ul>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.thirdPartyLinks.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-6">${t('terms.thirdPartyLinks.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.conduct.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-3">${t('terms.conduct.p1')}</p>
          <ul class="list-disc list-inside text-brand-gray-light text-base leading-relaxed mb-6 space-y-1 ml-2">
            ${t('terms.conduct.rules').map(item => `<li>${item}</li>`).join('')}
          </ul>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.globalAvailability.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-6">${t('terms.globalAvailability.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.disclaimer.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-6">${t('terms.disclaimer.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.liability.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-6">${t('terms.liability.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.jurisdiction.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-6">${t('terms.jurisdiction.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('terms.contactUs.title')}</h3>
          <p class="text-brand-gray-light text-base leading-relaxed mb-3">${t('terms.contactUs.p1')}</p>
          <ul class="list-none text-brand-gray-light text-base leading-relaxed space-y-1 ml-2">
            <li><strong class="text-white">${t('terms.contactUs.phoneLabel')}</strong> ${t('contact.anThai.phone')}</li>
            <li><strong class="text-white">${t('terms.contactUs.addressLabel')}</strong> ${t('contact.anThai.address')}</li>
          </ul>

        </div>
      </div>
    </section>
  `;

  function init() {
    initPageAnimations();

    // Override with CMS content if available
    getLegalContent('terms').then(content => {
      if (!content) return;
      const el = document.querySelector('.prose-policy');
      if (el) el.innerHTML = content;
    });
  }

  return { html, init };
}
