import React from 'react';
import PersistLogin from 'src/PersistLogin';
import LoaderComponent from 'src/reusable/components/LoaderComponent/LoaderComponent';
import PromptOverlay from 'src/reusable/components/promptOverlay/PromptOverlay';
import IdleTimerComponet from 'src/reusable/components/sessionTimeOut/IdleTimerComponet';

import { TheContent, TheSidebar, TheFooter, TheHeader} from './index';

const TheLayout = () => {

  return (
    <PersistLogin>
      <LoaderComponent>
    <div className="c-app c-default-layout">
      {/* <TheSidebar /> */}
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        {/* <TheFooter /> */}
      </div>
    </div>
    </LoaderComponent>
    <PromptOverlay open={true}></PromptOverlay>
    <IdleTimerComponet></IdleTimerComponet>
    </PersistLogin>
  )
}

export default TheLayout
