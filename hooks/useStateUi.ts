let timeoutStateAppId: ReturnType<typeof setTimeout> | null = null;


const DELAY = 500
export const activeStateUi = ({ param }: any): void => {

  switch (param) {
    case 'active-page':
      if (timeoutStateAppId) clearTimeout(timeoutStateAppId);
      timeoutStateAppId = setTimeout(() => {
        console.log('🌟🌟🌟 startStateApp');
        stateUiGlobal.isActivePage = true;
      }, DELAY);
      break;

    case 'disable-page':
      console.log('🌟 diableStateApp');
      stateUiGlobal.isActivePage = false;
      break;

    default:
      console.warn('❓ Unknown param:', param);
      break;
  }
};

