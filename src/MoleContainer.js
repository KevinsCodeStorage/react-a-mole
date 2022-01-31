import Mole from './Mole'
import EmptySlot from './EmptySlot'
import {useState} from 'react'


function MoleContainer(props){
    let [displayMole, setDisplayMole]= useState(false)
    
    function bop(){
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }


    return (
        <div>
            {(displayMole ? <Mole bop={bop}/> : <EmptySlot displayMole={displayMole}/>)}
        </div>
    )
}
export default MoleContainer