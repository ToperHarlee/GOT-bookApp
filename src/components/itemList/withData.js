import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';
import PropTypes from 'prop-types';
import gotService from '../../services/gotService';


//компоненты высшего порядка --> перепройти урок
const withData = (View , getData ) => {

    return class extends React.Component {
        state = {
            data: null
        }

        componentDidMount() {
            //const { getData } = this.props;
            getData()
                .then(data =>
                    this.setState({ data })
                );
        }

        render() {
            const { data } = this.state;
            if (!data) {
                return <Spinner />
            }
            return <View {...this.props} data={data}/>
        }
    };
}

export default withData;



