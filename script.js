const languageButton = document.querySelector('.language-toggle');
const translatableElements = document.querySelectorAll('[data-en][data-zh]');

function setLanguage(language) {
  const isChinese = language === 'zh';
  document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
  document.title = isChinese ? '侯睿 · 个人学术主页' : 'Rui Hou · Academic Homepage';

  translatableElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageButton.innerHTML = isChinese
    ? '<span>EN</span><span aria-hidden="true">/</span><span class="active-language">中文</span>'
    : '<span class="active-language">EN</span><span aria-hidden="true">/</span><span>中文</span>';
  languageButton.setAttribute('aria-pressed', String(isChinese));
  languageButton.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换到中文');
  localStorage.setItem('site-language', language);
}

languageButton.addEventListener('click', () => {
  setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh');
});

document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(localStorage.getItem('site-language') === 'zh' ? 'zh' : 'en');
