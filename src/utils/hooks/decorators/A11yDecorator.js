export function a11yButtonActionHandler(target, key, descriptor) {
  const fn = descriptor.value
  if (typeof fn !== 'function') {
    throw new Error(`@a11yButtonActionHandler decorator can only be applied to methods not: ${typeof fn}`)
  }

  descriptor.value = function actionHandler(event) {
    if (
      !event ||
      event.type === 'click' ||
      (['keydown', 'keypress'].includes(event.type) && ['Enter', ' '].includes(event.key))
    ) {
      fn.call(this, event)
    }
  }

  return descriptor
}
