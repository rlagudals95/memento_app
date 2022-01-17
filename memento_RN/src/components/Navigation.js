import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {actionCreators as steemActions} from '../../reducers/steem'

function Navigation() {
    const steem = useSelector((state) => state.steem.feeds);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('dispatch : ' , dispatch(steemActions.pushFeeds('페이로드 ')))

        console.log('상태값 : ',steem)
        return () => {
            
        }
    }, [])

    console.log('상태값2 : ',steem)
    return (
        <div>
            dddd
        </div>
    )
}

export default Navigation
