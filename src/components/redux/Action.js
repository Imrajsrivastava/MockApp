import axios from "axios";

const storeDataAction =(data)=>{
    return {
        type:"ADDDATA_SUCCESS",
        payload:data

    }
}

const addDataAction =(data)=>{
    return {
        type:"NEWDATA_SUCCESS",
        payload:data

    }
}




// get data 


const getData = ()=>async(dispatch)=>{

    const products =await axios("https://jsonserver-208u.onrender.com/products");
    console.log(products.data);
    dispatch(storeDataAction(products.data))


}

// add data 

const handleForm = (e,formdata)=>async(dispatch) => {
    e.preventDefault();

    const product = await axios.post("https://jsonserver-208u.onrender.com/products",formdata)
    console.log(product);
    dispatch(addDataAction(product.data));
  };

//   delete 

const handleDelete = (id)=>async(dispatch)=>{
    const delteitem = await axios.delete(`https://jsonserver-208u.onrender.com/products/${id}`);
    // console.log(delteitem);
    // const restData = products.filter((el)=>el.id !==id);
    dispatch(getData());

  }

export {storeDataAction,getData,addDataAction,handleForm,handleDelete}