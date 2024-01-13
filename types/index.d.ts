export interface ThemeContextProps {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface NavDataItem {
  id: number;
  name: string;
  path: string;
  icon: Icon;
}

export interface Stack {
  id: number;
  stack: string;
}
