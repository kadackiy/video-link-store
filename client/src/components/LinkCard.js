import React, { Fragment } from 'react';

export const LinkCard = ({ link }) => {

    return (
        <Fragment>
           <h2>Ссылка</h2>

            <p>Ваша ссылка: <a href={ link.to } target='_blank' rel='noopener noreferrer'>{ link.to }</a></p>
            <p>Откуда ссылка: <a href={ link.from } target='_blank' rel='noopener noreferrer'>{ link.from }</a></p>
            <p>Колическтво клииков по ссылке: <strong>{ link.clicks }</strong></p>
            <p>Дата создания: <strong>{ new Date(link.date).toLocaleDateString() }</strong></p>
        </Fragment>
    )
}