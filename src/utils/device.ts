export const isDesktop: boolean = window.matchMedia('(min-width: 768px)')
  .matches;
export const isFullWindowDesktop: boolean = window.matchMedia(
  '(min-width: 1024px)'
).matches;
