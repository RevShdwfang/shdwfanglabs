const fs = require('fs');
const path = require('path');

const projectRoot = './';
const alias = '@/'; // If using `@` as alias for root

// Define replacements
const replacements = [
  {
    pattern: /@\/components\/([a-zA-Z0-9]+)\/page/g,
    replacement: '@/app/$1/page',
  },
  {
    pattern: /@\/components\/services\/\[slug\]\/page/g,
    replacement: '@/app/services/[slug]/page',
  },
  {
    pattern: /@\/components\/([A-Z][\w\d]+)\b/g,
    replacement: '@/components/shared/$1',
  },
  {
    pattern: /@\/components\/([a-zA-Z0-9]+)\.module\.css/g,
    replacement: '@/styles/modules/$1.module.css',
  },
];

// Recursively walk through files
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      fixImports(fullPath);
    }
  });
}

// Replace imports in a file
function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  replacements.forEach(({ pattern, replacement }) => {
    content = content.replace(pattern, replacement);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`🔧 Fixed imports in: ${filePath}`);
  }
}

// Start process
walk(projectRoot);
console.log('✅ Import path fixes complete.');
