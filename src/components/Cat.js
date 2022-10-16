import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cat extends Component {


    render() {

        return (
            <div className='container'>
                <div className='DogDetails row justify-content-center mt-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='DogDetails-card card'>
                            <img className='card-img-top' src={this.props.cat.src} alt={this.props.cat.name}></img>
                            <div className='card-body'>
                                <h2 className='card-title'>{this.props.cat.name}</h2>
                                <h4 className='card-subtitle text-muted'>{this.props.cat.age} years old</h4>
                            </div>
                            <ul className='list-group list-group-flush'>
                                {this.props.cat.facts.map((m, i) => (
                                    <li className='list-group-item' key={i}>{m}</li>
                                ))}
                            </ul>
                            <div className='card-body'>
                                <Link className='btn btn-success' to="/cats">Go back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cat;
