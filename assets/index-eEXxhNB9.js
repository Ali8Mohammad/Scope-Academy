(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const p={year:new Date().getFullYear(),specialtiesInitialVisible:6},y=[{id:"graphic-design",name:"التصميم الغرافيكي",trainersCount:4,image:"./../../../public/assets/card1.jpg"},{id:"mobile-development",name:"تطوير تطبيقات الموبايل",trainersCount:4,image:"./../../../public/assets/card2.jpg"},{id:"web-development",name:"تطوير الويب",trainersCount:4,image:"./../../../public/assets/card3.jpg"},{id:"ui-ux-design",name:"تصميم واجهات المستخدم",trainersCount:4,image:"./../../../public/assets/card4.jpg"},{id:"data-analysis",name:"تحليل البيانات",trainersCount:3,image:"./../../../public/assets/card5.jpg"},{id:"cyber-security",name:"الأمن السيبراني",trainersCount:4,image:"./../../../public/assets/card6.jpg"},{id:"digital-marketing",name:"التسويق الرقمي",trainersCount:3,image:"./../../../public/assets/card7.jpg"},{id:"artificial-intelligence",name:"الذكاء الاصطناعي",trainersCount:4,image:"./../../../public/assets/card8.jpg"},{id:"project-management",name:"إدارة المشاريع",trainersCount:3,image:"./../../../public/assets/card9.jpg"}],m=[{id:"sara-ahmad",name:"سارة أحمد",specialty:"التصميم الغرافيكي",professionalTitle:"مصممة غرافيك أولى",biography:"خبرة واسعة في بناء الهويات البصرية والمواد التسويقية للعلامات الناشئة والمؤسسات.",skills:["الهوية البصرية","Adobe Suite","تصميم مطبوعات","اتجاه فني"],qualifications:[{title:"شهادة تصميم احترافي",description:"مسار متقدم في التصميم",year:"2022"},{title:"دبلوم فنون رقمية",description:"وصف مختصر للشهادة",year:"2021"}],image:"/assets/card1.jpg"},{id:"samer-ahmad",name:"سامر أحمد",specialty:"تطوير الويب",professionalTitle:"مهندس برمجيات بخبرة أكثر من 5 سنين",biography:"متخصص في بناء تطبيقات الويب الحديثة، وتطوير واجهات المستخدم، وحل المشكلات التقنية ضمن فرق متعددة التخصصات.",skills:["JavaScript","React","Node.js","Architecture"],qualifications:[{title:"المؤهلات والشهادات",description:"وصف مختصر للشهادة",year:"2023"},{title:"المؤهلات والشهادات",description:"وصف مختصر للشهادة",year:"2022"},{title:"المؤهلات والشهادات",description:"وصف مختصر للشهادة",year:"2021"}],image:"/assets/card3.jpg"},{id:"ammar-mohammad",name:"عمار محمد",specialty:"UI UX",professionalTitle:"مصمم واجهات مستخدم",biography:"يركّز على تجربة المستخدم، النماذج الأولية، وتحويل المتطلبات إلى واجهات واضحة وسهلة الاستخدام.",skills:["Figma","Prototyping","User Research","Design Systems"],qualifications:[{title:"شهادة UX",description:"وصف مختصر للشهادة",year:"2023"},{title:"شهادة UI",description:"وصف مختصر للشهادة",year:"2022"}],image:"/assets/card4.jpg"},{id:"amer-saeed",name:"عامر سعيد",specialty:"تطوير الويب",professionalTitle:"مهندس رئيسي أول بأكثر من 5 سنوات خبرة",biography:"خبرة في التقنيات الحديثة لتطوير الويب وواجهات المستخدم وحل المشكلات التقنية داخل فرق متعددة التخصصات.",skills:["مهارة 1","مهارة 2","مهارة 3","مهارة 4"],qualifications:[{title:"المؤهلات والشهادات",description:"وصف مختصر للشهادة",year:"2023"},{title:"المؤهلات والشهادات",description:"وصف مختصر للشهادة",year:"2023"},{title:"المؤهلات والشهادات",description:"وصف مختصر للشهادة",year:"2023"}],image:"/assets/card2.jpg"},{id:"control-trainer",name:"خالد يوسف",specialty:"تحكم آلي",professionalTitle:"مهندس أنظمة تحكم",biography:"يقدّم مسارات عملية في الأتمتة وأنظمة التحكم الصناعية.",skills:["PLC","SCADA","Instrumentation"],qualifications:[{title:"شهادة أتمتة",description:"وصف مختصر للشهادة",year:"2022"}],image:"/assets/card6.jpg"}],g=[{id:"company-1",name:"Company 1",tag:"تدريب مهني",description:"وصف تفصيلي للشراكة والتعاون في مجالات التدريب المتخصص والتطوير المهني المستمر.",image:"./../../../public/assets/card5.jpg"},{id:"company-2",name:"Company 2",tag:"تدريب مهني",description:"شراكة استراتيجية لدعم المسارات التقنية وربط الخريجين بفرص سوق العمل.",image:"./../../../public/assets/card7.jpg"},{id:"company-3",name:"Company 3",tag:"تدريب مهني",description:"تعاون في برامج التطوير المستمر وورش العمل المتخصصة للفرق المؤسسية.",image:"./../../../public/assets/card9.jpg"}],_=[{id:"vision",title:"رؤيتنا",icon:"fa-bullseye",body:"أن نكون الإطار الرائد لتطوير المهارات المهنية وفق المعايير العالمية، وسد الفجوة بين التعلم الأكاديمي ومتطلبات سوق العمل."},{id:"mission",title:"رسالتنا",icon:"fa-flag",body:"نبني مسارات تعليمية عالية الجودة تُسرّع من الإتقان المهني، من خلال مسارات تقنية متخصصة، نوفر للأفراد والمؤسسات قدرات متميزة."},{id:"strengths",title:"نقاط القوة",icon:"fa-shield-halved",body:"تدريب عملي، مدربون معتمدون، محتوى محدّث باستمرار، وشراكات مع شركات ومنظمات تدعم التوظيف والنمو المهني."}],b=[{id:"q1",question:"كيف أسجّل في تخصص تدريبي؟",answer:"يمكنك إرسال استفسار عبر نموذج التواصل، وسيتواصل معك فريق القبول لتوضيح المسار والمتطلبات وخطوات التسجيل."},{id:"q2",question:"هل الشهادات معتمدة؟",answer:"نعم، نقدّم شهادات معتمدة ضمن مساراتنا التدريبية وفق معايير الجودة المعتمدة في المنصة."},{id:"q3",question:"هل التدريب حضوري أم عن بُعد؟",answer:"تختلف الصيغة حسب التخصص؛ بعض المسارات حضورية في اللاذقية وبعضها هجين أو عن بُعد."},{id:"q4",question:"كيف أتواصل مع مشرف التخصص؟",answer:"من بطاقة التخصص اضغط «تواصل مع المشرف»، أو استخدم نموذج التواصل مع ذكر اسم التخصص في الرسالة."}];function v(t){const e=document.createElement("article");return e.className="specialty-card",e.dataset.reveal="card",e.innerHTML=`
    <div class="specialty-card__image-wrapper">
      <img
        class="specialty-card__image"
        src="${t.image}"
        alt="${t.name}"
        loading="lazy"
      />
      <div class="specialty-card__overlay"></div>
      <span class="specialty-card__badge">${t.trainersCount} مدربين</span>
      <h3 class="specialty-card__title"></h3>
    </div>
    <button
      class="specialty-card__button"
      type="button"
      data-specialty-id="${t.id}"
    >
      تواصل مع المشرف
    </button>
  `,e.querySelector(".specialty-card__title").textContent=t.name,e}function h(t){const e=document.createElement("article");return e.className="trainer-card",e.dataset.reveal="card",e.innerHTML=`
    <div class="trainer-card__image-wrapper">
      <img
        class="trainer-card__image"
        src="${t.image}"
        alt="${t.name}"
        loading="lazy"
      />
      <span class="trainer-card__specialty"></span>
    </div>
    <div class="trainer-card__body">
      <h3 class="trainer-card__name"></h3>
      <p class="trainer-card__description"></p>
      <button class="button button--primary trainer-card__button" type="button" data-trainer-id="${t.id}">
        عرض الملف الشخصي
      </button>
    </div>
  `,e.querySelector(".trainer-card__specialty").textContent=t.specialty??"",e.querySelector(".trainer-card__name").textContent=t.name,e.querySelector(".trainer-card__description").textContent=t.professionalTitle??"",e}function q(t){const e=document.createElement("article");return e.className="partner-card",e.dataset.reveal="card",e.innerHTML=`
    <div class="partner-card__image-wrapper">
      <img
        class="partner-card__image"
        src="${t.image}"
        alt="${t.name}"
        loading="lazy"
      />
      <span class="partner-card__tag"></span>
    </div>
    <div class="partner-card__body">
      <h3 class="partner-card__name"></h3>
      <p class="partner-card__description"></p>
    </div>
  `,e.querySelector(".partner-card__tag").textContent=t.tag??"",e.querySelector(".partner-card__name").textContent=t.name,e.querySelector(".partner-card__description").textContent=t.description??"",e}function S(t){const e=document.createElement("article");return e.className="about-card",e.dataset.reveal="card",e.innerHTML=`
    <div class="about-card__icon" aria-hidden="true">
      <i class="fa-solid ${t.icon}"></i>
    </div>
    <h3 class="about-card__title"></h3>
    <p class="about-card__body"></p>
  `,e.querySelector(".about-card__title").textContent=t.title,e.querySelector(".about-card__body").textContent=t.body,e}function C(t){const e=document.createElement("details");return e.className="faq-item",e.dataset.reveal="card",e.innerHTML=`
    <summary class="faq-item__question"></summary>
    <p class="faq-item__answer"></p>
  `,e.querySelector(".faq-item__question").textContent=t.question,e.querySelector(".faq-item__answer").textContent=t.answer,e}function w(){const t=document.querySelector("[data-menu-toggle]"),e=document.querySelector("[data-menu]");if(!t||!e)return;const a=r=>{e.classList.toggle("is-open",r),t.setAttribute("aria-expanded",String(r)),t.setAttribute("aria-label",r?"إغلاق القائمة":"فتح القائمة")};t.addEventListener("click",()=>a(!e.classList.contains("is-open"))),e.addEventListener("click",r=>{r.target.closest("a")&&a(!1)}),window.addEventListener("resize",()=>{window.innerWidth>1024&&a(!1)})}function E(){const t=document.querySelector("[data-contact-form]"),e=document.querySelector("[data-form-status]");!t||!e||t.addEventListener("submit",a=>{a.preventDefault();let r=!0;["name","phone","message"].forEach(i=>{const n=t.elements[i],s=t.querySelector(`[data-error-for="${i}"]`),o=!String(n.value).trim();s.textContent=o?"هذا الحقل مطلوب.":"",n.setAttribute("aria-invalid",String(o)),r&&=!o}),e.textContent=r?"تم التحقق من البيانات بنجاح.":"يرجى مراجعة الحقول المطلوبة."})}const L="cubic-bezier(0.22, 1, 0.36, 1)";function x(){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(k(),t){document.querySelectorAll("[data-reveal]").forEach(e=>e.classList.add("is-visible"));return}$(),j()}function k(){const t=document.querySelector("[data-scroll-progress]");if(!t)return;const e=()=>{const a=document.documentElement.scrollHeight-window.innerHeight,r=a>0?window.scrollY/a:0;t.style.transform=`scaleX(${r})`};e(),window.addEventListener("scroll",e,{passive:!0})}function $(){const t=[...document.querySelectorAll("[data-reveal]")];if(!t.length)return;const e=new IntersectionObserver(a=>{a.forEach(r=>{if(!r.isIntersecting)return;const i=r.target,n=Number(i.dataset.revealDelay||0);i.style.transitionDelay=`${n}ms`,i.classList.add("is-visible"),e.unobserve(i)})},{threshold:.16,rootMargin:"0px 0px -8% 0px"});t.forEach((a,r)=>{a.dataset.reveal==="card"&&!a.dataset.revealDelay&&(a.dataset.revealDelay=String(r%6*70)),e.observe(a)})}function j(){const t=document.querySelector("[data-parallax-hero]"),e=document.querySelector(".hero__content");if(!t)return;let a=!1;const r=()=>{a||(a=!0,requestAnimationFrame(()=>{const i=window.scrollY,n=document.querySelector(".hero"),s=n?n.offsetHeight:window.innerHeight;if(i<s){const o=i/s;t.style.transform=`scale(${1.08+o*.08}) translate3d(0, ${o*12}%, 0)`,e&&(e.style.opacity=String(1-o*1.15),e.style.transform=`translate3d(0, ${o*-40}px, 0)`)}a=!1}))};t.style.transition=`transform 80ms ${L}`,r(),window.addEventListener("scroll",r,{passive:!0})}function T(t=document){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=[...t.querySelectorAll("[data-reveal]:not(.is-visible)")];if(e){a.forEach(i=>i.classList.add("is-visible"));return}const r=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),r.unobserve(n.target))})},{threshold:.12});a.forEach(i=>r.observe(i))}function A(){const t=document.querySelector("[data-trainers-list]"),e=document.querySelector(".trainers__viewport"),a=document.querySelector("[data-trainers-prev]"),r=document.querySelector("[data-trainers-next]");if(!t||!e||!a||!r)return;const i=n=>{const s=t.querySelector(".trainer-card"),o=s?s.getBoundingClientRect().width+24:320;e.scrollBy({left:n*o*-1,behavior:"smooth"})};a.addEventListener("click",()=>i(1)),r.addEventListener("click",()=>i(-1))}function I(t){const e=document.querySelector("[data-trainer-modal]"),a=document.querySelector("[data-modal-content]"),r=document.querySelector("[data-modal-close]");if(!e||!a||!r)return;const i=n=>{a.innerHTML=`
      <div class="trainer-modal__media">
        <img src="${n.image}" alt="${n.name}" />
      </div>
      <div class="trainer-modal__info">
        <span class="trainer-modal__badge"></span>
        <h3 class="trainer-modal__name"></h3>
        <p class="trainer-modal__title"></p>
        <p class="trainer-modal__bio"></p>
        <h4>المهارات</h4>
        <ul class="trainer-modal__skills"></ul>
        <h4>المؤهلات والشهادات</h4>
        <ul class="trainer-modal__quals"></ul>
        <div class="trainer-modal__social" aria-label="حسابات المدرب">
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <button class="button button--primary trainer-modal__back" type="button" data-modal-close>رجوع</button>
    `,a.querySelector(".trainer-modal__badge").textContent=n.specialty,a.querySelector(".trainer-modal__name").textContent=n.name,a.querySelector(".trainer-modal__title").textContent=n.professionalTitle,a.querySelector(".trainer-modal__bio").textContent=n.biography;const s=a.querySelector(".trainer-modal__skills");(n.skills||[]).forEach(c=>{const l=document.createElement("li");l.textContent=c,s.appendChild(l)});const o=a.querySelector(".trainer-modal__quals");(n.qualifications||[]).forEach(c=>{const l=document.createElement("li");l.innerHTML="<strong></strong><span></span><em></em>",l.querySelector("strong").textContent=c.title,l.querySelector("span").textContent=c.description,l.querySelector("em").textContent=c.year,o.appendChild(l)}),a.querySelectorAll("[data-modal-close]").forEach(c=>{c.addEventListener("click",()=>e.close())}),typeof e.showModal=="function"&&e.showModal()};document.addEventListener("click",n=>{const s=n.target.closest("[data-trainer-id]");if(!s)return;const o=t.find(c=>c.id===s.dataset.trainerId);o&&i(o)}),r.addEventListener("click",()=>e.close()),e.addEventListener("click",n=>{n.target===e&&e.close()})}function M(t){const e=document.querySelector("[data-specialties-list]"),a=document.querySelector("[data-specialties-more]");if(!e||!a)return;let r=!1;const i=p.specialtiesInitialVisible,n=()=>{const s=r?t:t.slice(0,i);e.replaceChildren(...s.map(v)),a.textContent=r?"عرض أقل":"عرض المزيد من التخصصات",a.hidden=t.length<=i,T(e)};a.addEventListener("click",()=>{r=!r,n()}),document.addEventListener("click",s=>{const o=s.target.closest("[data-specialty-id]");if(!o)return;const c=document.querySelector("#contact"),l=document.querySelector("#message"),u=t.find(f=>f.id===o.dataset.specialtyId);l&&u&&(l.value=`أرغب بالتواصل مع مشرف تخصص: ${u.name}`),c?.scrollIntoView({behavior:"smooth"})}),n()}function H(){const t=document.querySelector("[data-faq-list]");t&&t.addEventListener("toggle",e=>{const a=e.target;!(a instanceof HTMLDetailsElement)||!a.open||t.querySelectorAll("details[open]").forEach(r=>{r!==a&&(r.open=!1)})})}function d(t,e,a){const r=document.querySelector(t);r&&r.replaceChildren(...e.map(a))}function N(){M(y),d("[data-trainers-list]",m,h),d("[data-partners-list]",g,q),d("[data-about-list]",_,S),d("[data-faq-list]",b,C);const t=document.querySelector("[data-current-year]");t&&(t.textContent=p.year),w(),E(),A(),I(m),H(),x()}N();
