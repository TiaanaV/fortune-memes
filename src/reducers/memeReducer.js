

const GET_MEME='GET-MEME';


let initialState = {
    memes:[{
              id: 1,
              imageUrl:
                "https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&autoc=format&w=926&fit=clip",
            },
            {
              id: 2,
              imageUrl: "https://static-cse.canva.com/blob/945517/1600w-QZiqeDqC-q4.jpg",
            },
            {
              id: 3,
              imageUrl:
                "https://i.pinimg.com/originals/12/ac/a3/12aca3c4e28a267919555df9212f4e32.jpg",
            },
            {
              id: 4,
              imageUrl:
                "https://static.mk.ru/upload/entities/2022/04/01/07/articlesImages/image/60/7a/c1/1c/0dce2546b63095398809375ea6e04db5.jpg",
            },
      ],
      isFetching:true,
}

const memeReducer = (state = initialState,action) => {

    switch(action.type){
        case GET_MEME:{
            return { ...state,memes:action.payload,
            };
        }
        

        default:
            return state;
        }
    }
    export const getRandomMeme = (id,imageUrl) => ({ type: GET_MEME, payload:{id,imageUrl}});

    // export const getProfileInfo = (userId) => {
    //     return (dispatch) =>{
    //         profileAPI.getProfileInfo(userId).then((data) => {
    //         dispatch(setUserProfile(data));
    //         });
    //     }
    // }

    // export const getStatus = (userId) => async(dispatch) =>{
    //     let response = await profileAPI.getStatus(userId)
    //         dispatch(setStatus(response.data));
    //     }
    

export default memeReducer;  