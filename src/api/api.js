import axios from 'axios';


const instance = axios.create({
    //withCredentials: true
    baseURL: 'http://localhost:4000/',
    responseType: "json"
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&limit=${pageSize}`)
        .then(response => {
            return response.data
        });
     },
     follow(userId) {
        return instance.post(`follow?page=${userId}`)
     },
     unfollow(userId) {
        return instance.delete(`follow?page=${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsilete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
            
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`users/5eebe26c0c8aab1de464a98b` /*+ userId*/);
    },
    getStatus(userId) {
        return instance.get(`profile/status/5eebe26c0c8aab1de464a98b` /*+ userId*/);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}



