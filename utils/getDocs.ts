import fs from "fs";

interface Category {
  category: string;
  packages: string[];
}

interface Data {
  language: string;
  categories: Category[];
}

export function getPackages(): Data[] {
  const docsDirectory = "./docs";
  const languageDirectories = fs
    .readdirSync(docsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const packageLanguages: Data[] = languageDirectories.map(
    (languageDirectory) => {
      const categoryDirectory = `${docsDirectory}/${languageDirectory}`;
      const categoryNames = fs
        .readdirSync(categoryDirectory, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
      const categories: Category[] = categoryNames.map((categoryName) => {
        const packageDirectory = `${categoryDirectory}/${categoryName}`;
        const packages = fs
          .readdirSync(packageDirectory, { withFileTypes: true })
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name);
        return {
          category: categoryName,
          packages,
        };
      });
      return {
        language: languageDirectory,
        categories,
      };
    }
  );

  return packageLanguages;
}