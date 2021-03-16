import React from 'react';
import Moment from 'moment';

const Links = (props) => {
    const { link } = props;

    return (
        <div>
            <div>
                {link.id}) {link.description} ({link.url}) {Moment(link.createdAt).format('MMMM Do YYYY')}
            </div>
        </div>
    );
};

export default Links;
