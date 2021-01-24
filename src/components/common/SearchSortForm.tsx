import React, {useCallback} from "react";
import debounce from 'lodash/debounce';
import {
    SearchField,
    SortByFieldSelect,
    SortByDirectionSelect
} from '../../types';
import {Input} from "../uiKit/Input";
import {Select} from "../uiKit/Select";

const TIME_OUT = 700;

const searchFieldProps: SearchField = {
    name: 'searchField',
    placeholder: 'Поиск по товарам',
    value: ''
}

const sortByFieldSelectProps: SortByFieldSelect = {
    name: 'sortByField',
    options: [
        {
            id: 'sort-field-1',
            name: 'По названию',
            value: 'name',
        },
        {
            id: 'sort-field-2',
            name: 'По цене',
            value: 'price'
        },
    ]
}

const sortByDirectionSelectProps: SortByDirectionSelect = {
    name: 'sortByDirection',
    options: [
        {
            id: 'sort-direction-1',
            name: 'По возрастанию',
            value: 'asc'
        },
        {
            id: 'sort-direction-2',
            name: 'По убыванию',
            value: 'desc'
        },
    ]
}

interface Props {
    onSearch: (value: string) => void,
    onSortByField: (value: string) => void,
    onSortByDirection: (value: string) => void,
}

export const SearchSortForm = (props: Props) => {
    const { onSearch, onSortByField, onSortByDirection } = props;

    const debouncedSearch = useCallback(debounce((evt: React.ChangeEvent<HTMLInputElement>) => {
        const target = evt.target as HTMLInputElement;
        onSearch(target.value);
    }, TIME_OUT), [])

    const onChangeSortByField = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        onSortByField(evt.target.value);
    }
    const onChangeSortByDirection = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        onSortByDirection(evt.target.value);
    }

    return(
        <form onSubmit={e => e.preventDefault()} className="form uk-margin-large-top uk-margin-medium-bottom">
            <Select
                onChange={onChangeSortByField}
                name={sortByFieldSelectProps.name}
                options={sortByFieldSelectProps.options}
            />
            <Select
                onChange={onChangeSortByDirection}
                name={sortByDirectionSelectProps.name}
                options={sortByDirectionSelectProps.options}
            />
            <Input
                onChange={debouncedSearch}
                value={searchFieldProps.value}
                name={searchFieldProps.name}
                placeholder={searchFieldProps.placeholder}
            />
        </form>
    )
}