import React from 'react'
import { RadialBar } from './Radialbar';
import { RadialTotal } from './RadialTotal'


export const Results = () => {
  return (
    <>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 d">
              < RadialBar
              valorA="55"
              valorB="84"
              valorC="86"
                        />
            
              </div>
            <div class="col-sm-6">
            < RadialTotal />
            </div>

        </div>
    </div>
    </>
  )
}
