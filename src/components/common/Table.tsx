import React from "react";
import {Product} from "../../types";

interface Props {
    data: Product[]
}

export const Table = (props: Props) => {
    return(
        <div className="uk-overflow-auto">
            <table className="uk-table uk-table-small">
                <thead>
                <tr>
                    <th className="uk-table-shrink">Фото</th>
                    <th className="uk-table-expand">Название</th>
                    <th className="uk-width-small">Цена</th>
                </tr>
                </thead>
                <tbody>
                {props.data.map((product: Product) => (
                    <tr key={product.name}>
                        <td><img className="uk-preserve-width" width="50" height="50" src={product.image} alt={product.name} /></td>
                        <td className="uk-text-left">{product.name}</td>
                        <td className="uk-text-left">{product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}