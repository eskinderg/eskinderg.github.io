import { ThemeService } from "./providers/theme.service"

export function initializeApp(themeService: ThemeService) {
  return () => {
    themeService.LoadTheme();
  }
}
