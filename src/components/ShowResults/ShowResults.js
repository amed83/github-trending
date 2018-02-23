
import React, { Component }from 'react'
import classes from './showresults.css'
import Sort from '../../containers/Sort/Sort'

class Showresult extends Component{
        constructor(props){
            super(props)
        }
        state={
            listDataFromChild:""
        }

    myCallBack(dataFromChild){
        console.log('hello my callbackkkk',dataFromChild)
        this.setState({
            listDataFromChild:dataFromChild
        })
    }
    render(){

        function compare(a,b){
            return a.stargazers_count<b.stargazers_count
        }
        let sorted = this.props.data.sort(compare)
        const users = sorted.map(user=>{
            return(
                <main key={user.id} className={classes.main}>
                <div className={classes.repoTitle}>{user.name}</div>
                <div className={classes.repoOwner} >{user.owner.login}</div>
                <div className={classes.repoDescription}>{user.description}</div>
                <div>{user.stargazers_count}</div>
                </main>
            )
        })
        return(
                <div className={classes.usersList}>
                     {users}
                <Sort callBackFromParent={this.myCallBack.bind(this)}/>
                </div>
        )
    }
}

export default Showresult
// {users}
