// TODO 此函数在twikoo下可能不适用
const loadComments = () => {
  const element = $dom('#comments')
  if (!element) {
    goToComment.display('none')
    return
  } else {
    goToComment.display('')
  }
  const io = new IntersectionObserver((entries, observer) => {
    const entry = entries[0]
    vendorCss('valine')
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      transition($dom('#comments'), 'bounceUpIn')
      observer.disconnect()
    }
  })

  io.observe(element)
}