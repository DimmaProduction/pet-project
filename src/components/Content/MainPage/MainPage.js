import React, { useState } from 'react';
import css from "./MainPage.module.css";
import BlockProfile from '../Blocks/BlockProfile';
import Modal from '../../Modal/Modal';

import imgEditBtn from '../../../img/edit.svg';
import imgDeleteBtn from '../../../img/delete.svg';
import imgCreateBtn from '../../../img/Group.svg';



const MainPage = (props) => {
  //first MODAL WINDOW
  const [state, setState] = useState(false);
  const [gender, setGender] = useState('Male');

  //second MODAL WINDOW
  const [stan, setStan] = useState(false);
  const [role, setRole] = useState('Admin');


  let NAME = React.createRef();
  let DATE = React.createRef();
  let CITY = React.createRef();

  let USERNAME = React.createRef();
  let EMAIL = React.createRef();

  let toggleModal = () => {
    setState(!state);
  };

  let toggleModal2 = () => {
    setStan(!stan);
  }

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
  // let blocks = props.users.map(bl => <Block id={bl.id} name={bl.name} man={bl.man} date={bl.date} city={bl.city}/>);
  

  let updateMyProfile = () => {
    let username = USERNAME.current.value;
    let email = EMAIL.current.value;

    props.updateMyProfile(username, email, role);
  }

  let clickEdit = () => {
    toggleModal2();
  }

  let clickDelete = () => {
    alert('delete');
  }

  return (
    <div>
        <div className={css.bg}></div>
        <div className={css.content}>

        <div className={css.userInfo}>
            <h2>{props.myProfile.username}</h2>
            <h2>{props.myProfile.email}</h2>
            <h3>{props.myProfile.role}</h3>

            <div className={css.btn}>
              <button onClick={clickEdit} className={css.btnEdit}><img src={imgEditBtn} alt='edit'></img></button>
              {/* <button onClick={clickEdit} className={css.btnEdit} id={css.btnE}>edit&ensp;</button> */}
              <button onClick={clickDelete} className={css.btnDelete}><img src={imgDeleteBtn} alt='del'></img></button>
            </div>
          
        </div>

        
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

        <div>
          {stan &&
            <Modal onClose={toggleModal2} onSubmit={toggleModal2}>
                <form>
                    <div className={css.inputForm}>
                        <p>username:</p>
                        <input onChange={updateMyProfile} ref={USERNAME} value={props.myProfile.username} required></input>
                    </div>
                    <div>
                        <p>email:</p>
                        <input onChange={updateMyProfile} ref={EMAIL} value={props.myProfile.email} required></input>
                      </div>
                    <div>
                      <p>role:</p>  
                      <label> <input type="radio" value="Admin" checked={role === 'Admin'} onClick={() => {setRole('Admin'); }} /> Admin </label>
                      <label> <input type="radio" value="User" checked={role === 'User'} onClick={() => {setRole('User'); }} /> User </label>
                    </div>
                </form>
            </Modal>
          }
        </div>

        {/* //MODAL WINDOW for add and edit profiles */}
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

export default MainPage;
