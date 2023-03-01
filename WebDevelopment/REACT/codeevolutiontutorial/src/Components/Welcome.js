import React, { Component } from "react";

export class Welcome extends Component{
    render(){
        return(
            <>
            <div>
                <p>Welcome {this.props.personData.name} a.k.a {this.props.superhero}</p>
            </div>
            </>
        )
    }
}