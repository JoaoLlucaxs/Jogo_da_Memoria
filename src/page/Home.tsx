import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../assets/gamer.gif'
import Item from '../components/Item'
import Buton from '../components/Button/Buton'
import Icon from '../assets/reset.svg'
import { GridItem } from '../types/GridItem'
import {items} from '../data/Item'
import { Grid } from '../components/Grid'
import { FormatTimer } from '../util/FormatTimer'


function Home() {
    const[play,setPlay]=useState<boolean>(false)
    const[time,setTime]=useState<number>(0)
    const[movie,setMovie]=useState<number>(0)
    const[showCart,setShowCart]=useState<number>(0)
    const[gridItems,setItems]=useState<GridItem[]>([])

    useEffect(()=>{
        resetCard()
    },[])

    useEffect(()=>{
        const timer=setInterval(()=>{
        if(play){
                setTime(time + 1)
        }
        },1000)
        return ()=>clearInterval(timer)
    },[play,time])

    useEffect(()=>{
        if(showCart === 2){
            let aberto=gridItems.filter(item => item.show === true)
            if(aberto.length === 2){
                if(aberto[0].item === aberto[1].item){
                    let gridCard=[...gridItems]
                    for(let i in gridCard){
                        if(gridCard[i].show){
                            gridCard[i].permanetShows=true
                            gridCard[i].show=false
                        }
                    }
                    setItems(gridCard)
                    setShowCart(0)
                }else{
                   setTimeout(()=>{
                    let gridCard=[...gridItems]
                    for(let i in gridCard){
                        gridCard[i].show=false;
                   }
                   setItems(gridCard)
                   setShowCart(0)
                },1000)
                    }
                setMovie(movie => movie + 1)
            }

        }
    },[showCart,gridItems])

    useEffect(()=>{
        if(movie > 0 && gridItems.every(Item=> Item.permanetShows === true)){
            setPlay(false)
        }
    },[movie,gridItems])



    const resetCard=()=>{
        setTime(0)
        setMovie(0)
        setShowCart(0)


        let gridLop:GridItem[]=[]
        for(let i=0;i < (items.length * 2);i++){
            gridLop.push({
                item:null,
                show:false,
                permanetShows:false
            })
        }

        for(let w=0;w<2;w++){
            for(let i=0;i < items.length;i++){
                let position=-1;
                while(position < 0 || gridLop[position].item !== null ){
                   position=Math.floor(Math.random() * (items.length * 2))
                }   
                gridLop[position].item=i
            }
        }

        setItems(gridLop)
        setPlay(true)
    }

    const clickCardItem=(index :number)=>{
        if(play && index !==null && showCart < 2){
            let grid=[...gridItems]

            if(grid[index].permanetShows===false && grid[index].show === false ){
                grid[index].show =true
                setShowCart(showCart + 1)
            }
            setItems(grid)
        }
       
    }

  return (
   <section className='container'>
        <div className='informacao'>
            <div className='logo'>
                <img src={logo} width={200} alt='' />
            </div>
            <div className='info_area'>
                <Item label='Tempo' value={FormatTimer(time)}/>
                <Item label='Movimento' value={movie.toString()}/>
            </div>
            <Buton label='Reinciar' icon={Icon} onClick={resetCard}/>
        </div>
        <div className='area_grid'>
            <div className='grid'>
                {gridItems.map((item,index)=>(
                    <Grid key={index}
                    item={item}
                    onClick={()=>clickCardItem(index)}/>
                ))}
            </div>
        </div>
   </section>
  )
}

export default Home