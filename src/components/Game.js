import React, { useEffect, useState,useRef } from 'react'
import { useNavigate } from 'react-router'

export default function Game() {
    var lista2 = []
    var otvoreno = []
    var lista1 = []
    var navigate = useNavigate()
    var numberFinished = 0
    var pokusaji = 14
    var pokusajiDiv = useRef()
    var [list, setList] = useState([])
    do {
        let random = Math.floor(Math.random() * 10)
        if (!lista2.includes(random) && random <= 5) {
            lista2.push(random)
        }
    } while (lista2.length !== 6)

    do {
        let random = Math.floor(Math.random() * 10)
        if (!lista1.includes(random) && random <= 5) {
            lista1.push(random)
        }
    } while (lista1.length !== 6)


    var lista3 = [...lista1, ...lista2]
    var lista4 = lista3
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    useEffect(() => {
        setList(lista4)
    }, [])
    return (
        <div className='gamePage'>
            <h1 className='pokusaji'>Preostalo pokusaja: <span ref={pokusajiDiv}>{pokusaji}</span> </h1>
            <div className="gameGrid">
                {list.map(a => {
                    return (<div key={Math.random()} onClick={(e) => {
                        console.log()
                        if (e.target.style.opacity != 1 && e.target.className != 'imgDiv') {
                            if (otvoreno.length !== 2) {
                                e.target.style.cssText += 'opacity: 1'
                                otvoreno = [...otvoreno, e.target.className]
                                if (otvoreno.length === 2) {
                                    pokusaji = pokusaji-1
                                    pokusajiDiv.current.innerText = pokusaji
                                    if(pokusaji === 0){
                                        if(otvoreno[0] !== otvoreno[1]){
                                            lista1 = []
                                            otvoreno = []
                                            lista1 = []
                                            lista3 = []
                                            lista4 = []
                                            numberFinished = 0
                                            setList([])
                                            navigate('/game-over')
                                        }
                                    }
                                    if (otvoreno[0] !== otvoreno[1]) {
                                    }
                                    else {
                                        numberFinished = numberFinished + 1
                                        if (numberFinished === 6) {
                                            lista1 = []
                                            otvoreno = []
                                            lista1 = []
                                            lista3 = []
                                            lista4 = []
                                            numberFinished = 0
                                            setList([])
                                            navigate('/game-finished')
                                        }
                                        otvoreno = []
                                    }
                                }
                            }
                            else {
                                if (otvoreno[0] !== otvoreno[1]) {
                                    document.getElementsByClassName(otvoreno[0])[0].style.cssText += 'opacity: 0'
                                    document.getElementsByClassName(otvoreno[0])[1].style.cssText += 'opacity: 0'
                                    document.getElementsByClassName(otvoreno[1])[0].style.cssText += 'opacity: 0'
                                    document.getElementsByClassName(otvoreno[1])[1].style.cssText += 'opacity: 0'
                                    otvoreno = []
                                }
                                else {
                                    numberFinished = numberFinished + 1
                                    if (numberFinished === 6) {
                                        lista1 = []
                                        otvoreno = []
                                        lista1 = []
                                        lista3 = []
                                        lista4 = []
                                        numberFinished = 0
                                        setList([])
                                        navigate('game-over')
                                    }
                                    otvoreno = []
                                }
                            }
                        }

                    }} className='imgDiv'><img draggable="false" className={a} src={'./images/card-' + (a + 1) + '.jpeg'} /></div>)
                })}
            </div>
        </div>
    )
}
