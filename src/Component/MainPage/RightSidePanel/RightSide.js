import React, { Component } from 'react'
import "./RightSide.css"
import ImageLayout from "../ImageLayout";
import covid from "../../../images/covid.png";
import groups from "../../../images/groups.png";
import memories from "../../../images/memories.png";
import messengerkids from "../../../images/messengerkids.png";
import ads from "../../../images/ads.png";
import admanager from "../../../images/admanager.png";
import blood from "../../../images/blood.png";
import business from "../../../images/business.png";
class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    
    getData = () => {
        let jsondata = [
          {
           "text":"Sunidhi"
    
          },
         
          {
    
            "image":covid,
            "text": "COVID-19 Information Centre"
          },
          {
            "image": groups,
            "text": "Friends"
          },
          {
             "image": memories,
            "text": "Memories"
          },
          {
            "image" : messengerkids,
            "text":"Messenger Kids"
          },
          {
            "image" : ads,
            "text": "Ad Centre"
          },
          {
            "image" : admanager,
            "text" : "Ads Manager"
          },
          {
            "image" : blood,
            "text"  :"Blood Donations"
          },
          {
            "image" : business,
            "text" : "Business Manager"
          }
        ];
        this.setState({ data: jsondata });
      }
      componentDidMount() {
        this.getData();
      }
    render() { 
        return (  
            <div className='rightside_container'>
                <div className='rightside_header'>
                    Contacts
                </div>
                <div className='rightside_context'>
                {this.state.data.map( (items ) => {
       return   <ImageLayout image={items.image} text={items.text} />
        })}
        
                </div>
            </div>
        );
    }
}
 
export default RightSide;