import React from 'react'
import ConfirmationContext from '../contexts/ConfirmationContext'
import useConfirmation from '../hooks/useConfirmation'
import Confirmation from '../components/Confirmation'
import { Outlet  } from 'react-router-dom'
import {BookContextProvider} from "../contexts/BookContext";
import { UserContextProvider } from '../contexts/UserContext';
import Toast from '../components/Toast';
import useToast from '../hooks/useToast';
import ToastContext from '../contexts/ToastContext';

function AppLayout() {
  const toastManager = useConfirmation();
  const toastManager2 = useToast();

  return (
    <UserContextProvider>
      <ToastContext.Provider value={toastManager2}>
        <BookContextProvider>
          <ConfirmationContext.Provider value={toastManager}> 
            <Confirmation /> 
            <Outlet/>
            <Toast/>
          </ConfirmationContext.Provider>
        </BookContextProvider>
      </ToastContext.Provider>
    </UserContextProvider>

  )
}

export default AppLayout