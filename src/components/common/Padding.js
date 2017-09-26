import React, {PropTypes} from 'react';
import {Text} from 'react-native'; 

class Padding extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var dots = '';
        for(var i=0; i < this.props.size; ++i) {
            dots += ' ';
        }

        return (
            <Text>
                {dots}
            </Text>
        );
    }
}

Padding.propTypes = {
    size: PropTypes.number.isRequired
};

export default Padding;