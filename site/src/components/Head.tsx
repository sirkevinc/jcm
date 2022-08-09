import React from "react"
import { Helmet } from "react-helmet"

interface HeadProps {
    title: string
}
const Head = ({ title }: HeadProps) => {
    return (
        <>
            <Helmet 
                defaultTitle="Default Title | Jangi Consulting"
                title={title}
                titleTemplate="%s | Jangi Consulting"
            />
        </>
    )
}

export default Head