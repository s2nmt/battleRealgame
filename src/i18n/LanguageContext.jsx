import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { messages } from './messages';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'robovix-lang';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'vi' || saved === 'en') return saved;
    } catch {
      /* ignore */
    }
    return 'vi';
  });

  function setLang(next) {
    if (next !== 'vi' && next !== 'en') return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const dict = messages[lang] || messages.vi;

    function t(key, vars) {
      const parts = key.split('.');
      let cur = dict;
      for (const part of parts) {
        if (cur == null || typeof cur !== 'object') {
          cur = undefined;
          break;
        }
        cur = cur[part];
      }
      if (typeof cur !== 'string') return key;
      if (!vars) return cur;
      return cur.replace(/\{(\w+)\}/g, (_, name) =>
        vars[name] != null ? String(vars[name]) : `{${name}}`,
      );
    }

    function pick(value) {
      if (value == null) return value;
      if (typeof value === 'string') return value;
      if (typeof value === 'object' && (value.vi != null || value.en != null)) {
        return value[lang] ?? value.vi ?? value.en ?? '';
      }
      return value;
    }

    return { lang, setLang, t, pick, messages: dict };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
