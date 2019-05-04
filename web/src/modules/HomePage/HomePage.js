import React, {Component, Fragment} from 'react';

import PopularNews from '../../components/PopularNews';
import RegularNews from '../../components/RegularNews';
import SelectCategory from "../../components/SelectCategory";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <PopularNews/>
                <RegularNews/>
                <SelectCategory/>
            </Fragment>
        );
    }
}

export default HomePage;
