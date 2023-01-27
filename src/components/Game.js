import React, { useEffect, useState,useRef } from 'react'
import { useNavigate } from 'react-router'

export default function Game() {
    let lista2 = []
    let otvoreno = []
    let lista1 = []
    let numberFinished = 0
    let pokusaji = 12
    let [list, setList] = useState([])
    let pokusajiRef = useRef()
    const navigate = useNavigate()

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


    let lista3 = [...lista1, ...lista2]
    let lista4 = lista3
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        let checkEnd = () => {
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
            else if(pokusaji == 0){
                navigate("/game-over")
            }
            else if(pokusaji * 2 < (12 - numberFinished*2)){
                alert(`nemoguce zavrsiti: 
                preostalo pokusaja: ${pokusaji},
                preostalo duplih slika: ${(12 - numberFinished*2)/2}
                `)
                navigate("/game-over")
            }
        }

    useEffect(() => {
        setList(lista4)
    }, [])
    return (
        <div className='gamePage'>
            <h1 className='pokusaji'>Preostalo pokusaja: <span ref={pokusajiRef}>{pokusaji}</span> </h1>
            <div className="gameGrid">
                {list.map(a => {
                    return (<div key={Math.random()} onClick={(e) => {
                        if (e.target.style.opacity != 1 && e.target.className != 'imgDiv') {
                            e.target.style.cssText += 'opacity: 1'
                            if(otvoreno.length == 1){
                                otvoreno = [otvoreno[0], e.target.className]
                                if(otvoreno[0] == otvoreno[1]){
                                    numberFinished = numberFinished + 1
                                }
                                else{
                                    let otvorenoFirst = otvoreno[0]
                                    let otvorenoSecond = otvoreno[1]
                                    setTimeout(() => {
                                        document.getElementsByClassName(otvorenoFirst)[0].style.cssText += 'opacity: 0'
                                        document.getElementsByClassName(otvorenoFirst)[1].style.cssText += 'opacity: 0'
                                        document.getElementsByClassName(otvorenoSecond)[0].style.cssText += 'opacity: 0'
                                        document.getElementsByClassName(otvorenoSecond)[1].style.cssText += 'opacity: 0'
                                    }, 400);
                                }
                                pokusaji = pokusaji - 1
                                pokusajiRef.current.innerHTML = pokusaji
                                otvoreno = []
                            }
                            else if(otvoreno.length == 0){
                                otvoreno = [e.target.className]
                            }
                            checkEnd()
                        }
                    }} className='imgDiv'><img draggable="false" className={a} src={'./images/card-' + (a + 1) + '.jpeg'} /></div>)
                })}
            </div>
        </div>
    )
}
