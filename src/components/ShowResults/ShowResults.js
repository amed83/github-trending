
import React, { Component }from 'react'
import classes from './showresults.css'
import Sort from '../../containers/Sort/Sort'

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
        let users= sorted.sort(compare).map(user=>{
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
                <div>
                    <div className={classes.usersList}>
                        {users}
                    </div>
                    <div className={classes.sortOptions}>
                        <Sort callBackFromParent={this.myCallBack.bind(this)}/>
                    </div>
                </div>
        )
    }
}

export default Showresult
// const compare =(a,b)=>{
//     console.log('this.props.data',this.props.data)
//     const {sortedValue} =this.state
//     let objValue
//     switch(sortedValue){
//         case 'Name':
//             objValue='name'
//             return b.objValue<a.objValue
//             break;
//         case 'owner':
//             objValue='owner.login'
//             return b.objValue<a.objValue
//             break;
//         case 'star':
//             objValue='stargazers_count'
//             return b.objValue<a.objValue
//             break;
//     }
// }
// let sorted=[]
// sorted= this.props.data.sort(compare)
// console.log('sorted',sorted);
// let users = this.props.data.sort(compare).map(user=>{
//     return(
//         <main key={user.id} className={classes.main}>
//             <div className={classes.repoTitle}>{user.name}</div>
//             <div className={classes.repoOwner} >{user.owner.login}</div>
//             <div className={classes.repoDescription}>{user.description}</div>
//             <div>{user.stargazers_count}</div>
//         </main>
//     )
// })

// let arr = [4,5,8,914,125,78]
// const compare =(a,b)=>{
//     const {sortedValue} =this.state
//     switch(sortedValue){
//         case 'name':
//             return a-b
//             break;
//         case 'owner':
//             return b-a
//             break;
//         }
// }
// let sorted= this.props.data
// sorted.sort(compare)
// console.log('sorted',sorted);
// let users= sorted.map(num=>{
//     return(
//         <div>
//             {num}
//         </div>
//     )
// })
