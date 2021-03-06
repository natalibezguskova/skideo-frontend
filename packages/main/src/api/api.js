import * as axios from 'axios';


const getInstance = () => {
    // noinspection JSUnresolvedFunction
    return axios.create({
        baseURL: 'https://skideo.net:8443',
        headers: {
            "Authorization" : localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
    });
};

export const authAPI = {
    login(login, password) {
        return getInstance().post('/login', {login, password});
    },
    register(login, password) {
        return getInstance().post('/registration', {login, password});
    }
};


export const profileAPI = {
    getProfile() {
        return getInstance().get('/profile');
    },
    editProfile(user) {
        return getInstance().put('/profile', {...user});
    },
    addVideo(payload) {
        return getInstance().post('/profile/video', payload.video);
    }
};