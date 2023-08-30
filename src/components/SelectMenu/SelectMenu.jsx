// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
import Category from './Category';
import Item from './Item';

import { useState } from 'react';

import './styles/selectMenu.css'

/**
 * Interactive selection menu component.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {function} props.innerRef - Reference to the callback function for accessing the DOM element.
 * @param {string} props.id - Unique ID for the selection menu element.
 * @param {Array} props.data - The data to display in the selection menu.
 * @param {string} props.label - The label for the selection menu.
 * @returns {JSX.Element} React element representing the selection menu.
 */
export function SelectMenu({innerRef, id, data, label}) {
    // State to manage whether the menu is opened or not
    const [isOpened, toggleOpen] = useState(false)

    // Recursive function to find an item by ID within the data hierarchy
    function findItemById(list, idToFind) {
        for (const item of list) {
            if (item.id === idToFind) {
                return item;
            }
            if (item.type === "category" && item.categoryContent) {
                const foundItem = findItemById(item.categoryContent, idToFind);
                if (foundItem) {
                    return foundItem;
                }
            }
        }
        return null;
    }
    // Find the initial selected item using the findItemById function
    const foundItem = findItemById(data, 0);

    // State to manage the currently selected item
    const [selected, ChangeSelected] = useState(foundItem)

    // Callback function to handle item selection
    const handleCallback = (id) => {
        toggleOpen(false)
        ChangeSelected(findItemById(data, id))
    }
    
    return (
        <div className="select-menu">
            <label htmlFor={`${id}`} className="label">{label}</label>
            <div className="display">
                <input
                    type="text"
                    id={id}
                    ref={innerRef}
                    value={selected.display}

                    onChange={() => null}
                    onFocus={() => {
                        toggleOpen(true)
                    }}
                    onBlur={() => {
                        toggleOpen(false)
                    }}
                />
            </div>
            <div className={`list ${isOpened ? "open    " : ""}`}>
                {data.map((el, index) => {
                    switch(el.type) {
                        case "item":
                            return <Item toggleOpen={toggleOpen} isOpened={isOpened} selected={el.id === selected.id} key={index} display={el.display} abbreviation={el.abbreviation} action={handleCallback} id={el.id} />
                        case "category":
                            return <Category toggleOpen={toggleOpen} isOpened={isOpened} key={index} selected={selected.id} name={el.categoryName} itemCallback={handleCallback} list={el.categoryContent} categoryId={data.filter(el => el.type === "category").findIndex(item => item.categoryName === el.categoryName)}/>
                        default:
                            return false
                    }
                })}
            </div>
        </div>
        
    );
}

// SelectMenu.propTypes = {
//     innerRef: PropTypes.func,
//     id: PropTypes.string,
//     data: PropTypes.array,
//     label: PropTypes.string,
// }