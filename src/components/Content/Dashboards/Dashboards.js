import React from 'react';
import css from "./Dashboards.module.css";
// import BlockUser from '../Blocks/BlockUser';


const Dashboards = (props) => {

  var count = 0;

  var usersCount = props.state.users.length;
  var profilesCount = props.state.profiles.length;
 
  props.state.users.forEach( (i) => {
    if (i.isEighteen) count++;
    console.log(i);
    console.log(count);
  })

  // let blocks = props.users.map(bl => <BlockUser id={bl.id} username={bl.username} email={bl.email} profiles={bl.profiles} />);  
  
  return (
  
    <div>
        <div className={css.bg}></div>
        <div className={css.content}>
    
        {/* // NAME of BLOCK */}
        <div className={css.nameBlock}>
          <h2 className={css.name}>Dashboards :</h2>
        </div>
    
        <div className={css.blocks}>
            <div className={css.blockOne}> 
                {/* //Users */}
                  <h3 className={css.text}>Users:</h3>
                  <h1 className={css.numbers}>{usersCount}</h1>
            </div>

            <div className={css.blockOne}> 
                {/* //profiles */}
                <h3 className={css.text}>Profiles:</h3>
                <h1 className={css.numbers}>{profilesCount}</h1>
            </div>

            <div className={css.blockTwo}> 
                {/* //over 18 */}
                <h3 className={css.text}>Profiles over 18 years old:</h3>
                <h1 className={css.numbers}>{count}</h1>
            </div>
        </div>
    
        </div>
    </div>
  );
}

export default Dashboards;
