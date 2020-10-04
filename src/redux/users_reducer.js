import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 2,
    totalUsersCount: 4,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user._id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user._id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(_id => _id != action.userId)
            }
        }
        default:
            return state;
    }
};


export const followSuccess = (userId) => ({type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));    
        dispatch(setUsers(data.users))
    }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod (userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
    }
}

export default usersReducer;