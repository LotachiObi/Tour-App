import React from "react";
import Container from "../container";


export default function Footer(){
    return(
        <footer className="pt-20 mt-20 bg-slate-700">
            <Container className="flex flex-col md:flex-row gap-10 justify-between ">
                <div>
                <div className="text-lg text-white">
                    Tour App
                </div>
                <p className='text-lg text-slate-400'>discover amazing places at exclusive deals Eat, Shop, Visit mouth watering destinations </p>
                </div>
               <div>
                <div className='text-lg text-slate-400'>
                    Susbcribe
                </div>
                <input type="email" placeholder="Email" />
                <button className='text-lg text-slate-400'>Submit</button>
               </div>

              
            </Container>
            <p className="text-center text-sm text-slate-400 pt-20 pb-4">Copyright &copy; Obi-Nwaigwe L. All Rights Reserved</p>
        </footer>
    )
}