import React, { Component } from 'react'
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component{
    state = {
        boxes: []
    };

    render () {
        return (
            <div>
                <BoxForm />
                <ul>
                    {this.state.boxes.map(item => (
                        <li>
                            <Box height={item.height} width={item.width} bgColor={item.bgColor}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BoxList;