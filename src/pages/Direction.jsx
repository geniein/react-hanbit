import { useEffect, useState } from 'react';
import Map from '../components/Map';

function Direction() {    
    
  return (
        <div>
            <div className="container mx-auto flex-col">
                <div className="font-bold my-4 text-xl text-green-600">
                    ◎ 오시는길
                </div>                
                <div className='w-full h-64 sm:h-128'>
                    <Map/>
                </div>
                 <div className='w-full h-36 bg-gray-50 pt-6 pl-6 sm:pt-12 sm:pl-12 sm:h-48'>
                    <h3 className="text-sm sm:text-base">한빛방문요양복지센터</h3>
                    <p className='font-bold text-base sm:text-xl'>천안시 동남구 충무로 158-35, 럭스프라자 501호</p>
                    <br/>
                    <p className="text-sm sm:text-base">쌍용역 1번 출구에서 648m (도보10분소요)</p>
                </div>
            </div>               
        </div>
  );
}

export default Direction;