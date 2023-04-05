import fs from 'fs';

interface PackageLanguage {
  language: string;
  packages: string[];
}

export function getPackages(): PackageLanguage[] {
  const docsDirectory = './docs';
  const languageDirectories = fs.readdirSync(docsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const languages: PackageLanguage[] = languageDirectories.map((languageDirectory) => {
    const packageDirectory = `${docsDirectory}/${languageDirectory}`;
    const packages = fs.readdirSync(packageDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    return {
      language: languageDirectory,
      packages,
    };
  });

  return languages;
}
