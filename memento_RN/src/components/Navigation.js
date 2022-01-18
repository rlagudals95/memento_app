import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {actionCreators as steemActions} from '../../reducers/steem'
import AppBar from "@material-ui/core/AppBar";
import { BottomNavigation, BottomNavigationAction  } from '@mui/material';
import { RestoreIcon, FavoriteIcon, LocationOnIcon } from "@material-ui/icons";

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
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    )
}

export default Navigation
