# voidsplit-select-component

React select component library

## Description

It's a react component made for Openclassroom hr-net project

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

<SelectMenu innerRef={ComponentRef} data={ComponentData} id="ComponentId"/>
```
* Data Example:
```
const data = [
    {
        type: "category",
        categoryName: "Category 0",
        categoryContent: [
            {
                type: "item",
                display: "Item Display Value",
                disabled: true
            },
            {
                type: "item",
                display: "2nd Item Display Value"
            }
        ]
    },
    {
        type: "item",
        abbreviation: "Item Abreviation",
        display: "3rd Item Display Value"
    }
]
```

## Authors

Contributors names and contact info

[VoidSplit](https://github.com/VoidSplit)

## Version History

* 0.2.12
    * Bug fix and README
* 0.2.11
    * Various bug fixes and optimizations
    
    ...