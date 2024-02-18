import React from 'react';
import './center2.css';
import center2img from './center2img.png';

function Center2 (){
    return(
        <div className='center2'>
            <div class="logo2">
                <img src={center2img}></img>
            </div>
            <div class="head21" >
            Bring the best of open source to you, your team, and your company
            </div>
            <div class="para22">
            Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.
            </div>
        </div>
    );
}

export default  Center2;