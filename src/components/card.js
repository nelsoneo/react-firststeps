import { useState } from 'react';
import Button from '../components/button';

const Card = ({children, classNameName}) => {

    const [value, setValue] = useState(0)

    function Incrementar(){
        setValue(value + 1); 
    }

    function Decrementar(){
        setValue(value - 1); 
    }

    return (
        <div className="card">
            <div className="card-header">
                My first Card
            </div>
            <div className="card-body">
                <Button 
                    className="btn btn-success"
                    onClick = {Incrementar}
                >
                    Adicionar
                </Button>
           
                <Button 
                    className="btn btn-primary"
                    onClick= {Decrementar}
                >
                    Disminuir
                </Button>
           
            <p>{value}</p>
            </div>
        </div>
    )
  };
  
  export default Card;