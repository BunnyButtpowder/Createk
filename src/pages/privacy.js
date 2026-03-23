import { initPageAnimations } from '../animations.js';
import { t } from '../i18n/index.js';

export function privacyPage() {
  const html = `
    <!-- Hero -->
    <section class="relative pt-32 pb-12 overflow-hidden">
      <div class="container-custom relative z-10 pt-12">
        <div class="reveal flex items-center justify-center">
          <h1 class="heading-xl text-white mt-4 mb-6">
            ${t('privacy.title')}
          </h1>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-brand-dark pb-20">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto prose-policy reveal">

          <p class="text-brand-gray-light text-base leading-relaxed mb-8">
            ${t('privacy.intro')}
          </p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('privacy.personalInfo.title')}</h3>
          <p class="text-brand-gray-light text-sm leading-relaxed mb-4">${t('privacy.personalInfo.p1')}</p>
          <p class="text-brand-gray-light text-sm leading-relaxed mb-3">${t('privacy.personalInfo.p2')}</p>
          <ul class="list-disc list-inside text-brand-gray-light text-sm leading-relaxed mb-6 space-y-1 ml-2">
            ${t('privacy.personalInfo.exceptions').map(item => `<li>${item}</li>`).join('')}
          </ul>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('privacy.otherInfo.title')}</h3>
          <p class="text-brand-gray-light text-sm leading-relaxed mb-6">${t('privacy.otherInfo.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('privacy.thirdPartyLinks.title')}</h3>
          <p class="text-brand-gray-light text-sm leading-relaxed mb-6">${t('privacy.thirdPartyLinks.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('privacy.children.title')}</h3>
          <p class="text-brand-gray-light text-sm leading-relaxed mb-6">${t('privacy.children.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('privacy.changes.title')}</h3>
          <p class="text-brand-gray-light text-sm leading-relaxed mb-6">${t('privacy.changes.p1')}</p>

          <h3 class="font-heading text-lg uppercase tracking-wider text-white mt-10 mb-4">${t('privacy.contactUs.title')}</h3>
          <p class="text-brand-gray-light text-sm leading-relaxed mb-3">${t('privacy.contactUs.p1')}</p>
          <ul class="list-none text-brand-gray-light text-sm leading-relaxed space-y-1 ml-2">
            <li><strong class="text-white">${t('privacy.contactUs.phoneLabel')}</strong> ${t('contact.anThai.phone')}</li>
            <li><strong class="text-white">${t('privacy.contactUs.addressLabel')}</strong> ${t('contact.anThai.address')}</li>
          </ul>

        </div>
      </div>
    </section>
  `;

  function init() {
    return initPageAnimations();
  }

  return { html, init };
}
