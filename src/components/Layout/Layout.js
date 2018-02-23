import React from 'react'
import classes from './layout.css'

const layout =(props) =>(

        <div>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>


)


export default layout
