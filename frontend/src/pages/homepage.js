import React from 'react';
import Card from '../components/card';

const Homepage = ({data}) => {

    return ( 
            <div className="card-container">
        
                {
                data.map((item) => (
                    <Card item={item}/>
                ))

                }
            </div>
     );
}
 
export default Homepage;