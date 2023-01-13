import React, {Component} from 'react'
import { withRouter } from './hoc/withRouter';


// class component
class Posts extends Component {

    render(){
        console.log(this.props)

        return(
         <>
          posts
         </>

            )
    }
}


export default withRouter(Posts)