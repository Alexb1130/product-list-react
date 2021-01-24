import React from "react";

interface Props {
    prevPage: string | boolean,
    currentPage: string | number,
    nextPage: string | boolean,
    onNextPage: () => void,
    onPrevPage: () => void,
}

export const Pagination = (props: Props) => {

    const { prevPage, nextPage, currentPage, onNextPage, onPrevPage } = props;

    const onClickPrevPage = (evt: React.SyntheticEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        onPrevPage();
    }
    const onClickNextPage = (evt: React.SyntheticEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        onNextPage();
    }

    return(
        <ul className="uk-pagination uk-flex-center uk-margin-medium-top">
            <li>
                <a onClick={onClickPrevPage} href="#" className={!prevPage ? 'uk-disabled' : '' }>
                    <span>{'<'}</span>
                </a>
            </li>
            <li className="uk-active">
                <span>{currentPage}</span>
            </li>
            <li>
                <a onClick={onClickNextPage} href="#" className={!nextPage ? 'uk-disabled' : ''}>
                    <span>{'>'}</span>
                </a>
            </li>
        </ul>
    )
}