'use client'
import React from 'react'
import useDownloader from 'react-use-downloader'
const DownloadBTN = () => {
    const { size, elapsed, percentage, download, 
        cancel, error, isInProgress } = 
    useDownloader();

    const fileUrl = "../ResumeTest.pdf"
    const filename = "ResumeTest.pdf"

  return (
    <button onClick={() => download(fileUrl, filename)}> Download Resume </button>
  )
}

export default DownloadBTN