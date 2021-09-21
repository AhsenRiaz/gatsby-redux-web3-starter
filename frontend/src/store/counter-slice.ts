import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Web3 from 'web3'



export const web3init:any = createAsyncThunk(
    "web3init",
    async (data, thunkAPI) => {
        try {
            if (Web3.givenProvider) {
                const web3 = new Web3(Web3.givenProvider)
                await Web3.givenProvider.enable()
                const address = await web3.eth.getAccounts()

                console.log(address)
                return {
                    web3, address: address[0]
                }
            }
        } catch (error) {

        }
    }
)






const connectSlice = createSlice(
    {
        name: 'connectSlice',
        initialState: {
            web3: null,
            address: null,
            name: 'ali',
            msg: null
        },
        reducers: {

        }, extraReducers: {
            [web3init.fulfilled]: (state, action) => {
                try {
                    state.web3 = action.payload.web3
                    state.address = action.payload.address
                } catch (error) {
                    console.log(error.message)
                    //       state.msg = error
                }

            },
           
            [web3init.rejected]: (state, action) => {
                console.log("asd")
                state.web3 = null
                state.address = null
                state.msg = "user denied"
            }
        }
    }
)

export const connectReducer = connectSlice.reducer