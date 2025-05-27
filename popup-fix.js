// popup-fix.js (แก้ไขล่าสุด)

document.addEventListener('DOMContentLoaded', function() {
  // เลือก trigger ทั้งหมด
  const triggers = document.querySelectorAll('.popular-majors-trigger');

  triggers.forEach(trigger => {
    // หา popup ที่เกี่ยวข้องกับ trigger นี้
    // จาก HTML ของคุณ, popup เป็น child ของ trigger
    const popup = trigger.querySelector('.popular-majors-popup');

    if (!popup) {
      console.warn('Popup not found for trigger:', trigger);
      return; // ข้าม trigger นี้ถ้าไม่เจอ popup
    }

    // Event listener สำหรับการคลิกที่ trigger
    trigger.addEventListener('click', function(event) {
      event.stopPropagation(); // ป้องกัน event click ไม่ให้กระจายไปยัง document ทันที

      // ตรวจสอบสถานะปัจจุบันของ popup นี้ (แก้ไขชื่อตัวแปร)
      const isOpen = this.classList.contains('open');

      // ปิด popup อื่นๆ ทั้งหมดก่อน
      document.querySelectorAll('.popular-majors-trigger.open').forEach(otherTrigger => {
        if (otherTrigger !== this) {
          otherTrigger.classList.remove('open');
          // console.log('Closed other popup:', otherTrigger);
        }
      });

      // เปิด/ปิด popup ปัจจุบัน
      if (isOpen) {
        this.classList.remove('open');
        // console.log('Popup closed by click:', this);
      } else {
        this.classList.add('open');
        // console.log('Popup opened by click:', this);
      }
    });

    // ป้องกันการปิด popup เมื่อคลิกข้างในตัว popup เอง
    popup.addEventListener('click', function(event) {
      event.stopPropagation(); // หยุด event click ไม่ให้กระจายไปปิด popup
      // console.log('Clicked inside popup, propagation stopped.');
    });
  });

  // Event listener สำหรับการคลิกที่ใดๆ บน document เพื่อปิด popup ที่เปิดอยู่
  document.addEventListener('click', function(event) {
    const openTriggers = document.querySelectorAll('.popular-majors-trigger.open');

    openTriggers.forEach(openTrigger => {
      // ไม่จำเป็นต้องหา popup อีกครั้ง เพราะเราจะปิด trigger โดยตรง
      // และ CSS จะจัดการซ่อน popup ที่เป็น child
      // ตรวจสอบว่าการคลิกไม่ได้เกิดขึ้นที่ตัว trigger ที่เปิดอยู่
      // (การคลิกภายใน popup ถูกจัดการโดย stopPropagation ใน popup เองแล้ว)
      if (!openTrigger.contains(event.target)) {
        openTrigger.classList.remove('open');
        // console.log('Popup closed by click outside:', openTrigger);
      }
    });
  });

  // ส่วนของ Hover:
  // แนะนำให้ใช้ CSS :hover เป็นหลักสำหรับการแสดงผลบน Desktop
  // เช่น .popular-majors-trigger:hover .popular-majors-popup { display: block; }
  // JavaScript ส่วนนี้จะเน้นการทำงานเมื่อคลิก
  // หากต้องการให้ popup ค้างเมื่อเอาเมาส์ออกจาก trigger ไปยัง popup (สำหรับ hover)
  // อาจจะต้องใช้ logic ที่ซับซ้อนขึ้นเล็กน้อย หรือปรับ CSS ให้รองรับ
  // แต่สำหรับการคลิก โค้ดด้านบนควรจะเพียงพอ

});
