const galleryImages = Array.from({length: 10}, (_, index) =>
  `assets/gallery-${String(index + 1).padStart(2, '0')}.png`
);

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

document.querySelector('.gallery-more').addEventListener('click', () => {
  document.querySelector('#gallery').scrollIntoView({behavior:'smooth', block:'center'});
});
