import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRcodeGeneterator() {
  const [qrcode, setQrcode] = useState('')
  const [input, setInput ] = useState('')

  function handleGenerate(){
    setQrcode(input)
    setInput('')
  }

  return <div>
    <h1>QR Code Generator</h1>
    <div>
      <input value={input} onChange={(e)=> setInput(e.target.value)} type='text' name='qr code' placeholder="Enter your value here" />
      <button disabled={input && input.trim() !==""?false:true} onClick={handleGenerate}>Generate</button>
    </div>
    <div><QRCode id='qr-code-value' value={qrcode } size={400} bgColor='#ffff' /></div>
  </div>
}