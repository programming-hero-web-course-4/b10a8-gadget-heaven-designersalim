import { toast } from 'react-toastify';

const getWishList = () =>{

    const storedListStr = localStorage.getItem ('wished-list')
if(storedListStr){
    const storedList = JSON.parse(storedListStr)
    return storedList
}
else{
    return [];
}
}

const addWishList = (id) =>{

const storedList = getWishList()

if (storedList.includes(id)){
    toast.error("Already Exists in Wish List!",)
}
else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wished-list', storedListStr);
    toast.success("Successfully Added on WishList",)
}
}



export {addWishList, getWishList}