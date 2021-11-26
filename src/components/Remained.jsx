import React from 'react';

const Remained = ({length}) => {
    const whatTextToshow = () => {
        if(length === 0 || length === '0'){
        return 'Add tasks using this button:'
        }else if(length === 1 || length === '1'){
            return 'Only one task left'
        }else{
            return `You have ${length} remained tasks!`
        }
    }
    
    return ( 
        <span>{whatTextToshow()}</span>
     );
}
 
export default Remained;