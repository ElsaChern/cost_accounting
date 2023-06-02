import React from 'react'
import CostActions from './Buttons/CostActions'
import CostScale from './CostScale'
import CostList from './CostList'
import NewCost from './CostForm/NewCost'

const MainComponent = () => {
    return (
        <>
            <NewCost />
            <CostActions />
            <CostScale />
            <CostList />
        </>

    )
}

export default MainComponent