

export function preserveStyleAndRevert({ctx,el}:{ctx: any, el: HTMLElement}) {
    if (!ctx || !el) return;
    const currentTransform = getComputedStyle(el).transform;
    el.style.transform = currentTransform;
    ctx.revert();
  }