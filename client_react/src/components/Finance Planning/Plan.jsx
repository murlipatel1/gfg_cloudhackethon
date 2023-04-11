import React from 'react'
import './plan.css'
import SideBar from '../SideBar/SideBar'

const Plan = () => {
  return (
    <>
	<SideBar />
    <div className='body2 html1'>
    <div className="container">
		<div className="calculator top2">
			<h2>Bike</h2>
			<form>
				<label htmlFor="expected-amount">Expected Amount:</label>
				<input type="number" id="expected-amount" name="expected-amount"/>
				<label htmlFor="result">Result:</label>
				<input type="number" id="result" name="result" disabled/>
				<button type="submit">Calculate</button>
			</form>
		</div>
		<div className="calculator">
			<h2>Car</h2>
			<form>
				<label htmlFor="expected-amount">Expected Amount:</label>
				<input type="number" id="expected-amount" name="expected-amount"/>
				<label htmlFor="result">Result:</label>
				<input type="number" id="result" name="result" disabled/>
				<button type="submit">Calculate</button>
			</form>
		</div>
		<div className="calculator">
			<h2>Home</h2>
			<form>
				<label htmlFor="expected-amount">Expected Amount:</label>
				<input type="number" id="expected-amount" name="expected-amount"/>
				<label htmlFor="result">Result:</label>
				<input type="number" id="result" name="result" disabled/>
				<button type="submit">Calculate</button>
			</form>
		</div>
		<div className="calculator">
			<h2>Loan with Interest</h2>
			<form>
				<label htmlFor="amount">Amount:</label>
				<input type="number" id="amount" name="amount"/>
				<label htmlFor="balance">Balance:</label>
				<input type="number" id="balance" name="balance"/>
				<label htmlFor="period">Period:</label>
				<input type="number" id="period" name="period"/>
				<label htmlFor="result">Result:</label>
				<input type="number" id="result" name="result" disabled/>
				<button type="submit">Calculate</button>
			</form>
		</div>
	</div>
    </div>
    </>
  )
}

export default Plan