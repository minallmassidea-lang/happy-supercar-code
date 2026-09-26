const galleryImages = [
  'assets/gallery-01.png?v=hires-1', 'assets/gallery-05.png?v=hires-1', 'assets/gallery-09.png?v=hires-1', 'assets/gallery-04.png?v=hires-1', 'assets/gallery-10.png?v=hires-1',
  'assets/gallery-02.png?v=hires-1', 'assets/gallery-08.png?v=hires-1', 'assets/gallery-03.png?v=hires-1', 'assets/gallery-06.png?v=hires-1', 'assets/gallery-07.png?v=hires-1',
  'assets/gallery-01.png?v=hires-1', 'assets/gallery-05.png?v=hires-1', 'assets/gallery-09.png?v=hires-1', 'assets/gallery-04.png?v=hires-1', 'assets/gallery-10.png?v=hires-1'
];

const faqItems = [
  ['ประกัน Supercar แตกต่างจากประกันรถทั่วไปอย่างไร?','รถสมรรถนะสูงมีมูลค่า อะไหล่ และกระบวนการซ่อมเฉพาะทาง จึงควรเลือกทุนประกัน เงื่อนไข และศูนย์ซ่อมให้เหมาะกับรถแต่ละคัน'],
  ['ต้องเตรียมเอกสารอะไรบ้างก่อนขอใบเสนอราคา?','ใช้สำเนารายการจดทะเบียนรถ หน้ากรมธรรม์เดิมหรือใบเตือนต่ออายุ และข้อมูลติดต่อเบื้องต้น เพื่อให้ผู้เชี่ยวชาญตรวจสอบและเปรียบเทียบได้แม่นยำ'],
  ['เลือกซ่อมห้างหรืออู่เฉพาะทางได้หรือไม่?','สามารถพิจารณาแผนที่รองรับศูนย์หรืออู่เฉพาะทางได้ โดยขึ้นอยู่กับรุ่นรถ บริษัทประกัน และเงื่อนไขของแต่ละกรมธรรม์'],
  ['อุปกรณ์ตกแต่งนอกโรงงานคุ้มครองหรือไม่?','ควรแจ้งรายการและมูลค่าอุปกรณ์เพิ่มเติมตั้งแต่ขอใบเสนอราคา เพื่อพิจารณาระบุความคุ้มครองไว้ในกรมธรรม์'],
  ['ต้องตรวจสภาพรถก่อนเริ่มความคุ้มครองหรือไม่?','บางกรณีบริษัทประกันอาจขอตรวจสภาพหรือภาพถ่ายรถ ผู้เชี่ยวชาญจะแจ้งขั้นตอนที่จำเป็นให้ทราบล่วงหน้า'],
  ['เมื่อเกิดเหตุหรือต้องการเคลม ควรทำอย่างไร?','ติดต่อผู้เชี่ยวชาญหรือสายด่วนบริษัทประกันทันที เก็บภาพและข้อมูลคู่กรณี แล้วรอคำแนะนำก่อนเคลื่อนย้ายหรือซ่อมรถ'],
  ['สามารถชำระเบี้ยประกันผ่านช่องทางใดได้บ้าง?','ช่องทางชำระขึ้นอยู่กับบริษัทประกัน เช่น โอนเงิน บัตรเครดิต หรือแบ่งชำระตามเงื่อนไขที่กำหนด']
];

const gallery = document.querySelector('#gallery');
galleryImages.forEach((src, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('aria-label', `เปิดภาพที่ ${index + 1}`);
  button.innerHTML = `<img src="${src}" alt="ภาพการดูแลลูกค้า ${index + 1}" loading="lazy">`;
  button.addEventListener('click', () => openLightbox(src));
  gallery.appendChild(button);
});

const accordion = document.querySelector('#accordion');
faqItems.forEach(([question, answer]) => {
  const item = document.createElement('article');
  item.className = 'faq-item';
  item.innerHTML = `<button class="faq-question" type="button" aria-expanded="false"><span>${question}</span><b>+</b></button><div class="faq-answer"><p>${answer}</p></div>`;
  item.querySelector('button').addEventListener('click', () => {
    const open = item.classList.toggle('open');
    item.querySelector('button').setAttribute('aria-expanded', String(open));
  });
  accordion.appendChild(item);
});

const lightbox = document.querySelector('#lightbox');
function openLightbox(src){ lightbox.querySelector('img').src = src; lightbox.showModal(); }
lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if(event.target === lightbox) lightbox.close(); });

const galleryDialog = document.querySelector('#gallery-dialog');
const galleryDialogGrid = document.querySelector('#gallery-dialog-grid');
const galleryDialogImages = [
  'assets/gallery-01.png?v=hires-1', 'assets/gallery-05.png?v=hires-1', 'assets/gallery-09.png?v=hires-1', 'assets/gallery-04.png?v=hires-1', 'assets/gallery-10.png?v=hires-1',
  'assets/gallery-06.png?v=hires-1', 'assets/gallery-02.png?v=hires-1', 'assets/gallery-08.png?v=hires-1', 'assets/gallery-07.png?v=hires-1', 'assets/gallery-03.png?v=hires-1',
  'assets/gallery-01.png?v=hires-1', 'assets/gallery-05.png?v=hires-1', 'assets/gallery-09.png?v=hires-1', 'assets/gallery-04.png?v=hires-1', 'assets/gallery-10.png?v=hires-1'
];

galleryDialogImages.forEach((src, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `gallery-dialog-image image-${index + 1}`;
  button.setAttribute('aria-label', `เปิดภาพขยายที่ ${index + 1}`);
  button.innerHTML = `<img src="${src}" alt="ภาพการดูแลลูกค้า ${index + 1}" loading="lazy">`;
  button.addEventListener('click', () => {
    galleryDialog.close();
    openLightbox(src);
  });
  galleryDialogGrid.appendChild(button);
});

galleryDialog.querySelector('.gallery-dialog-close').addEventListener('click', () => galleryDialog.close());
galleryDialog.addEventListener('click', event => {
  if (event.target === galleryDialog) galleryDialog.close();
});

const reviewCards = Array.from(document.querySelectorAll('.review-stack .review-card'));
let reviewAnimating = false;
function promoteReviewCard(card) {
  if (reviewAnimating || card.classList.contains('review-card-featured')) return;
  reviewAnimating = true;

  const stack = card.closest('.review-stack');
  const firstRects = new Map(reviewCards.map(item => [item, item.getBoundingClientRect()]));
  const newSlot = card.classList.contains('review-card-top') ? 'review-card-top' : 'review-card-bottom';
  const currentFeatured = document.querySelector('.review-stack .review-card-featured');

  currentFeatured.classList.remove('review-card-featured');
  currentFeatured.classList.add('review-card-back', newSlot);
  currentFeatured.setAttribute('aria-pressed', 'false');

  card.classList.remove('review-card-back', 'review-card-top', 'review-card-bottom');
  card.classList.add('review-card-featured');
  card.setAttribute('aria-pressed', 'true');

  // FLIP animation: apply the new layout, then animate each card from its old
  // on-screen rectangle so the cards glide between positions instead of jump.
  reviewCards.forEach(item => {
    const first = firstRects.get(item);
    const last = item.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const sx = first.width / last.width;
    const sy = first.height / last.height;
    item.style.transition = 'none';
    item.style.transformOrigin = 'top left';
    item.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
  });

  // Force the inverted transforms to render before animating them away.
  stack.offsetWidth;
  const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 560;
  reviewCards.forEach(item => {
    item.style.transition = `transform ${duration}ms cubic-bezier(.2,.78,.25,1), opacity .4s ease, background .4s ease, color .4s ease, box-shadow .4s ease`;
    item.style.transform = '';
    window.setTimeout(() => {
      item.style.transition = '';
      item.style.transformOrigin = '';
    }, duration + 60);
  });
  window.setTimeout(() => { reviewAnimating = false; }, duration + 80);
}

reviewCards.forEach(card => {
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-pressed', String(card.classList.contains('review-card-featured')));
  card.addEventListener('click', () => promoteReviewCard(card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      promoteReviewCard(card);
    }
  });
});

document.querySelector('.gallery-more').addEventListener('click', () => {
  galleryDialog.showModal();
});
