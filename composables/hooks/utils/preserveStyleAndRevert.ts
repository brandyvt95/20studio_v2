

export function preserveStyleAndRevert({ctx,el}:{ctx: any, el: HTMLElement}) {
    if (!ctx || !el) return;
    const currentTransform = getComputedStyle(el).transform;
    el.style.transform = currentTransform;
    ctx.revert();
  }

  export function preserveStyle({ el }: { el: HTMLElement }) {
    if (!el) return;
  
    const currentTransform = getComputedStyle(el).transform;
    if (!el.style.transform) {
      el.style.transform = currentTransform;
    }
  }
  
  // onUnmounted
  export function revertCtx({ ctx }: { ctx: any }) {
    if (ctx && typeof ctx.revert === 'function') {
      ctx.revert();
    }
  }