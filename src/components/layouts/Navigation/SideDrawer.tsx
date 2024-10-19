import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props: any) => {
    const content = (
        <CSSTransition
            in={props.show}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
        >
            <aside className="side-drawer" onClick={props.onClick}>
                {props.children}
            </aside>
        </CSSTransition>
    );

    return ReactDOM.createPortal(
        content,
        document.getElementById('drawer-hook') as HTMLFormElement
    );
};

export default SideDrawer;
