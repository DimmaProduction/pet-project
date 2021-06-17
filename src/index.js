import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';


let drawTree = (state) => {
  ReactDOM.render(
    <App 
      state={store.getState()}  
      editProfile={store.editProfile.bind(store)} 
      updateProfileInfo={store.updateProfileInfo.bind(store)} 
      addProfile={store.addProfile.bind(store)} 
      deleteProfile={store.deleteProfile.bind(store)}
      updateNewProfile={store.updateNewProfileInfo.bind(store)}
      updateMyProfile={store.updateMyProfile.bind(store)}
      updateSignForm={store.updateSignForm.bind(store)}

      submitAdd={store.submitAdd.bind(store)}
      submit={store.submit.bind(store)}
      />,
    document.getElementById('root')
  );
}

drawTree(store.getState());

store.subscribe(drawTree);



