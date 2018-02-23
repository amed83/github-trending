
import React from 'react'
import classes from './showresults.css'

const showresult =(props)=>{
    const copied = [...props.data]
    
    function compare(a,b){
        return a.stargazers_count<b.stargazers_count
    }

    let sorted = props.data.sort(compare)


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
        </div>

    )
}

export default showresult
