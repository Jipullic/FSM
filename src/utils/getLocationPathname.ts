export const getFormatLocationPathname = (pathname: string) => {
  return pathname.length > 1 && pathname.slice(-1) === '/'
    ? pathname.slice(0, -1)
    : pathname
}
