import React from 'react';
import { useParams } from 'react-router-dom';

function Item() {
  const { id } = useParams();

  React.useEffect(() => {
    if(id) {
        
    }
  }, [id]);

  return (
    <div className="">
        je suis {id ?? 'test'}
    </div>
  );
}

export default Item;