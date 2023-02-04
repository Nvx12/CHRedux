import { HADNLEDONE, HANDLEADD, HANDLEDELETE } from "./ActionsType";

export const handleadd = (payload) => {
  return { 
    type: HANDLEADD, 
    payload 
    };
};

export const handledelete=(payload)=>{
  return(
    {
      type:HANDLEDELETE,
      payload
    }
  )
}

export const handledone=(payload)=>{
  return (
    {
      type: HADNLEDONE,
      payload
    }
  )
}
