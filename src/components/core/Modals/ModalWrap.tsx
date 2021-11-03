import React, { useContext } from 'react'
import styled from 'styled-components';
import { ElementContext } from '../../../containers/Header/context/ElementContext';
import LocationModal from './LocationModal';




const ModalWrap = () => {
  const { selectedModal } = useContext(ElementContext);
  const getModal= ()=>{
    switch(selectedModal){
      case "none":
        return  null;
      case "location":
        return <LocationModal/>
    }
  }
  return (
    <>
     {getModal()}
    </>
  )
}

export default ModalWrap
