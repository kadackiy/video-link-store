import React, {useContext, useEffect, useState} from 'react'
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
    const history = useHistory()
    const [link, setLink] = useState('')
    const { request } = useHttp()
    const auth = useContext(AuthContext)

    useEffect( () => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', { from: link }, {
                    Authorization: `Bearer ${ auth.token }`
                })

                history.push(`/detail/${data.link._id}`)
            } catch (e) {}
        }
    }

    const onChangeHandler = even => {
        setLink(even.target.value)
    }

    return (
        <div className='row'>
            <div className='col s8 offset-s2 creatLinkBlock'>
                <div className='input-field'>
                    <input
                        placeholder='Вставьте ссылку'
                        id='link'
                        type='text'
                        value={ link }
                        onChange={ onChangeHandler }
                        onKeyPress={ pressHandler }
                    />
                </div>
            </div>
        </div>
    )
}