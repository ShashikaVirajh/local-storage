import { useCallback, useState } from 'react';

import { Tab, LocalStorageItem, Response } from '../types';
import { LocalStorageActions } from '../enums';

export const useLocalStorage = () => {
  const [localStorageItems, setLocalStorageItems] = useState<LocalStorageItem[]>([]);
  const [currentTab, setCurrentTab] = useState<Tab | null>(null);

  const fetchCurrentTab = useCallback((): void => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: Tab[]) => {
      const activeTab = tabs[0];

      const tab: Tab = {
        url: activeTab.url,
        imageUrl: activeTab.favIconUrl,
      };

      setCurrentTab(tab);
    });
  }, []);

  const fetchLocalStorageItems = useCallback((): void => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: Tab[]) => {
      const activeTab = tabs[0];

      chrome.tabs.sendMessage(
        activeTab.id!,
        { action: LocalStorageActions.FetchLocalStorageItems },
        (response: Response) => {
          if (chrome.runtime.lastError) {
            console.log('Error:', chrome.runtime.lastError.message);
            return;
          }
          const data = JSON.parse(response.data);
          const items: LocalStorageItem[] = Object.keys(data).map((key) => ({
            key,
            value: data[key],
          }));

          setLocalStorageItems(items);
        },
      );
    });
  }, []);

  const SaveLocalStorageItem = (key: string, value: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: Tab[]) => {
      const activeTab = tabs[0];

      chrome.tabs.sendMessage(
        activeTab.id!,
        { action: LocalStorageActions.SaveLocalStorageItem, key, value },
        (response: Response) => {
          if (chrome.runtime.lastError) {
            console.log('Error:', chrome.runtime.lastError.message);
            return;
          }

          const data = JSON.parse(response.data);
          const items: LocalStorageItem[] = Object.keys(data).map((key) => ({
            key,
            value: data[key],
          }));

          setLocalStorageItems(items);
        },
      );
    });
  };

  const DeleteLocalStorageItem = (key: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: Tab[]) => {
      const activeTab = tabs[0];

      chrome.tabs.sendMessage(
        activeTab.id!,
        { action: LocalStorageActions.DeleteLocalStorageItem, key },
        (response: Response) => {
          if (chrome.runtime.lastError) {
            console.log('Error:', chrome.runtime.lastError.message);
            return;
          }

          const data = JSON.parse(response.data);
          const items: LocalStorageItem[] = Object.keys(data).map((key) => ({
            key,
            value: data[key],
          }));

          setLocalStorageItems(items);
        },
      );
    });
  };

  const clearAllItems = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: Tab[]) => {
      const activeTab = tabs[0];

      chrome.tabs.sendMessage(
        activeTab.id!,
        { action: LocalStorageActions.ClearLocalStorage },
        (response: Response) => {
          if (chrome.runtime.lastError) {
            console.log('Error:', chrome.runtime.lastError.message);
            return;
          }

          setLocalStorageItems([]);
        },
      );
    });
  };

  return {
    currentTab,
    localStorageItems,
    fetchCurrentTab,
    fetchLocalStorageItems,
    SaveLocalStorageItem,
    DeleteLocalStorageItem,
    clearAllItems,
  };
};
