import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import css from './App.module.css';

import Dashboards from './components/Content/Dashboards/Dashboards';
import MainPage from './components/Content/MainPage/MainPage';
import Profiles from './components/Content/Profiles/Profiles';
import Users from './components/Content/Users/Users';
import Header from './components/Header/Header';
import SignPage from './components/SignPage/SignPage';

function App(props) {

  return (
    <BrowserRouter>
        <div className={css.App}>
          <Header />
          <Switch>
              {/* MAINPAGE */}
              <Route render={() => <MainPage
                profiles={props.state.profiles}
                newProfile={props.state.newProfile}
                myProfile={props.state.myProfile} 

                editProfile={props.editProfile} 
                updateProfileInfo={props.updateProfilerInfo}  
                addProfile={props.addProfile} 
                deleteProfile={props.deleteProfile}
                updateNewProfile={props.updateNewProfile}
                updateMyProfile={props.updateMyProfile}

                disabled={props.state.btnOption.disabled}
                submit={props.submit}
                submitAdd={props.submitAdd}
              />} path='/myProfile'/>

              {/* PROFILES */}
              <Route render={() => <Profiles 
                profiles={props.state.profiles} 
                newProfile={props.state.newProfile} 

                editProfile={props.editProfile} 
                updateProfileInfo={props.updateProfilerInfo}  
                addProfile={props.addProfile} 
                deleteProfile={props.deleteProfile}
                updateNewProfile={props.updateNewProfile}

                disabled={props.state.btnOption.disabled}
                submit={props.submit}
                submitAdd={props.submitAdd}
              />} 
              path='/profiles' />

              {/* USERS */}
              <Route render={() => <Users users={props.state.users}/>} path='/users'/>

              {/* DASHBOARDS */}
              <Route render={() => <Dashboards state={props.state}/>} path='/dashboards'/>

              {/* SIGN FORM */}
              {/* authentication */}
              <Route render={() => <SignPage state={props.state} />} path='/' exact/>
          </Switch>
          <div className={css.footer}></div>
          
        </div>
    </BrowserRouter>
  );
}

export default App;

