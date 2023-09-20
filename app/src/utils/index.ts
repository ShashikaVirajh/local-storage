import { LocalStorageItem } from '../types';

export const extractMainUrl = (url?: string): string | null => {
  if (!url) return null;

  const match = url.match(/\/\/(.*?)(\/|$)/);

  if (match && match[1]) {
    return match[1];
  } else {
    console.error(`Could not extract main URL from: ${url}`);
    return null;
  }
};

export const isValidImage = (imageUrl?: string) => {
  if (!imageUrl) return false;
  if (imageUrl.includes('localhost')) return false;

  return true;
};

export const copyToClipboard = async (
  item: LocalStorageItem,
  setCopiedKey: (key: string) => void,
): Promise<void> => {
  if (item) {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopiedKey(item.key);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  }
};
