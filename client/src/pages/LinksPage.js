import React, { useEffect, useCallback, useContext, useState, Fragment } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader';
import { AuthContext } from '../context/AuthContext';
import { LinksList } from '../components/LinksList';

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const { request, loading } = useHttp()
    const { token } = useContext(AuthContext)

    const getLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${ token }`
            })

            setLinks(fetched)
        } catch (e) {}
    }, [request, token])

    useEffect( () => {
        getLinks()
    }, [getLinks])

    if (loading) {
        return <Loader />
    }

    return (
        <Fragment>
            <h1>Ваши ссылки</h1>
            <LinksList links={ links }/>
        </Fragment>
    )
}