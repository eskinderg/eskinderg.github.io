import { Meta } from "@angular/platform-browser";
import { appMeta } from "./app.meta";
import { ThemeService } from "./providers/theme.service"

export function initializeApp(themeService: ThemeService, meta: Meta) {
  return () => {
    meta.addTags(appMeta)
    themeService.LoadTheme();
  }
}
