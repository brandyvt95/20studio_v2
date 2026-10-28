import { activeStateUi } from '../../controls/useStateUi'
import { motionEnterPage, motionLeavePage, motionEnterPageDetailProject, motionLeavePageDetailProject } from './useMotionTransPage';
import type { IHandleMotionTransPage } from '~types/transitionPage';
import { routesList } from '../../../constants/routerList'

const routerState: {
    [key: string]: { visible: boolean }
} = Object.fromEntries(routesList.map(route => [route, { visible: false }]));

function isGoToProjectDetail(currentPath: string, targetPath: string): boolean {
    const normalizedCurrent = currentPath.replace(/\/+$/, '');
    const normalizedTarget = targetPath.replace(/\/+$/, '');

    // currentPath phải là chính xác "/projects"
    if (normalizedCurrent !== '/projects') return false;

    // targetPath phải bắt đầu bằng "/projects/"
    if (!normalizedTarget.startsWith('/projects/')) return false;

    const relativePath = normalizedTarget.slice('/projects/'.length);

    // relativePath không được rỗng và không chứa thêm "/"
    return relativePath.length > 0 && !relativePath.includes('/');
}


export const defaultPageTransition = {
    name: 'page',
    mode: 'default',
    css: false,
    onBeforeEnter(el: Element) {
        console.log('onBeforeEnter');
        el.classList.add('is-transitioning');
        el.querySelector('.page-main-wrap')?.classList.add('is-transitioning');
    },
    onEnter: (el: Element, done: any) => {
        stateUiGlobal.isFireMotionFlash = true
        console.log('onEnter');
        const targetPath = useRouter().currentRoute.value.fullPath;
        const currentPath = useRoute().fullPath
        const isProjectPageToDetail = isGoToProjectDetail(currentPath, targetPath)

        handlePageEnter({ el, done, isProjectPageToDetail } as any)
    },
    onLeave: (el: Element, done: any) => {
        console.log('onLeave');
        if ( navbarState.redirectOnNavbar ) {
            console.log("disable anim leave")
            el.classList.remove('is-transitioning');
            el.querySelector('.page-main-wrap')?.classList.remove('is-transitioning');
            done?.();
            return
        }
        const targetPath = useRouter().currentRoute.value.fullPath;
        const currentPath = useRoute().fullPath
        const isProjectPageToDetail = isGoToProjectDetail(currentPath, targetPath)
        handlePageLeave({ el, done, isProjectPageToDetail } as any)
    },

    onAfterEnter: (el: Element) => {
        console.log('onAfterEnter');
        console.log('Transition vào đã hoàn thành', el);
        el.classList.remove('is-transitioning');
        el.querySelector('.page-main-wrap')?.classList.remove('is-transitioning');
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
        stateUiGlobal.isActivePage = true;
        navbarState.redirectOnNavbar = false
        navbarState.isModalMenuOpen = false
        stateUiGlobal.isFireMotionFlash = false
    },
    onEnterCancelled: (el: Element) => {
        el.classList.remove('is-transitioning');
        el.querySelector('.page-main-wrap')?.classList.remove('is-transitioning');
        stateUiGlobal.isFireMotionFlash = false
        console.log('onEnterCancelled');
    },
    onBeforeLeave: (el: Element) => {
        console.log('onBeforeLeave');
        stateUiGlobal.isActivePage = false;
        stateUiGlobal.isRunningTransitionPage = true
        el.classList.add('is-transitioning');
        el.querySelector('.page-main-wrap')?.classList.add('is-transitioning');
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        if (scrollY > 0) {
            const content = el.querySelector('.smooth-content') as HTMLElement;
            if (content) {
                content.style.transform = `translate3d(0, -${scrollY}px, 0)`;
            }
        }
    },

    onAfterLeave: (el: Element) => {
        console.log('onAfterLeave');
        el.classList.remove('is-transitioning');
        el.querySelector('.page-main-wrap')?.classList.remove('is-transitioning');
        stateUiGlobal.isRunningTransitionPage = false
    },
    onLeaveCancelled: (el: Element) => {
        el.classList.remove('is-transitioning');
        el.querySelector('.page-main-wrap')?.classList.remove('is-transitioning');
        console.log('onLeaveCancelled');
    }
}

export const handlePageEnter = ({ el, done, isProjectPageToDetail }: IHandleMotionTransPage): void => {
    const motionFn = isProjectPageToDetail ? motionEnterPageDetailProject : motionEnterPage;
    motionFn({
        el,
        onCompleteCallback: () => done?.()
    });
};

export const handlePageLeave = ({ el, done, isProjectPageToDetail }: IHandleMotionTransPage): void => {
  
    const motionFn = isProjectPageToDetail ? motionLeavePageDetailProject : motionLeavePage;
    motionFn({
        el,
        onCompleteCallback: () => done?.()
    });
};


