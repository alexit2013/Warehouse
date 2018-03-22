import React from 'react';
import CheckboxStyle from 'material-ui/Checkbox';

const styles = {
    block: {
        maxWidth: 350,
    },
    checkbox: {
        marginBottom: 16,
    },
};

export default  class CheckboxCustom  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: Boolean(props.checked)
        }
    }


    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
        if(this.props.handler)
            this.props.handler();
    }

    render() {
        return (

                <CheckboxStyle
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                    style={styles.checkbox}
                />

        );
    }
}
