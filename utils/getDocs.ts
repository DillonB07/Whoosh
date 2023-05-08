export interface Category {
  category: string;
  packages: string[];
}

export type docsetItemType = {
  name: string;
  version: string | undefined;
  downloaded?: boolean;
};

type DataType =
  | {
      success: true;
      docs: docsetItemType[];
    }
  | {
      success: false;
      error: string;
    };

export function getPackages(): Promise<docsetItemType[] | undefined> {
  return fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/all-docs`)
    .then((res) => res.json())
    .then((data: DataType) => {
      return data.success ? data.docs : undefined;
    })
    .catch((err) => {
      console.error(err);
      return undefined;
    });
}
