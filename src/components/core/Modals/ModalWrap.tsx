import React, { useContext } from 'react'
import styled from 'styled-components';
import { ElementContext } from '../../../context/ElementContext';
import ItemModal from './ItemModal';
import LocationModal from './LocationModal';




const ModalWrap = () => {
  const { selectedModal } = useContext(ElementContext);
  const getModal= ()=>{
    switch(selectedModal){
      case "none":
        return  null;
      case "item":
        return <ItemModal />
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
