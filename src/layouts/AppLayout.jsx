import React from 'react'
import ConfirmationContext from '../contexts/ConfirmationContext'
import useConfirmation from '../hooks/useConfirmation'
import Confirmation from '../components/Confirmation'
import { Outlet  } from 'react-router-dom'
import {BookContextProvider} from "../contexts/BookContext";

function AppLayout() {
  const toastManager = useConfirmation();

  return (
    <BookContextProvider>
      <ConfirmationContext.Provider value={toastManager}> 
        <Confirmation /> 
        <Outlet/>
      </ConfirmationContext.Provider>
    </BookContextProvider>
  )
}

export default AppLayout