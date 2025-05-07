import { activeStateUi } from '../../controls/useStateUi'
import { motionEnterPage, motionLeavePage } from './useMotionTransPage';
import type { IHandleMotionTransPage } from '~types/transitionPage';
import {routesList} from '../../../constants/routerList'

const routerState: {
  [key: string]: { visible: boolean }
} = Object.fromEntries(routesList.map(route => [route, { visible: false }]));



export const handlePageEnter = ({ el, done }: IHandleMotionTransPage): void => {
    const currentPath = useRouter().currentRoute.value.fullPath;
    routerState[`${currentPath}`].visible = true;
    
    motionEnterPage({
        el,
        onCompleteCallback: () => {
            if (routerState[`${currentPath}`].visible) {
                console.log(`>>>>>> Starting app state for ${currentPath}`);
                activeStateUi({param:'active-page'});
            } else {
                console.log(`- Page ${currentPath} is no longer visible, not starting app state`);
            }
            done?.()
        }
    })
};

export const handlePageLeave = ({ el, done }: IHandleMotionTransPage): void => {
    activeStateUi({param:'disable-page'});
    const currentPath = useRoute().fullPath
    routerState[`${currentPath}`].visible = false;

    motionLeavePage({
        el,
        onCompleteCallback: () => {
            console.log(`- Leave completed for ${currentPath}`)
            done?.() 
        }
    })

};