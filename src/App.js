import React, { Fragment } from 'react';
import HomeTemplate from './templates/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate';
import TrangChu from './pages/TrangChu/TrangChu';
import Trang404 from './pages/404/Trang404';



//Viết hàm render theo template

function App() {
  let renderTemplate = () => {
    if (window.location.pathname.search('/trangchu') | window.location.pathname.search('/') !== -1) {
      return <TrangChu />
    }
    else {
      return <HomeTemplate />
    }

  }
  let renderTemplateAdmin = () => {
    if (window.location.pathname.search('/admin') !== -1) {
      return <AdminTemplate />
    }
    else {
      return <HomeTemplate />
    }
  }
 
  return (
    <Fragment>
      {renderTemplate()}
    </Fragment>,
    <Fragment>
      {renderTemplateAdmin()}
    </Fragment>
  );
}

export default App;
