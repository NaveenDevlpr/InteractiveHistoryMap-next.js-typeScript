import React from 'react'
import eventData from '../HistoryEvents'

interface Props{
    SetselectedCategory:React.Dispatch<React.SetStateAction<string | null >>
}
const Filter = ({SetselectedCategory}:Props) => {

const filterValues=['Empire','Dynasty','Kingdom','Ancient Warfare',
'Civil War','Trade','Archaeology','Revolution','Cold War']
  return (
    <div className='filter'>
        <div className="filter__select">
            <select onChange={(e)=>SetselectedCategory(e.target.value)}>
                <option value="">All</option>
                    {
                        filterValues.map((e)=>{
                            return(
                                <option key={e} value={e}>
                                    {e}
                                </option>
                            )
                        })
                    }
                 
            </select>
        </div>
    </div>
  )
}

export default Filter