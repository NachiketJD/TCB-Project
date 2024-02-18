import React from 'react';
import './footer.css';

function Footer (){
    return (
        <div class="footer">
            <div class="logo_f">
                <div class="logo_f_ele">logo1</div>
                <div class="logo_f_ele">logo2</div>
            </div>
            <div class="support">
                <h3>SUPPORT</h3>
                <div class="support-ele">HELP</div>
                <div class="support-ele">ADVISOR</div>
                <div class="support-ele">STATUS</div>
                <div class="support-ele">CONTACT NPM</div>
            </div>
            <div class="company">
                <h3>COMPANY</h3>
            <div class="company-ele">ABOUT</div>
            <div class="company-ele">BLOG</div>
            <div class="company-ele">PRESS</div>
            </div>
            <div class="terms">
                <h3>TERMS</h3>
            <div class="terms-ele">POLICIES</div>
            <div class="terms-ele">TERMS AND USE</div>
            <div class="terms-ele">CODE OF CONDUCT</div>
            <div class="terms-ele">PRIVACY</div>
            </div>
        </div>
    );
}
export default Footer;