import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import anime from 'animejs'
import 'remixicon/fonts/remixicon.css'

const link = "https://images.unsplash.com/photo-1566873273534-ee0db5846f30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"

const Home = () => {
    const title = useRef(null)

    useEffect(() => {
        var textWrapper = title.current
        textWrapper.innerHTML = textWrapper.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
        )

        anime.timeline().add({
            targets: ".title .letter",
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 2000 + 60 * i,
        })


        const tl = new gsap.timeline()

        tl.from(".lrow a", {
            stagger: .2,
            opacity: 0,
            x: 10
        })

        tl.from(".playbtn i", {
            stagger: .2,
            opacity: 0,
            x: 10
        }, "-=1")

        tl.from(".playbtn p", {
            stagger: .2,
            opacity: 0,
            x: 10
        }, "-=1")

        tl.from(".hero img", {
            opacity: 0,
            y: 20,
            duration: 2,
            ease: "Expo.easeInOut",
        }, "-=1.5")

    },[])

    return (
        <>
            <main>
                <div className="links">
                    <div className="lrow" id="row1">
                        <Link to="/">Home</Link>
                        <Link to="/">Pricing</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">About</Link>
                    </div>
                    <div className="lrow" id="row1">
                        <Link to="/">Home</Link>
                        <Link to="/">Pricing</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">About</Link>
                    </div>
                </div>
                <div className="playbtn">
                    <i className="ri-play-circle-fill"></i>
                    <p>PLAY VIDEO-00:01:21<br/>INTRODUCTION PART 1.</p>
                </div>
                <div className="hero">
                    <h1 className="title" ref={title}>182-674</h1>
                    <img src={link} alt="" />
                </div>
            </main>
        </>
    )
}

export default Home
