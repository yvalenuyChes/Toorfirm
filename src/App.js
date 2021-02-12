import React from 'react'
import Wrapper from './containers/Wrapper/Wrapper'
import { Route, Switch, Redirect } from 'react-router-dom'
import Main_page from './hoc/Main_page/Main_page'
import Kanada from './pages/Kanada/Kanada'
import Page_404 from './pages/Page_404/page_404'


function App() {


  return (

    <Wrapper>
      <Switch>
        <Route path="/" component={Main_page} exact />
        <Route path="/kanada" component={Kanada} exact />
        <Route path="/not__found" component={Page_404} exact />
        {/* <Route path="/ordered_tikets" component={Private_office} exact /> */}
        <Redirect to={"/not__found"} />
      </Switch>
    </Wrapper>

  )
}


export default App
