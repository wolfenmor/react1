import React, {useEffect} from 'react';
import {leagueActions} from "../../store/slices/leagueSlice";
import {useDispatch, useSelector} from "react-redux";
import League from "./League";
const Leagues = () => {

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(leagueActions.getAll())
    }, [dispatch])
    const {leagues} = useSelector(state => state.leagues)
    console.log(leagues)
    return (
        <div>
            {leagues.map(league => <League league={league}/>)}
        </div>
    );
};

export default Leagues;