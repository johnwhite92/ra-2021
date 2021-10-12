import { Component } from "react";
import { ButtonRegularOutline } from "./buttons";

export class ParagrapheClass extends Component {

    constructor() {
        super();
        console.log("constructor");
    }

    render() {
        return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo cum similique ducimus voluptas ea nemo suscipit consectetur quibusdam! Magni culpa est rerum ab. Nulla voluptates accusamus corporis, quibusdam commodi sequi!
        <ButtonRegularOutline>Outline button</ButtonRegularOutline></p>
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

}