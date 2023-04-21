import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import Item from "../item/Item";
import "./Main.css"


const Main = ()=> {
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(()=> {    
        axios.get('http://localhost:1337/api/best-sellers?populate=*').then((bestSeller)=> {
            setBestSeller(bestSeller.data.data)
        }).catch(()=> {

        }).finally(()=> {

        });
    }, [])
    return (
        <>
            <Header/>
            <section className="flex-container">
                {bestSeller.map((item, key)=> {
                    return <Item item={item.attributes} />
                })}
            </section>
        </>
    )
}
export default Main