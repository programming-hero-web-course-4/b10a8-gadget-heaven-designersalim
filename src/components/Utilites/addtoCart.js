import { toast } from 'react-toastify';

const getCartList = () =>{
    const storedListStr = localStorage.getItem ('add-to-cart')
if(storedListStr){
    const storedList = JSON.parse(storedListStr)
    return storedList
}
else{
    return [];
}
}

const addToCart = (id) =>{
    const storedList = getCartList()

    if (storedList.includes(id)){
        toast.error("Already Exists in Cart!",)
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-to-cart', storedListStr);
        toast.success("Successfully Added on Cart",)
    }
}

export {addToCart, getCartList}