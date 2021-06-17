import React from 'react';
import css from "./Users.module.css";
import BlockUser from '../Blocks/BlockUser';


const Users = (props) => {

  let blocks = props.users.map(bl => <BlockUser id={bl.id} username={bl.username} email={bl.email} profiles={bl.profiles} />);  

  return (
    <div>
        <div className={css.bg}></div>
        <div className={css.content}>
    
        {/* // NAME of BLOCK */}
        <div className={css.nameBlock}>
          <h2 className={css.name}>Users :</h2>
        </div>
    
        {/* //DRAWING EXISTED BLOCKS */}
        <div className={css.blocks}>
          {blocks}
        </div>
    
        </div>
    </div>
  );
}

export default Users;
