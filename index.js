const md2resume = require('markdown-resume');

md2resume('resume.md', 'default').then((html) => {
  console.log(html);
});
