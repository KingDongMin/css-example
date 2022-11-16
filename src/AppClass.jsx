import React, { Component } from 'react';
import Counter from './basic/components/Counter';

class AppClass extends Component {
    state = { count: 0 };

    onClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    componentDidMount() {
        console.log('컴포넌트가 마운트됨');
    }

    componentWillUnmount() {
        console.log('컴포넌트가 곧 언마운트 됨');
    }
    render() {
        return (
            <div>
                <div>
                    Totlal Count : {this.state.count}{' '}
                    {this.state.count > 10 ? '💨' : '💥'}
                </div>
                <div>
                    <Counter
                        total={this.state.count}
                        onClick={this.onClick}
                    ></Counter>
                    <Counter
                        total={this.state.count}
                        onClick={this.onClick}
                    ></Counter>
                </div>
            </div>
        );
    }
}

export default AppClass;
