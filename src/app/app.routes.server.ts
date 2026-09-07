import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    { path: '**', renderMode: RenderMode.Prerender } // Or RenderMode.Server / Prerender as needed for a single mode
];
