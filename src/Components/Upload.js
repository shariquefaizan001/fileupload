import React, { useEffect, useState } from 'react'

export default function Upload() {
  const files = { mypdf: "" };
  const [filesvalue, setfilesvalue] = useState(files);
  const [fileserrors, setfileserrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const changeinput = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    setfilesvalue({ ...filesvalue, [name]: value });
    console.log(filesvalue);
    setIssubmit(true);
  }

  const enterdata = (e) => {
    e.preventDefault();
    setfileserrors(validiate(filesvalue))
  }

  useEffect(() => {
    if (Object.keys(fileserrors).length === 0 && isSubmit) {
      alert("upload")
    }
  }, [fileserrors])

  const validiate = (valuesss) => {
    const error = {};


    if (!valuesss.mypdf) {
      error.mypdf = "upload pdf please "
    }
    return error;
  }
  localStorage.setItem('pdf', JSON.stringify(filesvalue));
  return (
    <div>
      <form onSubmit={enterdata}>

        {/* <input type="file" accept=".pdf" value={filesvalue.mypdf} onChange={changeinput} name="mypdf" /> */}
        <input type="text" value={filesvalue.mypdf} onChange={changeinput} name="mypdf" />
        <button >Upload!</button>
        <p className='red'>{fileserrors.mypdf}</p>
      </form>
    </div>

  )
}
