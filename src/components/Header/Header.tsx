import React, { Children } from 'react'
import './style.css'
import Select from '../CategorySelect/Select'

interface Props {
    handleSubmit:(e: React.FormEvent) => void,
    value: string,
    onChange: (e:any) => void,
    placeholder: string,
    children?: any
}
function Header({ handleSubmit, value, onChange, placeholder,children }: Props) {

  return (
    <div className='headerContainer'>
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" placeholder={placeholder} onChange={(value)=>onChange(value)} value={value} className='input'/><br/> {children}
        </form>
    </div>
  )
}

export default Header