// import { CurrencyAmount, JSBI, Trade } from '@bscswap/sdk'
import React from 'react'
import styled from 'styled-components'

import Swap from '../Swap'
import Pool from '../Pool'


export default function Main() {
 
  return (
    <>

      <MainSection>
        <ContainerGrid>
          <TradeBox>
            <TradeBoxLiquidity>
              <Pool></Pool>

            </TradeBoxLiquidity>
            <TradeBoxSwap>
              <Swap></Swap>
            </TradeBoxSwap>
          </TradeBox>
        </ContainerGrid>
      </MainSection>


    </>
  )
}

const MainSection = styled.section`
    width: 100%;
    display: flex;
    /* height: 100%; */
    min-height: calc(100vh - 100px);
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    padding-top: 140px;
`

const ContainerGrid = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`

const TradeBox = styled.div`
    display: flex;
    max-width: 970px;
    margin: 20px auto 30px auto;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
`

const TradeBoxLiquidity = styled.div`
    background-color: #16191e;
    border-color: #febb00;
    -webkit-box-shadow: 0 0 25px 0 rgb(254 187 0 / 40%);
    box-shadow: 0 0 25px 0 rgb(254 187 0 / 40%);
    width: 50%;
    /* padding: 20px; */
    max-width: 426px;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid #000000;
    position: relative;
    margin-bottom: 48px;
    min-height: 440px;

`

const TradeBoxSwap = styled.div`
    background-color: #16191e;
    width: 50%;
    /* padding: 20px; */
    max-width: 426px;
    background-color: #fff;
    border-radius: 10px;
    border: 2px solid #000000;
    position: relative;
    margin-bottom: 48px;
    min-height: 440px;

`