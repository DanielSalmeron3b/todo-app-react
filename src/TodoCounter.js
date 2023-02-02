import React from 'react';

const someStyles = {
    color: 'blue',
    backgroundColor: 'pink',
};

function TodoCounter(){
    return (
    <h2 style={someStyles} >Has completado 2 de 3 ToDos</h2>
    );
};

export { TodoCounter };