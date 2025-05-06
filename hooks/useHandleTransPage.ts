import { activeStateUi } from '../composables/controls/useStateUi'
import { motionEnterPage, motionLeavePage } from './useMotionTransPage';
import type { IHandleMotionTransPage } from '../types/transitionPage';


const pageState: {
    [key: string]: {
        visible: boolean;
    };
} = {
    '/': { visible: false },
    '/about': { visible: false },
    '/projects': { visible: false },
    '/services': { visible: false },
    '/contact': { visible: false },
    '/sustainability': { visible: false },
};


export const handlePageEnter = ({ el, done }: IHandleMotionTransPage): void => {
    const currentPath = useRouter().currentRoute.value.fullPath;
    pageState[`${currentPath}`].visible = true;
    
    motionEnterPage({
        el,
        onCompleteCallback: () => {
            if (pageState[`${currentPath}`].visible) {
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
    pageState[`${currentPath}`].visible = false;

    motionLeavePage({
        el,
        onCompleteCallback: () => {
            console.log(`- Leave completed for ${currentPath}`)
            done?.() 
        }
    })

};