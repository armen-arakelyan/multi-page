import React from 'react';
import Body from './Body'

    function Header (){
        return <div>
            <div className="home_page_picture" style={{backgroundImage:`url('https://images.pexels.com/photos/3634855/pexels-photo-3634855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`}}>
            <div className="picture_opacity">
            <div className="picture-text">
                <h2>This is my web page</h2>
                <p>This web page i created for you</p>
            </div>
            </div>
            </div>
            <Body />
        </div>
}

export default Header;