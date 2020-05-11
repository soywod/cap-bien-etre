import React, {FC, useEffect} from "react"
import {useToggle} from "react-captain"

import {Intro} from "../../page-templates"

const Page: FC = () => {
  const [isReady, setReady] = useToggle(false)

  useEffect(() => {
    import("./page-1-anim.js").then(() => setReady(true))
  })

  if (!isReady) {
    return null
  }

  return (
    <Intro
      subtitle="Apprendre à gérer son stress et ses émotions"
      animation="D5BF51ADC3CB5E4BAF06476BB5B4681C"
    />
  )
}

export default Page
