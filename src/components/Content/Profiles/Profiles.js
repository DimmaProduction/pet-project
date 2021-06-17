import React, { useState } from 'react';
import css from "./Profiles.module.css";
import BlockProfile from '../Blocks/BlockProfile';
import Modal from '../../Modal/Modal';

// import imgCreateBtn from '../../../img/Group.svg';
import imgCreateBtn from '../../../img/Group.png';

const Profiles = (props) => {

  const [state, setState] = useState(false);
  const [gender, setGender] = useState('Male');

  let NAME = React.createRef();
  let DATE = React.createRef();
  let CITY = React.createRef();


  let toggleModal = () => {
    setState(!state);
  };

  let updateProfile = () => {
    let name = NAME.current.value;
    let date = DATE.current.value;
    let city = CITY.current.value;

    props.updateNewProfile(name, gender, date, city);
  }

  let changeFuncOnEdit = (id) => {
    //func where i will change submit on edit button
    props.editProfile(id, setGender.bind(this));
    setState(!state);
  }

  let changeFuncOnAdd = () => {
    //func where i will change submit on add button
    props.submitAdd();
    setState(!state);
  }

  let deleteProfile = (id) => {
    props.deleteProfile(id);
  }

  let submitBtn = () => {
    props.submit();
    setState(!state);
  }

  let blocks = props.profiles.map(bl => <BlockProfile id={bl.id} name={bl.name} man={bl.man} date={bl.date} city={bl.city} clickEdit={changeFuncOnEdit.bind(this)} clickDelete={deleteProfile.bind(this)}/>);  

  return (
    <div>
        <div className={css.bg}></div>
        <div className={css.content}>

        {/* // NAME of BLOCK */}
        <div className={css.nameBlock}>
          <h2 className={css.name}>Profiles :</h2>
        </div>

        {/* //DRAWING EXISTED BLOCKS */}
        <div className={css.blocks}>
          {blocks}
          <div className={css.block}>
            <div className={css.blockForBtnPlus}>
              <button className={css.btnPlus} onClick={changeFuncOnAdd}><img src={imgCreateBtn} alt='fuck'></img></button>
              <h2>Create new profile</h2>
            </div>
          </div>
        </div>

        {/* //MODAL WINDOW */}
        <main>
          {state &&
            <Modal onClose={toggleModal} onSubmit={submitBtn}  disabled={props.disabled}>
                  <div className={css.inputForm}>
                    <p>name :</p>
                    <input onChange={updateProfile} ref={NAME} value={props.newProfile.name} required></input>
                  </div>
                  <div>
                    <p>gender :</p>  
                    <label> <input type="radio" value="Male" checked={gender === 'Male'} onClick={() => setGender('Male')} /> Male </label>
                    <label> <input type="radio" value="Female" checked={gender === 'Female'} onClick={() => setGender('Female')} /> Female </label>
                  </div>
                  <div>
                      <p>birthdate :</p>
                      <input onChange={updateProfile} ref={DATE} value={props.newProfile.date} type="date" min="1999-01-01" max="2021-06-10" required></input>
                  </div>
                  <div>
                    <p>city :</p>
                    <input onChange={updateProfile} ref={CITY} value={props.newProfile.city} required></input>
                  </div>
            </Modal>
          }
        </main>

        </div>
    </div>
  );
}

export default Profiles;
