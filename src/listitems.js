import React from 'react';
import './listitems.css' ; 



function Listitems (props) {
    
        const listItems = props.items;
           console.log(listItems)
        const newListItems = listItems.map(item => {
                return (
                    <div className="list" key={item.key}>
                        <p>
                            <input type="text"  value={item.text}
                            onChange= {e =>{ 
                                props.setUpdate(e.target.value , item.key)
                            }
                            }
                            />
                      
                        </p> 
                    </div>
                )
        })
    return (
        <div>{newListItems}</div>
    )
}

export default Listitems;