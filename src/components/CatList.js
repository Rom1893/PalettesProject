import React, { Component } from 'react'
import "../css/CatList.css"

class CatList extends Component {


    render() {

        return (
            <div className='DogList'>               
                <h1 className='display-1 text-center'>I'm a CatList</h1>
                <div className="container">
                    <div className='row'>
                        {this.props.cats.map(m =>(
                            <div className='col-lg-4 text-center' key={m.name}>
                                <img src={m.src}></img>
                                <h3>{m.name}</h3>
                            </div>
                        ))}                      
                    </div>
                </div>
            </div>
        )
    }
}

export default CatList;
