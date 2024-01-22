
//import './infiniteScroll.css';

import { useState } from 'react';
import styleObj from './style.module.css' ;
import { useFetchData } from '../hooks/useFetchData';

/**
 * you can provide styling via CSS module - style.module.css
 *   1. avoid collision b/w the css class name of componnets.
 *   2. It also append a unique identifier.
 * 
 */

const InfinteScroll = () =>{
    {/**
       1. Fetch the data, pagination -> click on next button will get the second set of data elements.
            1. we have shown static data.
            2. make fetch API call to get the dynamic data
                - show loader
                - as you recieve the data then hide the loader and render the data.
                - get the paginated data only (show only next 10 set of data)
                - implemented the pagination
                - custom hook - reusing the logic
       2. Intersection Observer -> last elment -> load the second set of data elements.
    */}

    const [pageNum, setPageNum] = useState(1);

    const { data , error, isLoading } = useFetchData(pageNum);

    return(
        <>
          <h1 className={styleObj.heading}>Machine coding problem: Infinite Scrolling/Lazy loading </h1>

          <div className={styleObj.container}>
            {
             isLoading && (<div>Loading...</div>)
            // 
            // data && (data.map((item)=>{
            //     return <div className={styleObj.body_text}>{item}</div>
            // })
            
            }

            {
                error && (<div>{error.message}</div>)
            }

            {
                data && data.map((item)=>{
                    return <div className={styleObj.body_text} key={item.id}>{item.body}</div>
                })

            }
            <div>{pageNum}</div>
            <button onClick={
                    ()=>{
                        setPageNum(pageNum + 1);
                    }
            }>next</button>
          </div>
        </>
    )
}

export default InfinteScroll;