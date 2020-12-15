const initialState={todo:[]}
export const reducer=(state=initialState,action)=>
{
    switch(action.type){
        case "ADD_TODO" :{
            return{
                todo:[...state.todo,action.payload]
            }
        }
        case "DEL_TODO":{
              let left =state.todo.slice(0,action.payload);
              let right=state.todo.slice(action.payload+1);
              return{todo:left.concat(right)}
            }
        default:
            return state;
    }
}


