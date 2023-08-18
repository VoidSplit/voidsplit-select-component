/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react"

import './selectMenu.css'


function SelectMenu({data, selectedItem, innerRef, id}) {
    let displayItem;
    selectedItem ? displayItem = data.filter(e => e.name === selectedItem)[0] : displayItem = data[0].type === "category" ? data[0].categoryContent.filter(el => el.disabled !== true)[0] : data[0]
    let displayList = [...data]

    const [selected, changeSelected] = useState(displayItem)
    const [isOpen, toggleOpen] = useState(false)
    const [inputValue, setInputValue] = useState("");

    let searchAutorisation = false

    const handleOpenClick = () => {
        toggleOpen(!isOpen)
    }
    const callbackFunction = (props) => {
        changeSelected(props)
        handleOpenClick()
    }
    useEffect(() => {
        setInputValue(selected.abbreviation ? selected.abbreviation : selected.display);
    }, [selected])

    return (
        <div className="select-menu-wrapper">
            <div className={`select-menu${isOpen ? " open": ""}`}>
                <div className="display" onClick={handleOpenClick}>
                <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={!searchAutorisation}
            ref={innerRef}
            id={`${id ? id : Date.now() + Math.random()}`}
          />
                </div>
                <div className="select-list">
                    {displayList.map((el, index) => {
                        switch(el.type) {
                            case "item":
                                return <SelectItem key={index} element={el} callback={callbackFunction} isSelected={el === selected ? true : false} />
                            case "category":
                                return <SelectCategory key={index} element={el} callback={callbackFunction} actualDisplay={selected} />
                            default:
                                return false
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

function SelectCategory({element, actualDisplay, callback}) {
    return (
        <div className="category">
            <p className="category-name">{element.categoryName}</p>
            {element.categoryContent.map((el, index) => {
                return <SelectItem key={index} element={el} callback={callback} isSelected={el === actualDisplay ? true : false}/>
            })}
        </div>
    );
}
function SelectItem({ element, isSelected, callback }) {
    const handleClick = () => {
      callback(element);
    };
  
    return (
        <div onClick={handleClick} className={`item${element.disabled && element.disabled === true ? " disabled" : ""}${isSelected && isSelected === true ? " selected" : ""}`}>
          {element.display}
          <div className="check-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
        </div>
    );
}

export {SelectMenu};

// SelectMenu.propTypes = {
//   data: PropTypes.object,
//   selectedItem: PropTypes.array,
//   innerRef: PropTypes.func
// }
// 
// 
// SelectCategory.propTypes = {
//   element: PropTypes.object,
//   actualDisplay: PropTypes.array,
//   callback: PropTypes.func
// }
// 
// 
// SelectItem.propTypes = {
//   element: PropTypes.object,
//   isSelected: PropTypes.bool,
//   callback: PropTypes.func
// }
// 
// 