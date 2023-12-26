export interface ThemeContextProps {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}