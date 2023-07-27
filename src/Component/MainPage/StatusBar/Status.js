import React, { Component } from 'react'
import { Paper } from '@mui/material';
class Status extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Paper className='statusbar_status'/>
            </div>
         );
    }
}
 
export default Status;