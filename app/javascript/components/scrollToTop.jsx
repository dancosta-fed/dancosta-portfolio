import React, { useState, useRef, useEffect } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

export const ScrollToTop = () => {
  // const [isVisible, setIsVisible] = useState(false)
  const btn = useRef('false')

  const toggleVisibility = () => {
    if(window.pageYOffset > 300) {
      btn.current.classList.remove("atTheTop")
      btn.current.classList.add("backToTop-btn");
      console.log('scrolling happening')
    } else {
      btn.current.classList.remove("backToTop-btn")
      btn.current.classList.add("atTheTop");
      console.log('at the top')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return(
    <div className="fixed-bottom goUpBtn">
      <div type="button" onClick={scrollToTop} className="" ref={btn}>
        Back to top <BiArrowFromBottom className="h-6 w-6" aria-hidden='true' />
      </div>
    </div>
  )
}