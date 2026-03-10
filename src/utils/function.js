export const getImageUrl = imageParam => {
  return new URL(`../assets/images/${imageParam}`, import.meta.url).href
}