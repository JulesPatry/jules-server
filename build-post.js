const fs = require('fs');

console.log(`----`);
console.log(`// Copying files into build folder`);

fs.copyFile('package.json', 'build/package.json', (err) => {
  if (err) {
    console.log('Error Found:', err);
  } else {
    console.log('Copied package.json');
  }
});

fs.copyFile('package-lock.json', 'build/package-lock.json', (err) => {
  if (err) {
    console.log('Error Found:', err);
  } else {
    console.log('Copied package-lock.json');
  }
});

fs.copyFile('README.md', 'build/README.md', (err) => {
  if (err) {
    console.log('Error Found:', err);
  } else {
    console.log('Copied README.md');
  }
});

fs.copyFile('LICENSE', 'build/LICENSE', (err) => {
  if (err) {
    console.log('Error Found:', err);
  } else {
    console.log('Copied LICENSE');
  }
});
