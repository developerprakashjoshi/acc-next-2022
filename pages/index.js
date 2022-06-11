import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
export default function Home() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const onSubmit = (event) => {
    event.preventDefault()
    if (!firstName) {
      alert('Please add First Name')
      firstNameRef.current.focus();
      return
    }
    if (!lastName) {
      alert('Please add Last Name')
      lastNameRef.current.focus();
      return
    }
  }
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  return (
    <div>
      <Head>
        <title>Ramakrishna Mission, Shillong</title>
        <meta name="description" content="Annual Cultural Competition" />
        <meta name="keywords" content="Annual Cultural Competition" />
        <link rel="icon" href="https://class.rkmhikai.online/public/favicon/apple-icon-57x57.png" />
      </Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <div className='container'>
        <h5 className='pt-2'>Ramakrishna Mission, Shillong</h5>
        <hr />
        <h6>Registration Form, 2022</h6>
        <form onSubmit={onSubmit}>
          <div className='row g-3'>
            <div className="col-md-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" ref={firstNameRef} value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            </div>
            <div className="col-md-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" ref={lastNameRef} value={lastName} onChange={(e)=>setLastName(e.target.value)} />
            </div>
          </div>
          <div className='row g-3 mt-2'>
            <div className="col-md-3">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}
