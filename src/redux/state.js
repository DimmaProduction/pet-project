let store = {
    _state: {
        profiles: [
            { id: 1, name: 'Danylo Chornyi', man: 'Male', date: '2003-03-21', city: 'KYIV' },
            { id: 2, name: 'Danylo Galytskyi', man: 'Female', date: '2021-05-21', city: 'KYIV' },
            { id: 3, name: 'Danylo Chornyi', man: 'Male', date: '2003-03-21', city: 'KYIV' },
            { id: 4, name: 'Danylo Chornyi', man: 'Female', date: '2003-03-21', city: 'KYIV' },
        ],
        newProfile: {
            name: '',
            man: 'Male',
            date: '',
            city: ''
        },
        profileID: 0,
        users: [
            { id: 1, username: '1White', email: 'mail@gmail.com', password: '', isAdmin: 'true', profiles: '3', isEighteen: true },
            { id: 2, username: '2White', email: 'mail@gmail.com', password: '', isAdmin: 'false', profiles: '6', isEighteen: false},
            { id: 3, username: '3White', email: 'mail@gmail.com', password: '', isAdmin: 'false', profiles: '2', isEighteen: false},
            { id: 4, username: '4White', email: 'mail@gmail.com', password: '', isAdmin: 'false', profiles: '0', isEighteen: false},
            { id: 5, username: '5White', email: 'mail@gmail.com', password: '', isAdmin: 'false', profiles: '10', isEighteen: true},
        ],
        newUser: {

        },
        btnOption : {
            disabled: true,
        },
        myProfile: {
            username: 'Username',
            email: 'username@outlook.com',
            role: 'Admin',
            isEighteen: true,
            password: '11110000'
        },
        signForm: {
            email: '',
            password: '',
            btnDisabled: true
        }
        
    },
    

    addProfile() {
        let newProfile = {
            id: this._state.profiles.length+1,
            name: this._state.newProfile.name,
            man: this._state.newProfile.man,
            date: this._state.newProfile.date,
            city: this._state.newProfile.city
        };

        this._state.profiles.push(newProfile);

        this._state.newProfile.name = '';
        this._state.newProfile.man = '';
        this._state.newProfile.date = '';
        this._state.newProfile.city = '';
        this._state.btnOption.disabled = true;

        this._calSubscriber(store._state);
    },

    submitAdd() {
        this._state.btnOption.disabled = true;
        this.subscribe2(this.addProfile);
    },

    editProfile(number, setGender) {
        this._state.profileID = number;

        this._state.profiles.forEach(function(each, index) {
            if (number === each.id){
                store.updateNewProfileInfo(each.name, each.man, each.date, each.city);
            }
        })

        this.subscribe2(this.updateProfileInfo);
        this._calSubscriber(store._state);
    },

    deleteProfile (number) {
        this._state.profiles.splice(number-1,1);
        this._state.profiles.forEach(function(item, i) {
                item.id = i+1;
        });

        console.log(this._state.profiles);
        this._calSubscriber(store._state);
    },

    updateProfileInfo() {

        let newProfile = {
            id: this._state.profileID,
            name: this._state.newProfile.name,
            man: this._state.newProfile.man,
            date: this._state.newProfile.date,
            city: this._state.newProfile.city
        };

        this._state.profiles.forEach(function(each, index) {
            if (store._state.profileID === each.id){
                each.id = newProfile.id;
                each.name = newProfile.name;
                each.man = newProfile.man;
                each.date = newProfile.date;
                each.city = newProfile.city;
            }
        })

        this._state.newProfile.name='';
        this._state.newProfile.man = '';
        this._state.newProfile.date = '';
        this._state.newProfile.city = '';
        this._state.btnOption.disabled = true;

        this._calSubscriber(store._state);
    },

    updateNewProfileInfo(name, man, date, city) {

        this._state.newProfile.name = name;
        this._state.newProfile.man = man;
        this._state.newProfile.date = date;
        this._state.newProfile.city = city;

        if (this._state.newProfile.name === '' || this._state.newProfile.man === '' || this._state.newProfile.date === '' || this._state.newProfile.city === ''){
            this._state.btnOption.disabled = true;
            console.log('Має бути true');
            console.log(this._state.btnOption.disabled);
        } else {
            this._state.btnOption.disabled = false;
            console.log('Має бути false');
            console.log(this._state.btnOption.disabled);
        }

        this._calSubscriber(store._state);
    },

    updateMyProfile(username, email, role) {
        this._state.myProfile.username = username;
        this._state.myProfile.email = email;
        this._state.myProfile.role = role;

        if (this._state.myProfile.username === '' || this._state.newProfile.email === ''){
            this._state.btnOption.disabled = true;
            console.log('Має бути true');
            console.log(this._state.btnOption.disabled);
        } else {
            this._state.btnOption.disabled = false;
            console.log('Має бути false');
            console.log(this._state.btnOption.disabled);
        }

        this._calSubscriber(store._state);
    },

    updateSignForm (email, password) {
        this._state.signForm.email = email;
        this._state.signForm.password = password;
        
        if (this._state.signForm.email === '' || this._state.signForm.password === '')  
                this._state.signForm.btnDisabled = true; 
        else    this._state.signForm.btnDisabled = false;
        
        this._calSubscriber(store._state);
    },

    submit(value){
        this._calSubscriber2(value);
    },

    getState() {
        return this._state;
    },

    // call function
    _calSubscriber() {
        console.log('State changed');
    },
    
    subscribe(observer)  {
        this._calSubscriber = observer;
    },
    
    // call function2 for submit button on modal window
    _calSubscriber2() {
        console.log('State changed2');
    },
    
    subscribe2(observer)  {
        this._calSubscriber2 = observer;
    }
}

export default store;
window.store = store;
