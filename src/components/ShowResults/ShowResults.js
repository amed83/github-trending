
import React, { Component }from 'react'
import classes from './showresults.css'
import Sort from '../../containers/Sort/Sort'
import star from '../../img/star.png'


class Showresult extends Component{
        constructor(props){
            super(props)
        }
        state={
            sortedValue:"name",
        }
    myCallBack(dataFromChild){
        this.setState({
            sortedValue:dataFromChild,
        })

    }
    render(){
            const compare =(a,b)=>{
                const {sortedValue} =this.state
                if(sortedValue==='name'){
                    return a.name<b.name
                }
                if(sortedValue==='owner'){
                    return a.owner.login.toLowerCase()>b.owner.login.toLowerCase()
                }
                if(sortedValue==='stars')
                    return a.stargazers_count<b.stargazers_count
            }
        let sorted = this.props.data
        const starStyle={
            fontSize: '7px',
            color:'rgb(126, 125, 120)',
            marginLeft:'4px',
            marginTop:'3.5px'
        }
        let list= sorted.sort(compare).map(user=>{
                return(
                        <main key={user.id} className={classes.main}>
                            <div> <img className={classes.avatarImg}src={user.owner.avatar_url}/> </div>
                            <div className={classes.repoOwner}> {user.owner.login }/
                                <div className={classes.repoTitle}>{user.name}</div>
                                <img className={classes.starImg}src={star}/>
                                <div style={starStyle}>{user.stargazers_count}</div>
                            </div>
                            <div className={classes.repoDescription}>{user.description}</div>
                        </main>
                    )
        })
        return(
                <div className={classes.mainContainer}>
                        <div className={classes.resultList}>
                            {list}
                        </div>
                        <div className={classes.sortOptions}>
                            <Sort callBackFromParent={this.myCallBack.bind(this)}/>
                        </div>
              </div>
        )
    }
}

export default Showresult
