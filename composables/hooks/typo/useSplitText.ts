import { shallowRef } from 'vue'
import { useAnimateTypo } from './useAnimateTypo';

type SplitTextOptions = {
  typeSplit: 'lines' | 'chars' | 'words';
};

type UseSplitTextParams = {
  refContent: Ref<HTMLElement | null>;
  optionSplit?: SplitTextOptions;
  motion: any;
};

export function useSplitText({
  refContent,
  optionSplit = { typeSplit: 'lines' },
  motion
}: UseSplitTextParams) {
  const tl = shallowRef<gsap.core.Timeline | null>(null);
  const {$gsap} = useNuxtApp() as any
  const animate = (gsapVars: gsap.TweenVars, splitInstance: any) => {
    if (splitInstance) {
      $gsap.from(splitInstance.lines, {
        duration: 1,
        opacity: 1,
        y: '-100%',
        stagger: 0.07,
        scrollTrigger: gsapVars.scrollTrigger,
      });
    }
  };

  useAnimateTypo({
    types: optionSplit.typeSplit,
    refContent,
    motion,
    animate,
  });

  return {
    timeline: tl,
  };
}
