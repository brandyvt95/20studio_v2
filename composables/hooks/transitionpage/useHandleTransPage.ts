import { activeStateUi } from '../../controls/useStateUi'
import { motionEnterPage, motionLeavePage } from './useMotionTransPage';
import type { IHandleMotionTransPage } from '~types/transitionPage';
import { routesList } from '../../../constants/routerList'

const routerState: {
    [key: string]: { visible: boolean }
} = Object.fromEntries(routesList.map(route => [route, { visible: false }]));


export const defaultPageTransition = {
    name: 'page',
    mode: 'default',
    css: false,
    onBeforeEnter(el: Element) {
        //console.log('------------Before enter');
    },
    onEnter: (el: Element, done: any) => {
        // console.log('-------------onEnter');
        handlePageEnter({ el, done } as any)
    },
    onLeave: (el: Element, done: any) => {
        // console.log('------------onLeave');
        handlePageLeave({ el, done } as any)
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


export const handlePageEnter = ({ el, done }: IHandleMotionTransPage): void => {
    // const currentPath = useRouter().currentRoute.value.fullPath;
    // routerState[`${currentPath}`].visible = true;

    motionEnterPage({
        el,
        onCompleteCallback: () => {
            // if (routerState[`${currentPath}`].visible) {
            //     //console.log(`>>>>>> Starting app state for ${currentPath}`);

            // } else {
            //    // console.log(`- Page ${currentPath} is no longer visible, not starting app state`);
            // }
            done?.()
        }
    })
};

export const handlePageLeave = ({ el, done }: IHandleMotionTransPage): void => {

    activeStateUi({ param: 'disable-page' });
    // const currentPath = useRoute().fullPath
    // routerState[`${currentPath}`].visible = false;

    motionLeavePage({
        el,
        onCompleteCallback: () => {
            // console.log(`- Leave completed for ${currentPath}`)
            done?.()
        }
    })

};