import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'

const dataProvider = jsonServerProvider('http://localhost:5000');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
    </Admin>
  )
}


export default App