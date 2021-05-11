import { Header, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router';

const Nav = ({ logged_in, history }) => {

  return (
    <>
      <div className={'nav-bar-image'} onClick={() => history.push('/')}>
        <Header as='h2' icon textAlign='center'>

          <Header.Content>My Movie Reviews</Header.Content>
        </Header>
      </div>

      <Menu secondary>
        <Menu.Item name='home' onClick={() => history.push('/')} />
        <Menu.Item name='profile' onClick={() => history.push('/profile')} />
        {
          !logged_in && (
            <>
              <Menu.Item onClick={() => history.push('/login')} name='login' />
              <Menu.Item onClick={() => history.push('/signup')} name='signup' />
            </>
          )
        }
        {
          logged_in && (
            <Menu.Item onClick={() => history.push('/logout')} name='logout' />
          )
        }
      </Menu>
    </>
  )
}

export default withRouter(Nav);