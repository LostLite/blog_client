import React, { Component } from 'react';
import './styles.scss';

export default class index extends Component {

    render() {
        const {header, desc} = this.props;

        if(!header){
            return null;
        }
        return (
            <div data-test="headlineComponent">
                <h1 data-test='headerNotice'>{header}</h1>
                <p data-test='headerDescription'>
                    {desc}
                </p>
            </div>
        )
    }
}
