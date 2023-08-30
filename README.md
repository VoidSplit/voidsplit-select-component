# voidsplit-select-component

React select component library

## Description

It's a react component made for Openclassroom hr-net project

# Summary

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Installing](#installing)
- [Executing program](#executing-program)
- [Props](#props)
- [Data Structure](#data-structure)
- [Category Object](#category-object)
- [Item Object](#item-object)
- [Example usage](#example-usage)
---
- [Authors](#authors)
- [Version History](#version-history)

## Getting Started

### Dependencies

* React (18.0.0 +)

### Installing

* Install the library
```
npm install voidsplit-select-component
```

### Executing program

* Use the component
```
import { SelectMenu } from 'voidsplit_select_component';

<SelectMenu innerRef={componentRef} data={componentData} id="menuId" label="Menu Label" />
```
* Data Example:
```javascript
const data = [
    {
        type: "category",
        categoryName: "Category 0",
        categoryContent: [
            {
                type: "item",
                id: 0,
                display: "Item Display Value",
                disabled: true
            },
            {
                type: "item",
                id: 1,
                display: "2nd Item Display Value"
            }
        ]
    },
    {
        type: "item",
        id: 2,
        abbreviation: "Item Abreviation",
        display: "3rd Item Display Value"
    }
]
```

### Props
The `SelectMenu` component accepts the following props:

- `innerRef` (function): A reference callback to access the DOM element of the input.
- `data` (array): An array of objects representing the data to be displayed in the selection menu.
- `id` (string): A unique identifier for the selection menu component.
- `label` (string): The label for the selection menu.

## Data Structure

The data structure for the selection menu component should follow a specific format to ensure proper rendering. The data array should consist of objects representing either categories or individual items. Here's how the data should be structured:

Each object in the `data` array represents either a category or an item:

### Category Object

A category object should have the following properties:

- `type` *(string)*: Set to `"category"` to indicate that this object represents a category.
- `categoryName` *(string)*: The name of the category.
- `categoryContent` *(array)*: An array containing the items within the category. Each item should be an object with its own properties.

### Item Object

An item object should have the following properties:

- `type` *(string)*: Set to `"item"` to indicate that this object represents an item.
- `display` *(string)*: The display text for the item.
- `abbreviation` *(string, optional)*: Abbreviated text for the item (optional).
- `id` *(number)*: A unique identifier for the item.
- `disabled` *(boolean, optional)*: Whether the item is disabled (optional).

Here's an example of a properly structured `data` array:

```javascript
const componentData = [
    {
        type: "category",
        categoryName: "Category 0",
        categoryContent: [
            {
                type: "item",
                display: "Item Display Value",
                abbreviation: "Item Abbreviation",
                id: 0
            },
            {
                type: "item",
                display: "2nd Item Display Value",
                id: 1
            }
        ]
    },
    {
        type: "item",
        display: "3rd Item Display Value",
        abbreviation: "Item Abbreviation",
        id: 2
    },
    // ... more items or categories
];

```

## Example usage

Here's an example of how to use the component:
```javascript
import React, { useRef } from 'react';
import { SelectMenu } from 'voidsplit_select_component';

const App = () => {
    const componentRef = useRef(null);

    const componentData = [
        // ... your data array
    ];

    return (
        <div>
            <SelectMenu innerRef={componentRef} data={componentData} id="myComponent" label="Select an Item" />
        </div>
    );
}

export default App;
```
## Authors

Contributors names and contact info

[VoidSplit](https://github.com/VoidSplit)

## Version History

* 0.3.1
    * Component Optimisations
    * Adding jsdoc documentation
    * Improved readMe documentation
* 0.3.0
    * Total component redesign
* 0.2.13
    * SEO optimization on npm
* 0.2.12
    * Bug fix and README
* 0.2.11
    * Various bug fixes and optimizations
    
    ...