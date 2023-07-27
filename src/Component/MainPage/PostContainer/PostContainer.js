import React, { Component } from 'react'
import Post from './Post';
import "./PostContainer.css"
class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : []
         }
    }

    getData=()=>{
        let json = [
            {
                "post_id":1,
                "user_id" : 12345678,
                "user_img" : "url..",
                "user_name" : "Sunidhi ",
                'description' : 'Loved this wallpaper...',
                "post_img":'url of the image',
                "like" : "25"
            },
            {
                "post_id":1,
                "user_id" : 12345678,
                "user_img" : "url..",
                "user_name" : "Sukriti ",
                'description' : 'Loved this view...',
                // "post_img":'url of the image',
                "like" : "125"
            }
        ]
        this.setState({data: json});
    }

    componentDidMount(){
        this.getData();
    }
    
    render() { 
        return (  
            <div>
                {
                    this.state.data.map((item)=>{
                        return (
                        <Post object={item}/>
                    )})
                   
                }
                
            </div>
        );
    }
}
 
export default PostContainer;