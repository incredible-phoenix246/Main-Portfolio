export interface ThemeContextProps {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface NavDataItem {
  key: number;
  name: string;
  path: string;
  icon: Icon;
}
