import React from 'react'
import Tile from './Tile'

const Beginner = () => {
    return (
        <div>
        <h1 style={{textAlign:'left',marginLeft:'5%'}}>Beginner Level</h1>
            <div style={{padding:'0 4%'}}>
            <Tile content="REST Definition"/>
            <Tile content="MCQ Challenge"/>
            <Tile content="BASIC CONCEPTS:-TYPE OF REQUESTS(GET PUT POST)"/>
            <Tile content="MCQ Challenge"/>
            <Tile content="CORS CONCEPT AND WAYS TO SOLVE IT"/>

            <h2 style={{textAlign:'center',marginLeft:'5%'}}>SOLVED EXAMPLE SIMPLE GET REQUEST</h2>
            <Tile content="Get request to return a string in json format"/>
            <Tile content="Get request to return a list"/>
            <Tile content="Get request to return nested json"/>
            
            <h2 style={{textAlign:'center',marginLeft:'5%'}}>PROBLEMS SIMPLE GET REQUEST</h2>

            <Tile content="Post request to accept a string from request and return the output."/>
            <Tile content="Post request to accept 2 numbers(integer or decimal) and return mathematical operations"/>

            <h2 style={{textAlign:'center',marginLeft:'5%'}}>SOLVED EXAMPLE SIMPLE DELETE REQUEST WITHOUT DB</h2>
            <Tile content="Delete request to delete a user from the list.Given is a list of users."/>
            <Tile content="Delete request to /users/:id removes the corresponding user."/>

            <h2 style={{textAlign:'center',marginLeft:'5%'}}>PROBLEMS SIMPLE DELETE REQUEST WITHOUT DB</h2>
            <Tile content="Delete request to delete a user from the list.Given is a list of users."/>
            <Tile content="Delete request to /users/:id removes the corresponding user."/>

            <h2 style={{textAlign:'center',marginLeft:'5%'}}>SOLVED EXAMPLE SIMPLE PUT REQUEST WITHOUT DB</h2>

            <Tile content="Given is a list of users, update name of a user"/>
            <Tile content="Same example"/>

            <h2 style={{textAlign:'center',marginLeft:'5%'}}>PROBLEMS SIMPLE PUT REQUEST WITHOUT DB</h2>

            <Tile content="Given is a list of users, update name of a user"/>
            <Tile content="Same example"/>
            
            <h2 style={{textAlign:'center',marginLeft:'5%'}}>SOLVED EXAMPLE SIMPLE PATCH REQUEST WITHOUT DB</h2>
            <Tile content=" Given is a list of users, update name of a user"/>
            <Tile content="Same example"/>

            <h2 style={{textAlign:'center',marginLeft:'5%'}}>PROBLEMS SIMPLE PATCH REQUEST WITHOUT DB</h2>
            <Tile content=" Given is a list of users, update name of a user"/>
            <Tile content="Same example"/>
            <h2 style={{textAlign:'center',marginLeft:'5%'}}>SOLVED EXAMPLE SIMPLE OPTIONS REQUEST WITHOUT DB</h2>
            <Tile content="Example 1"/>
            <Tile content="Example 2"/>
            <h2 style={{textAlign:'center',marginLeft:'5%'}}>PROBLEMS SIMPLE OPTIONS REQUEST WITHOUT DB</h2>
            <Tile content="Problem 1"/>
            <Tile content="Problem 2"/>
            <Tile content="DB CONNECTION(MONGODB)"/>
            <Tile content="CONCEPT SOLVED EXAMPLES"/>
            <Tile content="DB CONNECTION(MYSQL)"/>
            <Tile content="CONCEPT SOLVED EXAMPLES "/>
            
            </div>

        </div>
    )
}

export default Beginner
