import React from "react";

class ClickAwayListener extends React.Component {
    node = undefined;
    handleClickAway = e => {
        if (this.node.contains(e.target)) {
            return;
        }
        if (this.props.nodeRef && this.props.nodeRef.contains(e.target)) {
            return;
        }
        this.props.onClickAway();
    };

    componentDidMount() {
        window.addEventListener("click", this.handleClickAway, true);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClickAway, true);
    }

    render() {
        return (
            <div ref={ref => (this.node = ref)}>
                {this.props.children}
            </div>
        )
            ;
    }
}

export {ClickAwayListener};