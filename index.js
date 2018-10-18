import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss';

class Hello extends React.Component {
    state = {
        show: false
    }

    handleClick() {
        this.setState({
            show: !this.state.show
        });
    }
    render () {
        return <div className={style.test}>
            <button onClick={this.handleClick.bind(this)}>Click me!</button>
            {
                this.state.show ? 'Hello world' : ''
            }
        </div>
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('app')
);