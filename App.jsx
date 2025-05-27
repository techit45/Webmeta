import React from "react";

function App() {
  return (
    <div className="bg-[#e1bee7] min-h-screen font-kanit">
      {/* Navbar */}
      <nav className="bg-[#7b1fa2] text-white px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">COM-SCI | IT | Cyber | AI</h1>
        <div className="space-x-6">
          <a href="#project" className="hover:underline">โครงงานแนะนำ</a>
          <a href="#learning" className="hover:underline">เส้นทางการเรียนรู้</a>
          <a href="#contact" className="hover:underline">ติดต่อ</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-12 bg-[#7b1fa2] text-white">
        <h2 className="text-4xl font-bold mb-4">สายเทคโนโลยีแห่งอนาคต</h2>
        <p className="text-lg">โปรเจกต์วิเคราะห์ข้อมูล, Cybersecurity, AI-Automation, Web-App ใช้งานจริง</p>
      </section>

      {/* Projects */}
      <section id="project" className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-[#512da8] mb-8">ตัวอย่างโครงงาน</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold mb-2 text-[#7b1fa2]">วิเคราะห์ข้อมูลด้วย Python & AI</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>เรียนรู้การใช้ Python กับ Data Analysis</li>
              <li>ฝึกใช้ AI เพื่อทำนายผล/วิเคราะห์ข้อมูล</li>
              <li>Mini Project: วิเคราะห์ชุดข้อมูลจริง</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold mb-2 text-[#7b1fa2]">Cybersecurity Project</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>สร้างเว็บจริงพร้อมระบบป้องกัน</li>
              <li>ฝึกใช้ Authentication, SSL, 2FA ฯลฯ</li>
              <li>Mini Project: Web Security Challenge</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold mb-2 text-[#7b1fa2]">AI-Automation for Marketing</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>สร้าง Chatbot ด้วย AI</li>
              <li>Workflow Automation สำหรับ Marketing</li>
              <li>Mini Project: Chatbot Demo</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-semibold mb-2 text-[#7b1fa2]">Web-App สำหรับองค์กร</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>ระบบบันทึกเข้า-ออกพนักงาน</li>
              <li>Dashboard & รายงาน</li>
              <li>Mini Project: Staff Attendance App</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section id="learning" className="py-12 px-4 bg-[#f3e5f5]">
        <h3 className="text-2xl font-bold text-[#512da8] mb-6">เส้นทางการเรียนรู้</h3>
        <ol className="list-decimal list-inside text-gray-800 max-w-2xl mx-auto space-y-2">
          <li>เรียนรู้พื้นฐานภาษา Python, HTML/CSS, JavaScript</li>
          <li>เลือกสายงานที่สนใจ (AI, Cybersecurity, Web-App)</li>
          <li>ลงมือทำโปรเจกต์จริง / ส่งประกวด</li>
          <li>นำเสนอผลงาน และเตรียม Portfolio</li>
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-4 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-[#512da8] mb-6">ติดต่อสอบถาม</h3>
        <p className="mb-2 text-gray-700">อาจารย์/ที่ปรึกษา หรือ ชมรมเทคโนโลยี</p>
        <ul className="text-gray-800">
          <li>Email: info@comsci-university.ac.th</li>
          <li>Facebook: <a href="https://facebook.com/comsci" className="text-[#7b1fa2]">COM-SCI Club</a></li>
          <li>Line: @comsci-ai</li>
        </ul>
      </section>
    </div>
  );
}

export default App;