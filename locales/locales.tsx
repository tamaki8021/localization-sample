import * as Localization from "expo-localization";
import i18n, { Scope, TranslateOptions } from "i18n-js";
import React, { createContext, useContext, useMemo, useState } from "react";
import { en } from "./en";
import { ja } from "./ja";

type Localization = {
  t: (scope: Scope, options?: TranslateOptions) => string;
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
};
i18n.translations = { ja, en };
i18n.fallbacks = true;

export const LocalizationContext = createContext<Localization>(
  {} as Localization
);

export const useLocalizationContext = () => {
  return useContext(LocalizationContext);
};

const useLocalization = () => {
  const [locale, setLocale] = useState(Localization.locale);

  const localizationContext = useMemo(
    () => ({
      t: (scope: Scope, options: TranslateOptions) =>
        i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  return { localizationContext };
};

export const LocalizationContextProvider: React.FC = ({ children }) => {
  const { localizationContext } = useLocalization();

  return (
    <LocalizationContext.Provider value={localizationContext}>
      {children}
    </LocalizationContext.Provider>
  );
};
