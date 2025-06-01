import { DSInputElement, Vect2 } from '../types'

/** Sets the style position to the X and Y coordinates. Can handle translate and top/left */
export const setStylePosition = <E extends DSInputElement>(element: E, values: Vect2, useTranslate: boolean) => {
  if (element instanceof SVGElement) {
    if (!element || !element.setAttribute) return;
  element.setAttribute('drag-select-cor', `${values.x}, ${values.y}`);
  }
  if (useTranslate) {
    const prevTransform = element.style.transform
    element.style.transform = `translate3d(${values.x}px,${
      values.y
    }px,1px) ${prevTransform.replace(/translate.*?\)/g, '')}`
  } else {
    element.style.left = `${values.x}px`
    element.style.top = `${values.y}px`
  }

  return element
}
