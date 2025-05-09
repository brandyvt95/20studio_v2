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
        //console.log('------------Before enter');
    },
    onEnter: (el: Element, done: any) => {
        // console.log('-------------onEnter');
        const targetPath = useRouter().currentRoute.value.fullPath;
        const currentPath = useRoute().fullPath
        const isProjectPageToDetail = isGoToProjectDetail(currentPath, targetPath)

        handlePageEnter({ el, done, isProjectPageToDetail } as any)
    },
    onLeave: (el: Element, done: any) => {
        // console.log('------------onLeave');

        const targetPath = useRouter().currentRoute.value.fullPath;
        const currentPath = useRoute().fullPath
        const isProjectPageToDetail = isGoToProjectDetail(currentPath, targetPath)
        handlePageLeave({ el, done, isProjectPageToDetail } as any)
    },

    onAfterEnter: (el: Element) => {
        console.log('Transition vào đã hoàn thành', el);
        activeStateUi({ param: 'active-page' });
    },
    onEnterCancelled: (el: Element) => {
        // const currentPath = useRoute().fullPath
        // routerState[`${currentPath}`].visible = false;
        // console.log('Transition vào bị hủy', el);
    },
    onBeforeLeave: (el: Element) => {
        activeStateUi({ param: 'disable-page' });
        //console.log('Trước khi phần tử rời DOM', el);
    },

    onAfterLeave: (el: Element) => {
        // console.log('Transition ra đã hoàn thành', el);
    },
    onLeaveCancelled: (el: Element) => {
        // const currentPath = useRoute().fullPath
        // routerState[`${currentPath}`].visible = false;
        //console.log('Transition ra bị hủy', el);
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