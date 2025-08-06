const fs = require('fs');
const path = require('path');

const pages = [
  'about',
  'contact',
  'portfolio',
  'services',
  'terms',
];

const sharedComponents = [
  'TopNav.tsx',
  'Footer.tsx',
  'PageHeader.tsx',
  'FAQSection.tsx',
  'ContactForm.tsx',
  'DomainServices.tsx',
  'ServicePage.tsx',
];

const slugPageSrc = path.join('components', 'services', '[slug]', 'page.tsx');
const slugPageDest = path.join('app', 'services', '[slug]', 'page.tsx');

const moveFile = (src, dest) => {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.renameSync(src, dest);
    console.log(`✅ Moved: ${src} → ${dest}`);
  } else {
    console.warn(`⚠️ Not found: ${src}`);
  }
};

const restructure = () => {
  // Move each page to /app
  pages.forEach(page => {
    const src = path.join('components', page, 'page.tsx');
    const dest = path.join('app', page, 'page.tsx');
    moveFile(src, dest);
  });

  // Move slug page
  moveFile(slugPageSrc, slugPageDest);

  // Move shared components to /components/shared
  sharedComponents.forEach(file => {
    const src = path.join('components', file);
    const dest = path.join('components', 'shared', file);
    moveFile(src, dest);
  });

  // Move all CSS Modules to /styles/modules
  const cssDir = 'components';
  const targetCssDir = path.join('styles', 'modules');
  fs.mkdirSync(targetCssDir, { recursive: true });

  fs.readdirSync(cssDir).forEach(file => {
    if (file.endsWith('.module.css')) {
      const src = path.join(cssDir, file);
      const dest = path.join(targetCssDir, file);
      moveFile(src, dest);
    }
  });

  console.log('\n🎉 Restructure complete!');
};

restructure();
