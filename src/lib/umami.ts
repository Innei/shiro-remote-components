export const trackEvent = (event: string) => {
  ;(window as any).umami?.track(event, {
    type: 'click',
  })
}
