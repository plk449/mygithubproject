
import { useState,useEffect } from "react";


function useProfile(url='') {
    let [data,setData]=useState({})

    useEffect(() => {
        async function fatchfollower() { 

          await  fetch(`https://api.github.com/users/plk449${url}`)
            .then((res) => res.json())
                .then((re) => {
                    // console.log(re)
                    setData(re)
            })
        }
        fatchfollower()
    },[])
    return data;
}

export default useProfile;