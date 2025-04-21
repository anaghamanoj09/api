import React from 'react'

function Footer() {
  return (
    <>
    <div></div>
    <footer className="bg-dark text-secondary py-3 mt-4 "  style={{height: "500px",}}>
        <div className="container" style={{height: "300px"}}>
        <div className=" row">
            <div className="col-lg-2 col-md-4 col-sm-6">
                <p>About us</p>
                <h6 className="text-light"></h6>
            </div>
            <div  className="col-lg-2 col-md-4 col-sm-6">
                <p >Group Companies</p>
                <h6 className="text-light"></h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <p>Help</p>
                <h6 className="text-light"></h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <p>Consumer Policy</p>
                <h6 className="text-light"></h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <p>Mail us:</p>
                <h6 className="text-light"></h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                <p>Registered office address:</p>
                <h6 className="text-light"></h6>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}
export default Footer