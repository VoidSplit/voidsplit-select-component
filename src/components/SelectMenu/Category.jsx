// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */

import Item from "./Item";

/**
 * Represents a category within a selection menu.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {string} props.name - The name of the category.
 * @param {Array} props.list - The list of items within the category.
 * @param {function} props.itemCallback - The callback function triggered when an item within the category is selected.
 * @param {number} props.selected - The ID of the currently selected item.
 * @param {function} props.toggleOpen - Callback to toggle the open state of the menu.
 * @returns {JSX.Element} A component representing a category in the selection menu.
 */
export default function Category({name, list, itemCallback, selected, toggleOpen}) {
    return (
        <div className="category">
            <div className="category-name">{name}</div>
            {/* Loop through the list to render items within the category */}
            {list.map((el, index) => {
                    switch(el.type) {
                        case "item":
                            return <Item toggleOpen={toggleOpen} selected={el.id === selected} key={index} display={el.display} abbreviation={el.abbreviation} action={itemCallback} id={el.id} />
                        default:
                            return false
                    }
                })}
        </div>
    );
}


// Category.propTypes = {
//   name: PropTypes.string,
//   list: PropTypes.array,
//   itemCallback: PropTypes.func,
//   selected: PropTypes.bool,
//   toggleOpen: PropTypes.func
// }