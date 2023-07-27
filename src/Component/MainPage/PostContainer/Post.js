import React, { Component } from 'react'
import "./PostContainer.css"
import { Avatar, Paper } from '@mui/material';
import post from "../../../images/post.jpeg";
import like from "../../../images/like.png";
import likebutton from "../../../images/likebutton.png";
import commentbutton from "../../../images/comment.png";
import sharebutton from "../../../images/share.png";
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    isImageAvailable=(data)=>{
        return data=="" ? false:true;
    }
    
    render() { 
        return ( 
            <div>
                <Paper className="post_container" >
                    {/*header*/}
                    <div className='post_header'>
                        <div className='post_header_img'>
                            <Avatar className='post_img'/>
                        </div>
                        <div className='post_header_text'>{this.props.object.user_name}</div>
                    </div>
                     {/*description*/}
                     <div className='post_description'>{this.props.object.description}</div>
                      {/*image*/}
                    <div className='post_image'>
                        {
                            this.isImageAvailable ?   <img src={this.props.object.post_img} width="600px"></img> :<span></span>
                        }
                       
                    </div>
                     {/*like count*/}
                     <div className='post_likeCountContainer'>
                        <div className='post_like'>
                            <img className="post_img" src={like}/>
                        </div>
                        <div className='post_likecount'>{this.props.object.like}
                        </div>
                     </div>
                      {/*like share box*/}
                    <div className='post_likeShare'>
                        <div className='post_tab'>
                     <div className='post_tabfirst'>
                        <img className='post_tabimg' src={likebutton}></img>
                     </div>
                     <div className='post_tabtext'>
                        Like
                     </div>
                        </div>

                        <div className='post_tab'>
                            <div className='post_tabfirst'>
               <img className='post_tabimg' src={commentbutton}/>
                            </div>
                            <div className='post_tabtext'>
                                Comment
                            </div>
                        </div>

                        <div className='post_tab'>
                            <div className='post_tabfirst'>
               <img className='post_tabimg' src={sharebutton}/>
                            </div>
                            <div className='post_tabtext'>
                                Share
                            </div>
                        </div>

                    </div>
                     {/*comment box*/}
                     <div className='upload_comment'>
                     <div className='upload_top' >
                <div>
                    <Avatar className='upload_img'/>
                </div>
                <div>
                    <input className='upload_box'  placeholder="Write a Comment" type="text"/>
                </div>
                     </div>
                     </div>
                </Paper>
            </div>
         );
    }
}
 
export default Post;