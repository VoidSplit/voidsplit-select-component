// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */

/**
 * Represents an item within a selection menu.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {function} props.action - The callback function triggered when the item is selected.
 * @param {string} props.display - The display text for the item.
 * @param {string} props.abbreviation - The abbreviated text for the item (optional).
 * @param {number} props.id - The unique identifier for the item.
 * @param {boolean} props.selected - Indicates whether the item is currently selected.
 * @param {function} props.toggleOpen - Callback to toggle the open state of the menu.
 * @returns {JSX.Element} A button representing the selectable item.
 */
export default function Item({action, display, abbreviation, id, selected, toggleOpen}) {
    // Determine the displayed text based on abbreviation or display value
    let displayed = abbreviation ? abbreviation : display ? display : "error"
    return (
        <button
            className={`item ${selected ? "selected" : ""}`}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault()
                    action(id)
                }
            }} onClick={(e) => {
                action(id)
                e.preventDefault()
            }} onFocus={() => {
                toggleOpen(true)
            }} onBlur={() => {
                toggleOpen(false)
            }}>
            {displayed}
        </button>
    );
}


// Item.propTypes = {
//     action: PropTypes.func,
//     display: PropTypes.string,
//     abbreviation: PropTypes.string,
//     id: PropTypes.number,
//     selected: PropTypes.bool,
//     toggleOpen: PropTypes.func
// }