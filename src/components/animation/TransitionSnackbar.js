import React from 'react';
import { Transition } from 'react-transition-group';
import Snackbar from '../../styles/Snackbar';
import Spinner from '../../styles/Spinner';

function TransitionSnackbar({ children, show, ...rest }) {
    const duration = 600;

    return (
        <Transition in={show} timeout={duration}>
            {state => (
                <Snackbar state={state} duration={duration} {...rest}>
                    <Spinner />
                    {children}
                </Snackbar>
            )}
        </Transition>
    );
}

export default TransitionSnackbar;