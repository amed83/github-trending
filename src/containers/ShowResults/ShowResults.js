
import React, { Component }from 'react'
import classes from './showresults.css'
import Sort from '../Sort/Sort'
import star from '../../img/star.png'

class Showresult extends Component{

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
                    return a.name.toLowerCase()>b.name.toLowerCase()
                }
                if(sortedValue==='owner'){
                    return a.owner.login.toLowerCase()>b.owner.login.toLowerCase()
                }
                if(sortedValue==='stars')
                    return a.stargazers_count<b.stargazers_count
            }

        const starStyle={
            fontSize: '7px',
            color:'rgb(126, 125, 120)',
            marginLeft:'4px',
            marginTop:'3.5px'
        }
        const peopleStyle={
            color:'rgb(91, 92, 90)',
            width:'20px',
            height:'20px'

        }
        let sorted = this.props.data
        let list= sorted.sort(compare).map(item=>{

                return(
                        <div key={item.id} className={classes.main}>
                            <div> <img className={classes.avatarImg}src={item.owner.avatar_url} alt="avatar"/> </div>
                            <div className={classes.repoOwner}> {item.owner.login }/
                                <div >{item.name}</div>
                                <img className={classes.starImg}src={star} alt="star"/>
                                <div style={starStyle}>{item.stargazers_count}</div>
                                <div className={classes.contributors}>
                                <i className="fas fa-users" style={peopleStyle}></i>
                                    <div className={classes.counter}>{item.countContr} Contributors</div>
                                </div>

                            </div>

                            <div className={classes.repoDescription}>{item.description}</div>
                        </div>
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
