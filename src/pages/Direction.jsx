import { useEffect, useState } from 'react';
import Map from '../components/Map';

function Direction() {    
    
  return (
        <div>
            <div className="container mx-auto flex-col">
                <div className="font-bold my-4 text-xl text-green-600">
                    ◎ 오시는길
                </div>                
                <div className='w-full h-128'>
                    <Map/>
                </div>
                <div className='w-full h-48 bg-gray-50 pt-12 pl-12'>
                    <h3 >한빛방문요양복지센터</h3>
                    <p className='font-bold text-xl'>천안시 동남구 충무로 158-35, 럭스프라자 501호</p>
                    <br/>
                    <p >쌍용역 1번 출구에서 648m (도보10분소요)</p>
                </div>
            </div>               
        </div>
  );
}

export default Direction;