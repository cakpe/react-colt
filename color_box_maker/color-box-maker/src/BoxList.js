import React, { Component } from 'react'
import Box from './Box';
import BoxForm from './BoxForm';
import uuid from 'react-uuid';

class BoxList extends Component{
    state = {
        boxes: []
    };

    addBox = (box) => { //the box parameter will come from the BoxForm state
        let newBox = { ...box, id: uuid() };
        this.setState(state => ({
            boxes: [...state.boxes, newBox]
        }));
    }

    removeBox = (id) => {
        this.setState(state => ({
            boxes: state.boxes.filter(box => box.id !== id)
        }));
    }

    render () {
        return (
            <div>
                <BoxForm addBox={this.addBox}/>
                <ul>
                    {this.state.boxes.map(item => (
                        <li key={item.id}>
                            <Box height={item.height} width={item.width} bgColor={item.bgColor} removeBox={this.removeBox} id={item.id}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BoxList;