import React, { Component } from 'react';

interface Props {
    item: string;
}
interface State {
    item: string;
}
export default class Bai2 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            item: ""
        };
    }
    show = () => {
        this.setState({ item: "Component đã được mount!" });
    }

    render() {
        return (
            <div>
                <h4>Bai2</h4>
                <p>hiện ra: {this.state.item}</p>
                <button onClick={this.show}>show</button>
            </div>
        );
    }
}


