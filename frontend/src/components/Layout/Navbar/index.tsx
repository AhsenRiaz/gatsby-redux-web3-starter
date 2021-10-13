import React , {FC} from 'react'
import MetaMaskLogin from '../../Login'
import * as s from "./style"

interface Props {}

const Navbar:FC<Props> = ({}) => {
    return (
        <s.container>
            <LeftNav/>
            <MiddleNav/>
            <RightNav/>
        </s.container>
    )
}


export const LeftNav = () => {
    return (
        <div style={{display:"flex"}} >
            <img src="https://avatars.dicebear.com/api/miniavs/.svg" alt="avatar" width="50" height="50" />
        </div>
    )
}


export const MiddleNav = () => {
    return (
        <div style={{display:"flex" , justifyContent:"center"}} >
           Gatsby NFT Marketplace Starter
        </div>
    )
}

export const RightNav = () => {
    return (
        <div >
            <MetaMaskLogin/>
        </div>
    )
}


export default Navbar
