import { useState } from 'react';

const Card = ({children, classNameName}) => {

    const [value, setValue] = useState(0)

    function Incrementar(){
        setValue(value + 1); 
    };

    function Decrementar(){
        setValue(value - 1); 
    };

    return (
        <div className="card">
            <div className="card-header">
                My first Card
            </div>
            <div className="card-body">
            <button 
                type="button" 
                class="btn btn-success" 
                onClick = {Incrementar}
            >
                Adicionar
            </button>

            <button 
                type="button" 
                class="btn btn-primary"
                onClick= {Decrementar}
            >
                Disminuir
            </button>

            <p>{value}</p>
            </div>
        </div>
    )
  }
  
  export default Card;