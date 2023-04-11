import React from 'react'
import './expendeture.css'
import SideBar from '../SideBar/SideBar'
const Expendeture = () => {
  return (
    <>
	<SideBar />
	<div className="body2">
    <div className="container">
		<div className='top1'>
		<h1 >Expendeture</h1> 
		<div>
        <h2>Loan</h2> 
		<div className="sub-container">
			<label for="name">Unique Id:</label>
			<input type="text" id="uniqueid" name="uniqueid" />
		</div>
		<div className="sub-container">
			<label for="ifsc">Ifsc Code:</label>
			<input type="text" id="ifsc" name="ifsc"/>
		</div>
		<div className="sub-container">
			<label for="email">Amount:</label>
			<input type="text" id="loanamount" name="loanamount"/>
		</div>
		
		{/* <!-- <div className="notification">!</div> --> */}
	</div>

	<div className="">
        <h2>Cards</h2> 
		<div className="sub-container">
			<label for="name">Balance:</label>
			<input type="text" id="name" name="name" />
		</div>
		<div className="sub-container">
			<label for="name">Credit Score:</label>
			<input type="text" id="name" name="name" />
		</div>
	</div>

	<div className="">
        <h2>Stocks Managment</h2>
		<div> 
			<h3>Stock</h3>
		<div className="sub-container">
			<label for="name">Stocks:</label>
			<input type="text" id="name" name="name" /> 
		</div>
		<div className="sub-container">
			<label for="phone">	Stock Price:</label>
			<input type="tel" id="phone" name="phone"/>
		</div>
		<div className="sub-container">
			<label for="name">Total amount:</label>
			<input type="text" id="name" name="name"/>
		</div>
		</div>
		<div>
			<h3>Mutual Fund</h3> 
		<div className="sub-container">
			<label for="name">Stocks:</label>
			<input type="text" id="name" name="name"/>
		</div>
		<div className="sub-container">
			<label for="phone">	Stock Price:</label>
			<input type="tel" id="phone" name="phone"/>
		</div>
		<div className="sub-container">
			<label for="name">Total amount:</label>
			<input type="text" id="name" name="name"/>
		</div>
		</div>
	</div>
	<div className="sub-container">
		<button className="change-password">Save Changes</button>
		<button className="delete-account">Discard Changes</button>
	</div>
	</div>
	</div>
	</div>
    </>
  )
}

export default Expendeture