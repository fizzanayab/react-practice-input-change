import { Component } from "react";


import './SocialMedia.css'

class SocialMedia extends Component{
    render(){

        const {icon_name} = this.props

        return(
            <li>
                <i class={`fa fa-${icon_name}`} aria-hidden="true"></i>
            </li>
        )
    }
}

export default SocialMedia;