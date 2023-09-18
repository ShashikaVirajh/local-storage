export type LocalStorageItem = {
  key: string;
  value: string;
};

export type Tab = {
  id?: string;
  url: string;
  imageUrl?: string;
  favIconUrl?: string;
};

export type Response = {
  data: string;
};
