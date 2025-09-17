<div dir="rtl" style="text-align: right">

<h1>این پروژه یک صفحه وب برای نمایش لیست رمزارزها است که به عنوان بخشی از یک تسک فنی فرانت‌اند توسعه داده شده است.</h1>

<h2>✨ ویژگی‌ها (Features)</h2>
<ul>
  <li>نمایش لیست رمزارزها بر اساس رتبه</li>
  <li>بارگذاری اولیه داده‌ها و نمایش سریع با استفاده از کش</li>
  <li>ذخیره‌سازی داده‌ها در IndexedDB برای پایداری</li>
  <li>به‌روزرسانی دوره‌ای داده‌ها در پس‌زمینه</li>
  <li>طراحی واکنش‌گرا (Responsive) برای دسکتاپ و موبایل</li>
</ul>

<h2>🚀 راهنمای نصب و اجرا (Installation & Run)</h2>
<ol>
  <li><strong>کلون کردن مخزن:</strong><br>
    <pre><code>git clone https://github.com/AlidotSal/task.git
cd task</code></pre>
  </li>
  <li><strong>نصب وابستگی‌ها:</strong><br>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>اجرای پروژه:</strong><br>
    <pre><code>npm run dev</code></pre>
    <p>پروژه روی آدرس <code>http://localhost:3000</code> اجرا خواهد شد.</p>
  </li>
  <li><strong>ساخت پروژه:</strong><br>
    <pre><code>npm run build</code></pre>
  </li>
</ol>

<h2>🏛️ معماری پروژه و دلایل انتخاب‌ها</h2>

<p>این پروژه با هدف ساخت یک برنامه سریع، بهینه و قابل نگهداری (Maintainable) توسعه داده شده است. معماری آن بر پایه ابزارهای مدرن اکوسیستم React شکل گرفته و تلاش شده است تا با کمترین وابستگی‌های خارجی، بهترین نتیجه حاصل شود.</p>

<ul style="direction: rtl; text-align: right;">
  <li dir="rtl">
    <strong><span dir="ltr">Next.js (App Router)</span>:</strong><br>
    به عنوان فریمورک اصلی انتخاب شد زیرا قابلیت‌های فوق‌العاده‌ای مانند رندرینگ سمت سرور (<span dir="ltr">SSR</span>)، بهینه‌سازی خودکار (<span dir="ltr">Code Splitting</span>) و یک ساختار فایل‌محور برای روتینگ ارائه می‌دهد. استفاده از <span dir="ltr">App Router</span> به ما اجازه داد تا از جدیدترین ویژگی‌های <span dir="ltr">React</span> مانند <span dir="ltr">Server Components</span> بهره ببریم که به کاهش حجم باندل جاوااسکریپت در کلاینت و افزایش سرعت بارگذاری اولیه کمک شایانی می‌کند.
  </li>

  <li dir="rtl">
    <strong><span dir="ltr">TanStack Query (React Query)</span>:</strong><br>
    برای مدیریت وضعیت سرور (<span dir="ltr">Server State</span>) و کشینگ داده‌ها انتخاب شد. به جای استفاده از یک <span dir="ltr">State Manager</span> عمومی، این کتابخانه به طور تخصصی برای مدیریت چرخه‌ی عمر داده‌های دریافتی از <span dir="ltr">API</span> (شامل <span dir="ltr">fetching</span>، <span dir="ltr">caching</span>، <span dir="ltr">synchronizing</span> و <span dir="ltr">updating</span>) طراحی شده است. این انتخاب باعث شد تا از نوشتن کدهای تکراری برای مدیریت وضعیت‌های <span dir="ltr">loading</span>، <span dir="ltr">error</span> و <span dir="ltr">data</span> جلوگیری شود و کد نهایی بسیار تمیزتر و خواناتر باشد. قابلیت‌هایی مانند <span dir="ltr">refetchInterval</span> و <span dir="ltr">staleTime</span> به سادگی به ما امکان کنترل کش و به‌روزرسانی داده‌ها را دادند.
  </li>

  <li dir="rtl">
    <strong><span dir="ltr">IndexedDB</span> (با پکیج <span dir="ltr">idb</span>):</strong><br>
    طبق الزامات پروژه، نیاز به ذخیره‌سازی داده‌ها در سمت کاربر وجود داشت. <span dir="ltr">IndexedDB</span> به دلیل قابلیت ذخیره‌سازی حجم بالایی از داده‌های ساختاریافته، بهترین گزینه بود. برای ساده‌سازی کار با API نسبتاً پیچیده‌ی آن، از پکیج سبک و <span dir="ltr">Promise-based</span> <span dir="ltr">idb</span> استفاده شد که کدنویسی را بسیار ساده‌تر و خواناتر کرد.
  </li>

  <li dir="rtl">
    <strong><span dir="ltr">Tailwind CSS</span>:</strong><br>
    این فریمورک <span dir="ltr">Utility-first</span> برای استایل‌دهی انتخاب شد زیرا سرعت توسعه UI را به شدت افزایش می‌دهد و از نوشتن <span dir="ltr">CSS</span> تکراری جلوگیری می‌کند. با استفاده از کامپایلر <span dir="ltr">Just-in-Time (JIT)</span>، تنها کلاس‌های استفاده شده در خروجی نهایی قرار می‌گیرند که منجر به یک فایل <span dir="ltr">CSS</span> بسیار کم‌حجم و بهینه می‌شود. همچنین، پیاده‌سازی طراحی واکنش‌گرا (<span dir="ltr">Responsive Design</span>) با آن بسیار ساده و قابل مدیریت است.
  </li>

  <li dir="rtl">
    <strong>ساختار پروژه و اصول کدنویسی:</strong><br>
    ساختار پوشه‌بندی از الگوی استاندارد پروژه‌های <span dir="ltr">Next.js</span> با <span dir="ltr">App Router</span> پیروی می‌کند که به تفکیک منطقی کامپوننت‌ها، سرویس‌ها و هوک‌ها کمک می‌کند. تمام کدها با رعایت اصول <span dir="ltr">Clean Code</span> و به صورت ماژولار نوشته شده‌اند تا نگهداری و توسعه‌ی آینده‌ی پروژه به آسانی امکان‌پذیر باشد.
  </li>
</ul>

</div>
