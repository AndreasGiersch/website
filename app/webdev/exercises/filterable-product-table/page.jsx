'use client';
import React from 'react';
import { Fragment } from 'react';

import { Switch } from '@nextui-org/switch';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { SearchIcon } from './SearchIcon';
import { ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

/**
 * Exercise taken from
 * https://reactjs.org/docs/thinking-in-react.html
 *
 */

/**
 * styles for this page
 */
const cellStyle = { textAlign: 'center', verticalAlign: 'middle' };

const cellStyleNotInStock = {
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'red',
};

const tableStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
};

const searchStyle = {
    marginTop: '2em',
    textAlign: 'center',
};

const searchButtonStyle = {
    marginTop: '1em',
    marginBottom: '1em',
};

const formControlStyle = {
    width: '50%',
    textAlign: 'center',
};

const formGroupStyle = {
    textAlign: 'center',
};

/**
 * data could be replaced with a fetched data object
 */

const data = [
    {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Football',
    },
    {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball',
    },
    {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: false,
        name: 'Basketball',
    },
    {
        category: 'Sporting Goods',
        price: '$19.99',
        stocked: true,
        name: 'Volleyball',
    },
    {
        category: 'Sporting Goods',
        price: '$39.99',
        stocked: false,
        name: 'Jersey',
    },
    {
        category: 'Electronics',
        price: '$99.99',
        stocked: true,
        name: 'iPod Touch',
    },
    {
        category: 'Electronics',
        price: '$399.99',
        stocked: false,
        name: 'iPhone 5',
    },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
    {
        category: 'Electronics',
        price: '$799.99',
        stocked: true,
        name: 'ASUS Notebook',
    },
];

/**
 * generate categories from data
 */

const categories = [];
data.forEach((element) => {
    if (!categories.includes(element.category)) {
        categories.push(element.category);
    }
});

/**
 * Displays a single row containing the product category
 */
const ProductCategoryRow = (props) => {
    return (
        <tr colSpan={2}>
            <td className="flex justify-center font-bold">{props.title}</td>
        </tr>
    );
};

/**
 * Displays a single row containing product info
 */
const ProductRow = (props) => {
    return (
        <tr>
            <td style={props.stocked ? cellStyle : cellStyleNotInStock}>{props.name}</td>
            <td style={props.stocked ? cellStyle : cellStyleNotInStock}>{props.price}</td>
        </tr>
    );
};

/**
 * Filters a given array of products by the following criteria:
 *
 * @param {*} products an array of product objects
 * @param {*} category the category to be filtered by
 * @param {*} filterText the user entered input from the search bar
 * @param {*} inStockOnly the user selected input from the checkbox
 * @param {*} sort the user selected sorting
 */
function filterProducts(products, category, filterText, inStockOnly, sort) {
    let filteredProducts = products.filter((product) => product.category === category);

    if (filterText) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toUpperCase().includes(filterText.toUpperCase())
        );
    }

    if (inStockOnly) {
        filteredProducts = filteredProducts.filter((product) => product.stocked);
    }

    if (sort) {
        filteredProducts.sort((a, b) => {
            let aPrice;
            let bPrice;
            switch (sort) {
                case 'Name/asc':
                    if (a.name < b.name) return -1;
                    return a.name > b.name ? 1 : 0;

                case 'Name/desc':
                    if (a.name > b.name) return -1;
                    return a.name < b.name ? 1 : 0;

                case 'Price/asc':
                    aPrice = parseFloat(a.price.replace('$', ''));
                    bPrice = parseFloat(b.price.replace('$', ''));

                    if (aPrice < bPrice) return -1;
                    return aPrice > bPrice ? 1 : 0;

                case 'Price/desc':
                    aPrice = parseFloat(a.price.replace('$', ''));
                    bPrice = parseFloat(b.price.replace('$', ''));

                    if (aPrice > bPrice) return -1;
                    return aPrice < bPrice ? 1 : 0;

                default:
                    break;
            }
            return 0;
        });
    }

    return filteredProducts;
}

const ProductTable = (props) => {
    const productsPerCategory = categories.map((category) => {
        return (
            <Fragment key={category}>
                <ProductCategoryRow title={category} />
                {filterProducts(props.products, category, props.filterText, props.inStockOnly, props.sort).map(
                    (product) => {
                        return (
                            <ProductRow
                                key={product.name}
                                name={product.name}
                                price={product.price}
                                stocked={product.stocked}
                            />
                        );
                    }
                )}
            </Fragment>
        );
    });
    return (
        <table className="center bg-gray-200 rounded-sm w-full" style={tableStyle}>
            <thead>
                <tr>
                    <th style={cellStyle}>
                        <Button
                            onClick={props.onSortChange}
                            value="Name"
                            endContent={
                                props.sort.includes('Name') ? (
                                    props.sort.includes('asc') ? (
                                        <ChevronDownIcon
                                            className="h-5 w-5"
                                            onClick={props.onSortChange}
                                            value="Name"
                                        />
                                    ) : props.sort.includes('desc') ? (
                                        <ChevronUpIcon className="h-5 w-5" onClick={props.onSortChange} value="Name" />
                                    ) : null
                                ) : (
                                    <ChevronUpDownIcon className="h-5 w-5" onClick={props.onSortChange} value="Name" />
                                )
                            }
                        >
                            Name
                        </Button>
                    </th>
                    <th style={cellStyle}>
                        <Button
                            onClick={props.onSortChange}
                            value="Price"
                            endContent={
                                props.sort.includes('Name') ? (
                                    props.sort.includes('asc') ? (
                                        <ChevronDownIcon
                                            className="h-5 w-5"
                                            onClick={props.onSortChange}
                                            value="Name"
                                        />
                                    ) : props.sort.includes('desc') ? (
                                        <ChevronUpIcon className="h-5 w-5" onClick={props.onSortChange} value="Name" />
                                    ) : null
                                ) : (
                                    <ChevronUpDownIcon className="h-5 w-5" onClick={props.onSortChange} value="Name" />
                                )
                            }
                        >
                            Price
                        </Button>
                    </th>
                </tr>
            </thead>
            <tbody>{productsPerCategory}</tbody>
        </table>
    );
};

const SearchBar = (props) => {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap justify-between items-center">
            <div className="w-[60%] ml-2">
                <Input
                    radius="lg"
                    classNames={{
                        label: 'text-black/50 dark:text-white/90',
                        input: [
                            'bg-transparent',
                            'text-black/90 dark:text-white/90',
                            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                        ],
                        innerWrapper: 'bg-transparent',
                        inputWrapper: [
                            'shadow-xl',
                            'bg-default-200/50',
                            'dark:bg-default/60',
                            'backdrop-blur-xl',
                            'backdrop-saturate-200',
                            'hover:bg-default-200/70',
                            'dark:hover:bg-default/70',
                            'group-data-[focus=true]:bg-default-200/50',
                            'dark:group-data-[focus=true]:bg-default/60',
                            '!cursor-text',
                        ],
                    }}
                    onChange={props.onTextChange}
                    type="email"
                    placeholder="e.g. 'Football'"
                    startContent={
                        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                />
            </div>
            <div className="my-2 w-[30%]">
                <Switch type="checkbox" isSelected={props.inStockOnly} onChange={props.onCheckChange}>
                    <span className="text-sm">Only show products in stock</span>
                </Switch>
            </div>
        </div>
    );
};

const FilterableProductTable = () => {
    const [filterText, setFilterText] = React.useState('');
    const [inStockOnly, setInStockOnly] = React.useState(false);
    const [sort, setSort] = React.useState('');

    const onSortChange = (e) => {
        let sorting;
        if (sort.includes('asc')) {
            sorting = 'desc';
        } else {
            sorting = 'asc';
        }
        setSort(`${e.target.value}/${sorting}`);
    };

    const onTextChange = (e) => {
        setFilterText(e.target.value);
    };

    const onCheckChange = () => {
        setInStockOnly((prevValue) => !prevValue);
    };

    console.log(sort);

    return (
        <div className="rounded-md border-2 border-gray-300">
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onTextChange={onTextChange}
                onCheckChange={onCheckChange}
            />
            <ProductTable
                products={data}
                filterText={filterText}
                inStockOnly={inStockOnly}
                onSortChange={onSortChange}
                sort={sort}
            />
        </div>
    );
};

export default FilterableProductTable;
